import React, {useState, useEffect} from "react";
import ProjectDetail from "./ProjectDetail";
import ProjectSummary from "./ProjectSummary";

export const ProjectsLayout = ({projects}) => {
    const [projectDetail, setProjectDetail] = useState(projects[0]);

    useEffect(() => {
        setProjectDetail(projects[0]);
    }, [projects]);

    return (
        <main>
            <section className={"main-container"}>
                <article className={"overflow-scroll padding-y-3 main-content "}>
                    <article className={"flex-mobile stretch"}>
                        {projects.map((project, index) => (
                            <ProjectSummary
                                key={index}
                                {...project}
                                onClick={() => setProjectDetail(projects[index])}
                            />
                        ))}
                    </article>
                    <article className={"nav-content overflow-x-scroll"}>
                        {projects.map((project, index) => (
                            <a className={"text-link padding-right-2"}
                               key={index}
                               onClick={() => setProjectDetail(projects[index])}>
                                {project.name}
                            </a>
                        ))}
                    </article>
                </article>
            </section>
            <ProjectDetail {...projectDetail}/>
        </main>
    );
};
