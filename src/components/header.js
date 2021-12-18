import React from "react"
import {Link} from "react-router-dom";
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

const Header = () => {
    useEffect(() => {
        themeChange(false)
    }, [])
    return (<header className={"p-header"}>
        <div className="header-content flex align-items-center">
            <div><Link to="/"><img alt="Pentacle logo" className={"logo"} src={"pentacle-logo-LH.svg"}/></Link></div>
            <div>In your quest for knowledge, a talisman of protection</div>
            <div className={"align-right"}>
                <button data-act-class="shadow-outline" data-set-theme="dark"
                        className="bg-green-700 focus:outline-none m-1 rounded p-2">dark
                </button>
                <button data-act-class="shadow-outline" data-set-theme="light"
                        className="bg-green-700 focus:outline-none m-1 rounded p-2">light
                </button>
                {/*    <button onClick={toggleDarkMode}>{currentTheme}</button>*/}
            </div>
        </div>

    </header>);
}

export default Header




