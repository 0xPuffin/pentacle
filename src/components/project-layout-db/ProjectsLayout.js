import React, {useEffect, useState} from 'react';
import ProjectDetail from "./ProjectDetail";
import ProjectSummary from "./ProjectSummary";

export const ProjectsLayout = ({projects}) => {
    const [projectDetail, setProjectDetail] = useState(projects[0]);

    useEffect(() => {
        setProjectDetail(projects[0]);
    }, [projects]);

    return (
        <>
            <section className={"overflow-scroll padding-y-2 main-content "}>
                <article className={"flex stretch"}>
                    {projects.map((project, index) => (
                        <ProjectSummary
                            key={index}
                            {...project}
                            onClick={() => setProjectDetail(projects[index])}
                        />
                    ))}
                </article>
            </section>
            <ProjectDetail {...projectDetail}/>
        </>
    );
}
