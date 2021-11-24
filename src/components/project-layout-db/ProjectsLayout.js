import React, {useEffect, useState} from 'react';
import ProjectDetail from "./ProjectDetail";


export const ProjectsLayout = ({projects}) => {
    const [projectDetail, setProjectDetail] = useState(projects[0]);

    useEffect(() => {
        setProjectDetail(projects[0]);
    }, [projects]);

    return (
        <>
            <nav>
                <article className={"nav-content overflow-x-scroll"}>
                    {projects.map((project, index) => (
                        <a className={"text-link padding-right-2"} key={index}
                           onClick={() => setProjectDetail(projects[index])}>{project.name}</a>
                    ))}
                </article>
            </nav>
            <ProjectDetail projects={projectDetail}/>
        </>
    );
}
