import React, {Component} from "react"
import {Link} from "react-router-dom";

class HeaderSimple extends Component {
    render() {
        return <div className={"p-header-simple"}>
            <Link to="/"><img alt="Pentacle logo" className={"logo"} src={"pentacle-logo-LH.svg"}/></Link>
        </div>
    }
}

export default HeaderSimple