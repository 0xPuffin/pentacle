import React, {useEffect, useState} from "react";
import Projects from "./middlelevel";
import Header from "../../components/header/Header";

export const TopLevel = ({projects}) => {
    const [projectDetail, setProjectDetail] = useState(projects[0]);

    useEffect(() => {
        setProjectDetail(projects[0]);
    }, [projects]);

    return (<>
        <Header/>
        <nav className={"navigation"}>
            <ul className={"margin-y-1"}>
                {projects.map((project, index) => (<li key={index}><a className={"lowercase inverse"}
                                                                      onClick={() => setProjectDetail(projects[index])}>{project.name}</a>
                </li>))}
            </ul>
        </nav>
        <Projects projects={projectDetail}/>
    </>);
};
