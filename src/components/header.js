import React, {Component} from "react"
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return <header className={"p-header"}>
            <div className="header-content flex justify-end align-items-center">
                <div><Link to="/"><img alt="Pentacle logo" className={"logo"} src={"pentacle-logo-2.svg"}/></Link></div>
                <div>In your quest for knowledge, a talisman of protection</div>
            </div>
        </header>
    }
}

export default Header
