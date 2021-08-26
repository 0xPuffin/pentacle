import React, {Component} from "react"
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return <header className={"p-header"}>
            <div className="header-content flex justify-space-between">
                <div className={"flex-1"}><Link className={"logo"} to="/">Pentacle</Link></div>
                <div className={"flex-2"}>In your quest for knowledge, a talisman of protection</div>
            </div>
        </header>
    }
}

export default Header


