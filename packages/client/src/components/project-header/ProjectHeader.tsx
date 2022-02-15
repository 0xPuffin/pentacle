import React from "react";
import {NavLink} from "react-router-dom";
import Header from "../header/Header";

const ProjectHeader = () => {
    return (<Header>
        <nav className={"flex flex-end"}>
            <ul className={""}>
                <li><NavLink to="/projects">projects</NavLink></li>
                <li><NavLink to="/education">education</NavLink></li>
                <li><NavLink to="/articles">articles</NavLink></li>
                <li><NavLink to="/events">events</NavLink></li>
            </ul>
        </nav>
    </Header>);
};
export default ProjectHeader;