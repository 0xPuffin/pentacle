import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderSimple extends Component {
  render() {
    return (
      <>
        <Link to="/">
          <div className={"pentacle-logo"} />
        </Link>
      </>
    );
  }
}

export default HeaderSimple;
