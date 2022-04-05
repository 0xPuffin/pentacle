import React from "react";
import PropTypes from "prop-types";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = ({className, children}) => (<>
    <Header/>
    <main className={className}>{children}</main>
    <Footer/>
    </>);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
