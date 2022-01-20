import React, { Component } from "react";
import SunburstGraph from "./graph.js";

class Search extends Component {
  render() {
    return (
      <div className={"field inline"}>
        <label className={"visibility-hidden"} htmlFor="search">
          Search
        </label>
        <input
          id="search"
          type="search"
          onChange={(e) => SunburstGraph.filter(e.target.value)}
        />
      </div>
    );
  }
}

export default Search;
