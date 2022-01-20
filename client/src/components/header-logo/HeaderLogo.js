import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderLogo extends Component {
  render() {
    return (
      <Link to="/">
        <div className={"pentacle-logo"} />
      </Link>
    );
  }
}

export default HeaderLogo;
