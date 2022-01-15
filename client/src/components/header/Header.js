import React from "react"
import Navigation from "../navigation/Navigation";
import HeaderLogo from "../header-logo/HeaderLogo";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";

const Header = () => {

    return (<header className={"p-header"}>
        <article className="header-content flex align-items-center">
            <HeaderLogo/>
            <Navigation/>
            <ThemeSwitcher/>
        </article>
    </header>);
}

export default Header




