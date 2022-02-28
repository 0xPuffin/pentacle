import React, {useContext} from "react";
import {SearchContext} from "../../providers/search-provider";

import Layout from "../../components/layouts/layout";
import Header from "../../components/header/Header";
import {useLocation} from "react-router-dom";
import RelatedLinks from "../../components/related-links/RelatedLinks";
import {EducationLayout} from "../../components/project-layout/EducationLayout";

export const EducationPage = () => {

    const {pageData} = useContext(SearchContext);
    const {searchResults, pageDataLoading} = useContext(SearchContext);
    const location = useLocation();

    // const handleChange = (event) => {
    //     setSearchString(event.target.value);
    // };

    const hasNoRelatedLinks = ["/projects", "/projects/decentralised-exchange", "/projects/insurance",];

    return (<>
        <Header/>
        <Layout>

            {pageData && (<main className={"main-container"}>
                <section className={"main-content"}>
                    <article className={"flex space-between"}>
                        {/*<h1>{pageDataLoading ? "loading..." : title}</h1>*/}
                        <h1>education</h1>
                        {/*<EducationTagNav/>*/}
                        {/*<EducationNavigation/>*/}
                    </article>
                    {/*<article className={"margin-y-3 flex-center"}>*/}
                    {/*    <div className={"fieldset"}>*/}
                    {/*        <label aria-labelledby={"search"} className={"display-none"} htmlFor={"search"}>Search</label>*/}
                    {/*        <input id="search" type="text" placeholder="filter by project name" value={search} onChange={handleChange}/>*/}
                    {/*        <input className={"padding-left-0-75"} type="reset" value="clear" onClick={handleClear}/>*/}
                    {/*    </div>*/}
                    {/*</article>*/}
                </section>
                {!pageDataLoading && (<>
                    <EducationLayout projects={searchResults}/>
                    {!hasNoRelatedLinks.includes(location.pathname) && (<RelatedLinks/>)}
                </>)}
            </main>)}
        </Layout>
    </>);
}
