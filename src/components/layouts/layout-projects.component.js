import React from "react"
import PropTypes from "prop-types"
import Header from "../header";
import Navigation from "../navigation";

const LayoutProjects = ({children}) => {
    return (
        <>
            <Header/>
            <Navigation/>
            <main>{children}</main>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default LayoutProjects
