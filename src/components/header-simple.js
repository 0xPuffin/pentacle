import React, {Component} from "react"
import {Link} from "react-router-dom";

class HeaderSimple extends Component {
    render() {
        return <>
            <div className={"p-header-simple flex-1"}>
                <Link to="/"><img alt="Pentacle Logo" className={"logo"} src={"pentacle-logo-2.svg"}/></Link>
            </div>
        </>
    }
}

export default HeaderSimple
