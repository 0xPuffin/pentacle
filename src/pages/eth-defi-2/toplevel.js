import React, {useEffect, useState} from 'react';
import Projects from './middlelevel';
import Header from "../../components/header";

export const TopLevel = ({projects}) => {
    const [projectDetail, setProjectDetail] = useState(projects[0]);
    console.log(projectDetail)

    useEffect(() => {
        setProjectDetail(projects[0]);
    }, [projects]);

    return (
        <>
            <Header/>
            <nav>
                <article className={"nav-content overflow-x-scroll"}>
                    {projects.map((project, index) => (
                        <a className={"text-link padding-right-2"} key={index}
                           onClick={() => setProjectDetail(projects[index])}>{project.name}</a>
                    ))}
                </article>
            </nav>
            <Projects projects={projectDetail}/>
        </>
    );
}
