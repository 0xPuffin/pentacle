import React from "react";
// import ArticleDetail from "./ArticleDetail";
// import ArticleSummary from "./ArticleSummary";

export const ArticlesLayout = ({projects = []}) => {

    return (<>
        <section className={"main-content margin-top-1"}>
                {projects.map((project, index) => (<article key={index} id={`item-${index}`} className="p-card wide beginner margin-bottom-2">
                    <h3>{project.article_name}</h3>
                    <a className={"text-link"} href={project.article_url}>{project.article_url}</a>
                </article>))}
        </section>
    </>);
};