import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul className={"nav-content"}>
          <li>
            <Link to="/layout">Layout</Link>
          </li>
          <li>
            <Link to="/box">Box</Link>
          </li>
          <li>
            <Link to="/flex">Flex</Link>
          </li>
          <li>
            <Link to="/fonts">Fonts</Link>
          </li>
          <li>
            <Link to="/typography">Typography</Link>
          </li>
          <li>
            <Link to="/inputs">Inputs (WIP)</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
