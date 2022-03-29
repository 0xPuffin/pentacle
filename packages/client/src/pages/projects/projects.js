import React, { useContext } from "react";
import Layout from "../../components/layouts/layout";
import { ProjectsLayout } from "../../components/project-layout/ProjectsLayout";
import RelatedLinks from "../../components/related-links/RelatedLinks";
import { SearchContext, SearchDispatchContext } from "../../providers/search-provider";
import { useLocation } from "react-router-dom";
import Spinner from "../../components/spinner";
import Header from "../../components/header/Header";
import Select from 'react-select'


export const ProjectsPage = () => {
    const { searchResults, pageDataLoading, search, tags } = useContext(SearchContext);
    const { setSearchString, handleClear, setSelectedTags } = useContext(SearchDispatchContext);
    const location = useLocation();
    // const [vals, setVals] = useState([]);

    const handleChange = (event) => {
        setSearchString(event.target.value);
    };

    const hasNoRelatedLinks = ["/projects", "/projects/decentralised-exchange", "/projects/insurance",];

    return (<>
        <Header />
        <Layout>
            <main className={"main-container"}>
                <section className={"main-content"}>
                    <div className={"fieldset align-center margin-bottom-2 tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-items-center tw-gap-6"} style={{flexWrap: 'wrap'}}>
                        <div>
                            <label aria-labelledby={"search"} className={"display-none"} htmlFor={"search"}>Search</label>
                            <input id="search" type="text" placeholder="filter by project name" value={search}
                                onChange={handleChange} />
                            <input className={"padding-left-0-75"} type="reset" value="clear" onClick={handleClear} />
                        </div>

                        <div style={{ color: 'black', textAlign: 'left' }}>
                            <Select
                                options={tags.map(t => ({ value: t.name, label: t.name }))}
                                isClearable
                                isMulti
                                placeholder="Tags"
                                styles={{

                                    control: styles => ({ ...styles, backgroundColor: 'transparent' }),
                                    container: styles => ({ ...styles, minWidth: 240, maxWidth: 480 }),
                                    placeholder: styles => ({ ...styles, color: 'white' }),
                                    indicatorsContainer: styles => ({ ...styles, color: 'white' }),
                                }}
                                onChange={e => setSelectedTags(e)}
                            />
                        </div>
                    </div>
                </section>
                <section className={"main-content"}>
                    {pageDataLoading && (<div className="flex flex-center">
                        <Spinner />
                    </div>)}
                </section>
                {!pageDataLoading && (<>
                    <ProjectsLayout projects={searchResults} />
                    {!hasNoRelatedLinks.includes(location.pathname) && (<RelatedLinks />)}
                </>)}
            </main>
        </Layout>
    </>);
};
