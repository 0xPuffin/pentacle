import React, {Component} from "react"
import {Link} from "react-router-dom";

class ProjectsNavigation extends Component {
    render() {
        return <>
            <ul>
                <li><Link to="/projects">analytics</Link></li>
                <li><Link to="/projects">exchanges</Link></li>
                <li><Link to="/projects">defi</Link></li>
                <li><Link to="/projects">developer</Link></li>
                <li><Link to="/projects">education</Link></li>
                <li><Link to="/projects">insurance</Link></li>
                <li><Link to="/projects">jobs</Link></li>
                <li><Link to="/projects">nft</Link></li>
                <li><Link to="/projects">yield</Link></li>
            </ul>
        </>
    }
}

export default ProjectsNavigation
