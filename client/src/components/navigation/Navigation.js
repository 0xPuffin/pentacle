import React, { useContext, useState } from "react";
import ProjectsNavigation from "./ProjectsNavigation";
import { SECTIONS } from "../../data/sections";
import {
  SearchContext,
  SearchDispatchContext,
} from "../../providers/search-provider";
import { NavLink } from "react-router-dom";

function Navigation() {
  const { activeSection } = useContext(SearchContext);
  const { setActiveSection } = useContext(SearchDispatchContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <ul className={"navigation-content flex-center mt-10"}>
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
              {SECTIONS.map((section) => (
                <li key={section} style={{ marginRight: 0 }}>
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
      <ProjectsNavigation />
    </nav>
  );
}

export default Navigation;
