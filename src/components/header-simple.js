import React, {Component} from "react"
import {Link} from "react-router-dom";

class HeaderSimple extends Component {
    render() {
        return <>
            <Link to="/"><img alt="Pentacle logo" className={"logo"} src={"pentacle-logo-LH.svg"}/></Link>
        </>
    }
}

export default HeaderSimple
