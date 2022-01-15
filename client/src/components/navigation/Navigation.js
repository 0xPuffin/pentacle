import React, {Component} from "react"
import {Link} from "react-router-dom";

class Navigation extends Component {
    render() {
        return <nav>
            <ul className={"navigation-content flex-center"}>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/articles">Articles</Link></li>
            </ul>
        </nav>
    }
}

export default Navigation
