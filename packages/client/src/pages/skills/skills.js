import React, {useContext} from "react";
import {SearchContext} from "../../providers/search-provider";
import {TitleContext} from "../../providers/title-provider";

import Layout from "../../components/layouts/layout";
import Header from "../../components/header/Header";
import {useLocation} from "react-router-dom";
import RelatedLinks from "../../components/related-links/RelatedLinks";
import {SkillsLayout} from "../../components/project-layout/SkillsLayout";

export const SkillsPage = () => {

    const {pageData} = useContext(SearchContext);
    const {searchResults, pageDataLoading} = useContext(SearchContext);
    // const {setSearchString, handleClear} = useContext(SearchDispatchContext);
    const {title} = useContext(TitleContext);
    const location = useLocation();

    // const handleChange = (event) => {
    //     setSearchString(event.target.value);
    // };

    const hasNoRelatedLinks = ["/skills", "/skills/degen"];

    return (<>
        <Header/>
        <Layout>

            {pageData && (<main className={"main-container"}>
                <section className={"main-content"}>
                    <article className={"flex space-between"}>
                        <h1>{pageDataLoading ? "loading..." : title}</h1>
                    </article>
                </section>
                {!pageDataLoading && (<>
                    <SkillsLayout projects={searchResults}/>
                    {!hasNoRelatedLinks.includes(location.pathname) && (<RelatedLinks/>)}
                </>)}
            </main>)}
        </Layout>
    </>);
}
