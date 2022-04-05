import React, {useContext} from "react";
import {SearchContext} from "../../providers/search-provider";

import Layout from "../../components/layouts/layout";
import Header from "../../components/header/Header";
import {useLocation} from "react-router-dom";
import RelatedLinks from "../../components/related-links/RelatedLinks";
import {ArticlesLayout} from "../../components/project-layout/ArticlesLayout";

export const ArticlesPage = () => {

    const {pageData} = useContext(SearchContext);
    const {searchResults, pageDataLoading} = useContext(SearchContext);
    const location = useLocation();

    const hasNoRelatedLinks = ["/articles"];

    return (<>
        <Header/>
        <Layout>
            {pageData && (<>
                    <article className={"main-header"}>
                        <h1>Articles</h1>
                    </article>
                {!pageDataLoading && (<>
                    <ArticlesLayout projects={searchResults}/>
                    {!hasNoRelatedLinks.includes(location.pathname) && (<RelatedLinks/>)}
                </>)}
            </>)}
        </Layout>
    </>);
}
