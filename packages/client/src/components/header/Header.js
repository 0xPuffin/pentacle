import React from "react";
import HeaderLogo from "../header-logo/HeaderLogo";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";

const Header = ({children}) => {
    return (<header className={"p-header"}>
        <article className="header-content">
            <div className={"flex"}><HeaderLogo/>
                <ThemeSwitcher/></div>
            {children}
        </article>
    </header>);
};

export default Header;
