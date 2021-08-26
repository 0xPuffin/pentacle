import {Runtime, Inspector} from '@observablehq/runtime';
import React, {useEffect, useRef, useState} from 'react';
import {useDebouncedCallback} from 'use-debounce';
import notebook from '../util/sunburst';
import filterData from '../util/filter-data';
import formatString from '../util/format-string';
import HeaderSimple from './header-simple';
import Spinner from './spinner';

export default function SunburstGraph({type, colorScheme}) {
    const headerRef = useRef();
    const filterRef = useRef();
    const diagramRef = useRef();
    const searchRef = useRef();
    const [loading, setLoading] = useState(true);
    const [moduleRef, setModuleRef] = useState();
    const [jsonData, setJsonData] = useState();
    const [categories, setCategories] = useState();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isFitToScreen, setIsFitToScreen] = useState(false);
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q') || '';
    const item = params.get('item') || '';

    /**
     * @function
     * @description
     * Receives debounced input from the search field in order to filter the graph.
     */
    const filter = useDebouncedCallback((val) => {
        const filteredData = filterData(jsonData, val);
        const onlyFiltered = filteredData.children.filter((c) => c.filtered);

        if (onlyFiltered.length) {
            moduleRef.redefine('data', {
                name: jsonData.name,
                children: onlyFiltered,
            });
            return;
        }

        if (filteredData.children.length) {
            moduleRef.redefine('data', filteredData);
            return;
        }

        moduleRef.redefine('data', jsonData);
    }, 1000);


    useEffect(() => {
        const runtime = new Runtime();
        const _moduleRef = runtime.module(notebook(type, colorScheme), (name) => {
            if (name === 'chart') {
                return new Inspector(diagramRef.current);
            }
        });
        setModuleRef(_moduleRef);

        /**
         * @function
         * @description
         * Awaits the initialization of the graph and its data in order to access them.
         */
        const setData = async () => {
            const data = await _moduleRef.value('data');
            setCategories(['All', ...data.children.map(({name}) => name)]);
            setJsonData(data);

            await _moduleRef.value('chart');

            setLoading(false);
            if (q) {
                searchRef.current.value = q;
                filter(q);
            }

            // NOTE: This is kinda hacky for now because at this point I personally did not know how
            // to achieve sth similar with @observablehq/runtime.
            // @TODO proper state management
            if (item) {
                const linkedEl = diagramRef.current.querySelector(
                    `#${item.toLocaleLowerCase().replaceAll(' ', '-')}`
                );
                if (linkedEl) {
                    linkedEl.dispatchEvent(new Event('click'));
                }
            }
        };

        setData();

        return () => runtime.dispose();
    }, [colorScheme, filter, item, q, type]);


    /**
     * @function
     * @description
     * Sets the height of the svg when fit-to-screen is active
     */
    useEffect(() => {
        const svg = document.querySelector('.observablehq svg');
        if (svg) {
            svg.style.maxHeight = isFitToScreen
                ? `calc(100vh - (${(headerRef.current &&
                    headerRef.current.getBoundingClientRect().height) +
                +document.querySelector('footer').getBoundingClientRect().height +
                (filterRef.current &&
                    filterRef.current.getBoundingClientRect().height) +
                41
                }px) - 3rem)`
                : 'unset';
        }
    }, [headerRef, filterRef, isFitToScreen]);

    /**
     *
     * @param {string} label
     * @returns {JSX.Element}
     * @description
     * Button which is being used to filter the selection.
     */
    const button = (label) => {
        const formattedLabel = formatString(label);
        return (
            <button
                key={label}
                id={`btn-${formattedLabel}`}
                testid={`p-${formattedLabel}`}
                className={'primary-gradient toggle-button cursor-pointer margin-right-0-25 margin-bottom-0-25 ' + (selectedCategory === label ? 'active' : '')}
                onClick={() => {
                    const clickAll = () => document.querySelector('circle').dispatchEvent(new Event('click'));
                    clickAll();
                    setTimeout(() => clickAll(), 1)
                    setTimeout(() => clickAll(), 20)
                    if (formattedLabel !== 'all') {
                        setTimeout(() => {
                            setSelectedCategory(label);
                            // NOTE: This is kinda hacky for now because at this point I personally did not know how
                            // to achieve sth similar with @observablehq/runtime.
                            // @TODO proper state management
                            const linkedEl = diagramRef.current.querySelector(
                                `#${formattedLabel}`
                            );
                            if (linkedEl) {
                                linkedEl.dispatchEvent(new Event('click'));
                            }
                        }, 200);
                    }
                }}>{label}</button>
        );
    };

    function handleReset() {
        const reset = ""
        return (
            () => filter(reset)
        )
    }

    return (
        <>
            <header ref={headerRef}>
                <article className="header-content flex flex-small justify-space-between">
                    <div>
                        <HeaderSimple/>
                    </div>
                    <div className={"align-content-start justify-end"}>
                        <div className={"fieldset inline boxed"}>
                            <label aria-labelledby={"search"} className={"display-none"} htmlFor={"search"}>Search</label>
                            <input id="search" type="text" placeholder="Search" onChange={(e) => filter(e.target.value)}/>
                            <input className={"padding-left-0-75"} type="reset" value="reset" onClick={handleReset()}/>
                        </div>
                    </div>
                </article>
            </header>

            <main>
                <article className={"margin-top-1"} ref={filterRef}>
                    <div className={"flex-group flex-center"}>
                        {categories && categories.map(button)}
                        <div className={"margin-left-1 fit-to-screen"} onClick={() => setIsFitToScreen(!isFitToScreen)}>
                            <span
                                className="material-icons cursor-pointer">{isFitToScreen ? 'zoom_out_map' : 'fit_screen'}</span>
                        </div>
                    </div>
                </article>
                {loading && <Spinner/>}
                <article className={"sunburst margin-top-1 flex justify-center"} ref={diagramRef}/>
            </main>
        </>
    );
}
