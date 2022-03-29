import React, { useContext } from "react";
import { CATEGORIES } from "../../data/categories";
import { SearchDispatchContext } from "../../providers/search-provider";
import { NavLink } from "react-router-dom";

function ProjectsNavigation() {
  // const { activeSection } = useContext(SearchContext);
  const { setActiveCategory } = useContext(SearchDispatchContext);
  return (
    <nav className="navigation">
      <ul>
        {CATEGORIES.map((category, index) => (
          <li key={index}>
            {/*<NavLink to={`/${activeSection}/${category}`} onClick={() => setActiveCategory(category)}>{category}</NavLink>*/}
            <NavLink to={`/projects/${category}`} onClick={() => setActiveCategory(category)}>{category}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ProjectsNavigation;
