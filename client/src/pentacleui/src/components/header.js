import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "./navigation";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-content flex-group space-between padding-y-1">
          <Link to="/">Pentacle UI</Link>
          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;
