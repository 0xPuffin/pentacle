import React, {useState, useEffect} from "react";
import ProjectDetail from "./ProjectDetail";
import ProjectSummary from "./ProjectSummary";

export const ProjectsLayout = ({projects}) => {
    const [projectDetail, setProjectDetail] = useState(projects[0]);

    useEffect(() => {
        setProjectDetail(projects[0]);
    }, [projects]);

    return (
        <>
            <section className={"main-container"}>
                <article className={"overflow-scroll padding-top-2 padding-bottom-3 main-content"}>
                    <article className={"flex-mobile stretch"}>
                        {projects.map((project, index) => (
                            <ProjectSummary
                                key={index}
                                {...project}
                                onClick={() => setProjectDetail(projects[index])}
                            />
                        ))}
                    </article>
                </article>
            </section>
            <ProjectDetail {...projectDetail}/>
        </>
    );
};
