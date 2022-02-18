import React, {useContext} from "react";
import Layout from "../../components/layouts/layout";
import HeaderV2 from "../../components/header-v2/HeaderV2";
import {SearchContext} from "../../providers/search-provider";
import {ArticlesTagNav} from "../../components/tags/articles-tag-nav";

export const ArticlesPage = () => {
    const {pageData} = useContext(SearchContext);
    return (<>
            <HeaderV2/>
            <Layout>
                {pageData && (<main className={"main-container"}>
                        <section className={"main-content"}>
                            <article className={"flex space-between"}>
                                <h1 className={"boxed"}>articles</h1>
                                <ArticlesTagNav/>
                            </article>
                            {pageData.map((data, index) => (<article key={index}>
                                    <h3>{data.article_name}</h3>
                                    <a href={data.article_url}>{data.article_url}</a>
                                </article>))}
                        </section>
                    </main>)}
            </Layout>
        </>);
};
