import React, {useContext} from "react";
import Layout from "../../components/layouts/layout";
import {ProjectsLayout} from "../../components/project-layout/ProjectsLayout";
import RelatedLinks from "../../components/related-links/RelatedLinks";
import {SearchContext, SearchDispatchContext} from "../../providers/search-provider";
import {useLocation} from "react-router-dom";
import Spinner from "../../components/spinner";
import Header from "../../components/header/Header";
// import {ProjectTagNav} from "../../components/tags/project-tag-nav";

export const ProjectsPage = () => {
    const {searchResults, pageDataLoading, search} = useContext(SearchContext);
    const {setSearchString, handleClear} = useContext(SearchDispatchContext);
    const location = useLocation();

    const handleChange = (event) => {
        setSearchString(event.target.value);
    };

    const hasNoRelatedLinks = ["/projects", "/projects/decentralised-exchange", "/projects/insurance",];

    return (<>
        <Header/>
        {/*<ProjectTagNav/>*/}
        <Layout>
            <main className={"main-container"}>
                <section className={"main-content"}>
                    <div className={"fieldset align-center margin-bottom-2"}>
                        <label aria-labelledby={"search"} className={"display-none"} htmlFor={"search"}>Search</label>
                        <input id="search" type="text" placeholder="filter by project name" value={search}
                               onChange={handleChange}/>
                        <input className={"padding-left-0-75"} type="reset" value="clear" onClick={handleClear}/>
                    </div>
                </section>
                <section className={"main-content"}>
                    {pageDataLoading && (<div className="flex flex-center">
                        <Spinner/>
                    </div>)}
                </section>
                {!pageDataLoading && (<>
                    <ProjectsLayout projects={searchResults}/>
                    {!hasNoRelatedLinks.includes(location.pathname) && (<RelatedLinks/>)}
                </>)}
            </main>
        </Layout>
    </>);
};
