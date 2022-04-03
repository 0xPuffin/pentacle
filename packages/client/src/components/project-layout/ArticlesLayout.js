import React from "react";

export const ArticlesLayout = ({projects = []}) => {

    return (<>
        <section className={"main-content margin-top-1"}>
            {projects.map((project, index) => (<a key={index} id={`item-${index}`} href={project.article_url} rel="noopener noreferrer" target={"_blank"}>
                <article className="p-card wide beginner margin-bottom-1">
                    <h3>{project.article_name}</h3>
                    <span className={"text-link"}>{project.article_url}</span>
                </article>
            </a>))}
        </section>
    </>);
};