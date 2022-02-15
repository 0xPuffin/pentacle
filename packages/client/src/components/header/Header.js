import React from "react";
import HeaderLogo from "../header-logo/HeaderLogo";

const Header = ({children}) => {
    return (<header className={"p-header"}>
        <article className="header-content flex justify-end align-items-center">
            <div>
                <HeaderLogo/>
            </div>
            <div>
                {children}
            </div>
        </article>
    </header>);
};

export default Header;
