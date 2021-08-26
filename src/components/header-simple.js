import React, {Component} from "react"
import {Link} from "react-router-dom";

class HeaderSimple extends Component {
    render() {
        return  <Link className={"p-header-simple logo"} to="/">Pentacle</Link>
    }
}

export default HeaderSimple