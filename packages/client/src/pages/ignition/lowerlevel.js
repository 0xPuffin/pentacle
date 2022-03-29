import React from "react";
import Link from "../../components/project-elements/ProjectLink";

const Project = ({projectDetailLower}) => {
    return (<section className={"main-content-wide margin-top-1"}>
        <article className={"main-content "}>
            <h1 className={"body-text padding-top-2 margin-bottom-1"}>{projectDetailLower.name}</h1>

        <article className={"flex flex-start flex-mobile flex-wrap"}>
            {projectDetailLower.children[0]?.children[0]?.url && (<Link
                url={projectDetailLower.children[0].children[0].url}
                title={projectDetailLower.children[0].children[0].name}
            />)}
            {projectDetailLower.children[0]?.children[1]?.url && (<Link
                url={projectDetailLower.children[0].children[1].url}
                title={projectDetailLower.children[0].children[1].name}
            />)}
            {projectDetailLower.children[0]?.children[2]?.url && (<Link
                url={projectDetailLower.children[0].children[2].url}
                title={projectDetailLower.children[0].children[2].name}
            />)}
            {projectDetailLower.children[0]?.children[3]?.url && (<Link
                url={projectDetailLower.children[0].children[3].url}
                title={projectDetailLower.children[0].children[3].name}
            />)}
            {projectDetailLower.children[0]?.children[4]?.url && (<Link
                url={projectDetailLower.children[0].children[4].url}
                title={projectDetailLower.children[0].children[4].name}
            />)}
            {projectDetailLower.children[0]?.children[5]?.url && (<Link
                url={projectDetailLower.children[0].children[5].url}
                title={projectDetailLower.children[0].children[5].name}
            />)}
            {projectDetailLower.children[0]?.children[6]?.url && (<Link
                url={projectDetailLower.children[0].children[6].url}
                title={projectDetailLower.children[0].children[6].name}
            />)}
            {projectDetailLower.children[0]?.children[7]?.url && (<Link
                url={projectDetailLower.children[0].children[7].url}
                title={projectDetailLower.children[0].children[7].name}
            />)}
        </article>
        <article className={"margin-top-1 readability-max-width"}>
            {projectDetailLower.description && (<p>{projectDetailLower.description}</p>)}
        </article>
        </article>
    </section>);
};

export default Project;
