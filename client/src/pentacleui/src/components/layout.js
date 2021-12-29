import React from "react"
import PropTypes from "prop-types"
import Header from "./header"

const Layout = ({children}) => {
    return (
        <>
            <Header/>

            <main>{children}</main>
            <footer>
                <article className={"footer-content flex-group space-between"}>
                    <div>
                        © 2021 - {new Date().getFullYear()} <a href={"https://github.com/pentacledotai/pentacleui"}
                                                               target={"_blank"}
                                                               rel="noopener noreferrer">github</a>
                        <a href={"https://twitter.com/pentacleai"} target={"_blank"}
                           rel="noopener noreferrer">twitter</a>
                    </div>
                </article>
            </footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
