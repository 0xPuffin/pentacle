import React, { useContext } from "react";
import { EDUCATION_CATEGORIES } from "../../data/categories";
import { SearchContext, SearchDispatchContext } from "../../providers/search-provider";
import { NavLink } from "react-router-dom";

function EducationNavigation() {
  const { activeSection } = useContext(SearchContext);
  const { setActiveCategory } = useContext(SearchDispatchContext);
  return (
    <nav className="flex flex-end">
      <ul className={"navigation-content"}>
        {EDUCATION_CATEGORIES.map((category, index) => (
          <li key={index}>
            <NavLink to={`/${activeSection}/${category}`} onClick={() => setActiveCategory(category)}>{category}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default EducationNavigation;
