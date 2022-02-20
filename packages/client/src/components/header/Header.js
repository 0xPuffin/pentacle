import React from "react";
import HeaderLogo from "../header-logo/HeaderLogo";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (<header className={"p-header"}>
        <article className="header-content flex justify-end align-items-center">
            <div>
                <HeaderLogo/>
            </div>
            <nav className={"flex flex-end"}>
                <ul className={"hello"}>
                    <li><NavLink to="/projects" className={"text-link"}>projects</NavLink> (beta)</li>
                    {/*<li><NavLink to="/education">education</NavLink></li>*/}
                    {/*<li><NavLink to="/articles">articles</NavLink></li>*/}
                    {/*<li><NavLink to="/events">events</NavLink></li>*/}
                </ul>
            </nav>
        </article>
    </header>);
};

export default Header;
