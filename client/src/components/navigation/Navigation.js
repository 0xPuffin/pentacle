import React, {Component} from "react"
import {Link} from "react-router-dom";
import ProjectsNavigation from "./ProjectsNavigation";

class Navigation extends Component {
    render() {
        return <nav>
            <ul className={"navigation-content flex-center"}>
                <li><Link to="/projects">projects</Link></li>
                <li><Link to="/education">education</Link></li>
                <li><Link to="/events">events</Link></li>
                <li><Link to="/articles">articles</Link></li>
            </ul>
            <ProjectsNavigation/>
        </nav>
    }
}

export default Navigation
