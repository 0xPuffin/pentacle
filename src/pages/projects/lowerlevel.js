import React from "react";
import Button from './project.button.component'
import Link from './project.link.component'

const Project = ({projectDetailLower}) => {

    console.log(projectDetailLower)

    return (
        <section className={"box feature dark main-content editorial-content box-padding"}>
                <span>{projectDetailLower.img &&
                <img src={projectDetailLower.img} className={"width-1"}/>}{projectDetailLower.img}</span>
            <article className={"editorial-content"}>
                <h2 className={"boxed"}>{projectDetailLower.name}</h2>
                <article className={"margin-top-0-5"}>
                    <ul className={"list-none"}>
                        {projectDetailLower.children[0]?.children[0]?.url &&
                        <Link url={projectDetailLower.children[0].children[0].url}
                              title={projectDetailLower.children[0].children[0].name}/>}
                        {projectDetailLower.children[0]?.children[1]?.url &&
                        <Link url={projectDetailLower.children[0].children[1].url}
                              title={projectDetailLower.children[0].children[1].name}/>}
                        {projectDetailLower.children[0]?.children[2]?.url &&
                        <Link url={projectDetailLower.children[0].children[2].url}
                              title={projectDetailLower.children[0].children[2].name}/>}
                        {projectDetailLower.children[0]?.children[3]?.url &&
                        <Link url={projectDetailLower.children[0].children[3].url}
                              title={projectDetailLower.children[0].children[3].name}/>}
                        {projectDetailLower.children[0]?.children[4]?.url &&
                        <Link url={projectDetailLower.children[0].children[4].url}
                              title={projectDetailLower.children[0].children[4].name}/>}
                        {projectDetailLower.children[0]?.children[5]?.url &&
                        <Link url={projectDetailLower.children[0].children[5].url}
                              title={projectDetailLower.children[0].children[5].name}/>}
                        {projectDetailLower.children[0]?.children[6]?.url &&
                        <Link url={projectDetailLower.children[0].children[6].url}
                              title={projectDetailLower.children[0].children[6].name}/>}
                        {projectDetailLower.children[0]?.children[7]?.url &&
                        <Link url={projectDetailLower.children[0].children[7].url}
                              title={projectDetailLower.children[0].children[7].name}/>}
                    </ul>
                    <article className={"flex"}>
                        <div className={"margin-top-2 margin-bottom-2"}>
                            {projectDetailLower.description && <p>{projectDetailLower.description}</p>}
                        </div>
                        <div></div>
                    </article>
                </article>
            </article>
        </section>
    );
};

export default Project;