import React, {Component} from "react"
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return <header>
            <div className="header-content padding-y-1 flex-justify-center flex-group space-between">
                <Link to="/">Pentacle</Link>
                <p>You can't use an old map to explore a new world</p>
            </div>
        </header>
    }
}

export default Header
