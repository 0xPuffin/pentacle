import React from "react"
import {Link} from "react-router-dom";
import {useEffect} from 'react'
import {themeChange} from 'theme-change'

const Header = () => {
    useEffect(() => {
        themeChange(false)
    }, [])
    return (<header className={"p-header"}>
        <div className="header-content flex align-items-center">
            <Link to="/">
                <div className={"pentacle-logo"}/>
            </Link>
            <div className={"flex-center"}>
                <Link to="/projects/analytics">Projects</Link>
                <Link to="/education/amm">Education</Link>
                <Link to="/events">Events</Link>
            </div>
            <div className={"align-right"}>
                <button data-set-theme="dark">dark</button>
                <button data-set-theme="light">light</button>
            </div>
        </div>
    </header>);
}

export default Header




