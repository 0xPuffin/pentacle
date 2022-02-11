import React, {Component} from "react";
import {Link} from "react-router-dom";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";

class Footer extends Component {
    render() {
        return (<footer className={"p-footer"}>
            <article className={"footer-content flex"}>
                <div className={"flex flex-start align-items-center"}>
                    © {new Date().getFullYear()} pentacle
                    {/*<a href={"https://github.com/pentacledotai"} target={"_blank"} rel="noopener noreferrer">GitHub</a>*/}
                    <Link to="/about">About</Link>
                    <Link to="/terms">Terms</Link>
                    <a href={"https://twitter.com/pentaclexyz"} target={"_blank"}
                       rel="noopener noreferrer">Twitter</a>
                </div>
                <ThemeSwitcher/>
            </article>
        </footer>);
    }
}

export default Footer;
