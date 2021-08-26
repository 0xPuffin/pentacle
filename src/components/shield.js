import React, {Component} from "react"
import {Link} from "react-router-dom";

class Shield extends Component {
    render() {
        return <footer>
            <article className={"footer-content flex justify-space-between flex-align-center"}>
                <div>© {new Date().getFullYear()} Pentacle
                    <a href={"https://github.com/pentacledotai"} target={"_blank"} rel="noopener noreferrer">GitHub</a>
                    <Link to="/about">About</Link>
                    <Link to="/terms">Terms</Link>
                </div>
            </article>
        </footer>
    }
}

export default Shield
