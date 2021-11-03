import React from "react"
import PropTypes from "prop-types"

const Layout = ({children}) => {
    return (
        <main>
            <section className={"main-container"}>
                <article className={"main-content"}>
                    {children}
                </article>
            </section>
        </main>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
