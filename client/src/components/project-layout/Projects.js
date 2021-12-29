import React, {useState, useEffect} from "react";
import Project from "./ProjectDetail";
import ProjectTile from "./ProjectSummary";
import TagDescription from "../tag-layout/TagDescription";


const Projects = ({projects}) => {
    const [projectDetail, setProjectDetail] = useState(projects.children[0]);

    useEffect(() => {
        setProjectDetail(projects.children[0]);
    }, [projects]);

    return (
        <>
            {/*<article className={"overflow-x-scroll padding-y-3 main-content"}>*/}
            {/*    <article className={"flex-mobile stretch"}>*/}
            {/*        {projects.children.map((project, index) => (*/}
            {/*            <ProjectTile*/}
            {/*                key={index}*/}
            {/*                {...project}*/}
            {/*                onClick={() => setProjectDetail(projects.children[index])}*/}
            {/*            />*/}
            {/*        ))}*/}
            {/*    </article>*/}
            {/*</article>*/}
            <main>
                {/*<section className={"main-container"}>*/}

                {/*</section>*/}
                <Projects projectDetailLower={projectDetail}/>
            </main>
        </>
    );
};

export default Projects;