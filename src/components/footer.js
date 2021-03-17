import React, {Component} from "react"
import Navigation from "./navigation";

class Footer extends Component {
    render() {
        return <footer>
            <article className={"footer-content flex-group space-between"}>
                <div>
                    © 2020 - {new Date().getFullYear()}
                    <a href={"https://twitter.com/pentacleai"} target={"_blank"} rel="noopener noreferrer">twitter</a>
                    {/*<a href={"https://github.com/pentacleai"} target={"_blank"} rel="noopener noreferrer">github</a>*/}
                </div>
                <p>Quote from Albert Einstein</p>
                <Navigation/>
            </article>
        </footer>
    }
}

export default Footer
