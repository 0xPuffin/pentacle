import React from "react";
import {NavLink} from "react-router-dom";
import Header from "../header/Header";

const ProjectHeader = () => {
    return (<Header>
            <nav>
                <ul>
                {/*
                @pentacle: for styling: each of these 'active' when we are on their route
                https://v5.reactrouter.com/web/api/NavLink
                */}
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/education">Education</NavLink></li>
                    <li><NavLink to="/articles">Articles</NavLink></li>
                    <li><NavLink to="/events">Events</NavLink></li>
                </ul>
            </nav>
        </Header>);
};
export default ProjectHeader;