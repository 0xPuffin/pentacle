import React, { useContext, useState } from "react";
import { CATEGORIES } from "../../data/categories";
import { SECTIONS } from "../../data/sections";
import {
  SearchContext,
  SearchDispatchContext,
} from "../../providers/search-provider";
import { NavLink } from "react-router-dom";

function ProjectsNavigation() {
  const { activeCategory, activeSection, loadedKeys } = useContext(SearchContext);
  const { setActiveCategory, setActiveSection } = useContext(
    SearchDispatchContext
  );
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex flex-row justify-center items-center">
      <ul className={"navigation-content flex-center"}>
        <div className="dropdown">
          <button
            onClick={() => setIsOpen(true)}
            tabIndex="0"
            className={`btn-ghost text-primary`}
          >
            {activeSection}
          </button>
          {isOpen && (
            <ul
              tabIndex="0"
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
            >
              {SECTIONS.map((section,index) => (
                <li key={index} style={{ marginRight: 0 }}>
                  <NavLink
                    to={`/${section}`}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveSection(section);
                    }}
                  >
                    {section}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </ul>
      <ul className="text-white">
        {CATEGORIES.map((category, index) => (
          <li key={index}>
            <button
              onClick={() => setActiveCategory(category)}
              className={`btn-ghost ${
                loadedKeys.includes(`projects/${category}`)
                  ? ""
                  : " loading"
              } ${activeCategory === category ? "btn-active" : ""}`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default ProjectsNavigation;
