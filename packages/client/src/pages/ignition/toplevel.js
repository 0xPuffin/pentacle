import React, {useEffect, useState} from "react";
import Projects from "./middlelevel";
import Layout from "../../components/layout";

export const TopLevel = ({projects}) => {
    const [projectDetail, setProjectDetail] = useState(projects[0]);

    useEffect(() => {
        setProjectDetail(projects[0]);
    }, [projects]);

    return (<Layout>
        <nav className={"navigation main-header"}>
            <ul className={"margin-y-1"}><h3 className={"padding-right-1 boxed"}>Solana Ignition</h3>
                {projects.map((project, index) => (<li key={index}><a className={"lowercase"}
                                                                      onClick={() => setProjectDetail(projects[index])}>{project.name}</a>
                </li>))}
            </ul>
        </nav>
        <Projects projects={projectDetail}/>
    </Layout>);
};
