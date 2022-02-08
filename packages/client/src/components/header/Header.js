import React from "react";
import HeaderLogo from "../header-logo/HeaderLogo";

const Header = ({children}) => {
    return (<header className={"p-header"}>
        <article className="header-content">
            <div className={"flex"}><HeaderLogo/>
               </div>
            {children}
        </article>
    </header>);
};

export default Header;
