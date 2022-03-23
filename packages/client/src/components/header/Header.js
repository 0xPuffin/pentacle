import React from "react";
import HeaderLogo from "../header-logo/HeaderLogo";
import ProjectsNavigation from "../navigation/ProjectsNavigation";

const Header = () => {
    return (<header className={"p-header"}>
        <HeaderLogo/>
        <ProjectsNavigation/>
    </header>);
};

export default Header;
