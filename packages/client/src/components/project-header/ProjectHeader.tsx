import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../header/Header";

const ProjectHeader = () => {
    return (
      <Header>
        {/* 
                @pentacle: for styling: each of these 'active' when we are on their route
                https://v5.reactrouter.com/web/api/NavLink
                */}
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/articles">Articles</NavLink>
        <NavLink to="/events">Events</NavLink>
      </Header>
    );
  };
  export default ProjectHeader;