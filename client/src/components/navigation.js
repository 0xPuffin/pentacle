import React, {Component} from "react"
import {Link} from "react-router-dom";

class Navigation extends Component {
    render() {
        return <nav>
            <ul className={"nav-content align-right"}>
                <li><Link to="/about">About</Link></li>
                <li></li>
            </ul>
        </nav>
    }
}

export default Navigation
