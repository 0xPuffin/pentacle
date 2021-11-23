import React, {useState, useEffect} from "react";
import Project from "./project.component.tsx";
import ProjectTile from "../../components/defi-learning/project-tile";

const Projects = ({project, projects}) => {
    const [projectDetail, setProjectDetail] = useState(projects[0]);

    useEffect(() => {
        setProjectDetail(projects[0]);
    }, [projects]);

    return (
        <>
            <section className={"overflow-scroll padding-y-2 main-content "}>
                <article className={"flex stretch"}>
                    {projects.map((project, index) => (
                        <ProjectTile
                            key={index}
                            {...project}
                            onClick={() => setProjectDetail(projects[index])}
                        />
                    ))}
                </article>
            </section>
            <Project {...projectDetail}/>
        </>
    );
};

export default Projects;
