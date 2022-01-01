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
                <button className={"primary"} data-set-theme="dark"><i className={"material-icons"}>nightlight_round</i></button>
                <button className={"primary"}  data-set-theme="light"><i className={"material-icons"}>wb_sunny</i></button>
            </div>
        </div>
    </header>);
}

export default Header




