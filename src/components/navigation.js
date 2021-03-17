import React, {Component} from "react"
import {Link} from "react-router-dom";

class Navigation extends Component {
    render() {
        return <nav>
            <ul className={"nav-content"}>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/creator">Team</Link></li>
            </ul>
        </nav>
    }
}

export default Navigation
