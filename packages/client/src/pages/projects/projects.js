import React, {useContext} from "react";
import Layout from "../../components/layout";
import {ProjectsLayout} from "../../components/project-layout/ProjectsLayout";
import RelatedLinks from "../../components/related-links/RelatedLinks";
import {SearchContext, SearchDispatchContext} from "../../providers/search-provider";
import {useLocation} from "react-router-dom";
import Spinner from "../../components/spinner";

export const ProjectsPage = () => {
    const {searchResults, pageDataLoading, search} = useContext(SearchContext);
    const {setSearchString, handleClear} = useContext(SearchDispatchContext);
    const location = useLocation();

    const handleChange = (event) => {
        setSearchString(event.target.value);
    };

    const hasNoRelatedLinks = ["/projects", "/projects/decentralised-exchange", "/projects/insurance",];

    return (<>
        <Layout>
            <section className={"main-header"}>
                <div className={"fieldset align-center"}>
                    <label aria-labelledby={"search"} className={"display-none"} htmlFor={"search"}>Search</label>
                    <input id="search" type="text" placeholder="filter by project name" value={search}
                           onChange={handleChange}/>
                    <input className={"padding-left-0-75"} type="reset" value="clear" onClick={handleClear}/>
                </div>
            </section>
            <section>
                {pageDataLoading && (<div className="flex flex-center">
                    <Spinner/>
                </div>)}
            </section>
            {!pageDataLoading && (<>
                <ProjectsLayout projects={searchResults}/>
                {!hasNoRelatedLinks.includes(location.pathname) && (<RelatedLinks/>)}
            </>)}
        </Layout>
    </>);
};
