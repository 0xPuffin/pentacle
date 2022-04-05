import React, {useContext} from "react";
import {SearchContext} from "../../providers/search-provider";

import Layout from "../../components/layout";
import {useLocation} from "react-router-dom";
import RelatedLinks from "../../components/related-links/RelatedLinks";
import {EducationLayout} from "../../components/project-layout/EducationLayout";

export const EducationPage = () => {

    const {pageData} = useContext(SearchContext);
    const {searchResults, pageDataLoading} = useContext(SearchContext);
    const location = useLocation();

    const hasNoRelatedLinks = ["/projects", "/projects/decentralised-exchange", "/projects/insurance",];

    return (<>
        <Layout>
            {pageData && (<>
                <article className={"main-header"}><h1>Glossary</h1></article>
                {!pageDataLoading && (<>
                    <EducationLayout projects={searchResults}/>
                    {!hasNoRelatedLinks.includes(location.pathname) && (<RelatedLinks/>)}
                </>)}
            </>)}
        </Layout>
    </>);
}
