import React, {Component} from "react";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (<footer className={"p-footer"}>
            <article className={"footer-content flex justify-space-between"}>
                <div className={"margin-right-1"}>
                    <Link to="/education">glossary</Link>
                    <Link to="/skills">skills</Link>
                    <Link to="/events">events</Link>
                    <Link to="/articles">articles</Link>
                    {/*<ThemeSwitcher/>*/}
                </div>
                <div className={"flex flex-start"}>
                    <span>© {new Date().getFullYear()} pentacle</span>
                    {/*<a href={"https://github.com/pentacledotai"} target={"_blank"} rel="noopener noreferrer">GitHub</a>*/}
                    <Link to="/about">about</Link>
                    <Link to="/terms">terms</Link>
                    <a href={"https://twitter.com/pentaclexyz"} target={"_blank"}
                       rel="noopener noreferrer">twitter</a>
                </div>

            </article>
        </footer>);
    }
}

export default Footer;
