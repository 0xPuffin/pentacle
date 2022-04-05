import React, {useContext} from "react";
import {SearchContext} from "../../providers/search-provider";

import Layout from "../../components/layout";
import {useLocation} from "react-router-dom";
import RelatedLinks from "../../components/related-links/RelatedLinks";
import {SkillsLayout} from "../../components/project-layout/SkillsLayout";

export const SkillsPage = () => {

    const {pageData} = useContext(SearchContext);
    const {searchResults, pageDataLoading} = useContext(SearchContext);
    const location = useLocation();

    const hasNoRelatedLinks = ["/skills", "/skills/degen"];

    return (<>
        <Layout>
            {pageData && (<>
                <article className={"main-header"}><h1>Skills</h1></article>
                {!pageDataLoading && (<>
                    <SkillsLayout projects={searchResults}/>
                    {!hasNoRelatedLinks.includes(location.pathname) && (<RelatedLinks/>)}
                </>)}
            </>)}
        </Layout>
    </>);
}
