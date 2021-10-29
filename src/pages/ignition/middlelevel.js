import React, {useState, useEffect} from "react";
import Project from "./lowerlevel";
import ProjectTile from "./project-tile";


const Projects = ({projects}) => {
    const [projectDetail, setProjectDetail] = useState(projects.children[0]);

    useEffect(() => {
        setProjectDetail(projects.children[0]);
    }, [projects]);

    return (
        <main>
            <section className={"overflow-x-scroll padding-y-3 main-content"}>
                <article className={"flex-mobile stretch"}>
                    {projects.children.map((project, index) => (
                        <ProjectTile
                            key={index}
                            {...project}
                            onClick={() => setProjectDetail(projects.children[index])}
                        />
                    ))}
                </article>
            </section>
            <Project projectDetailLower={projectDetail}/>
        </main>
    );
};

export default Projects;
