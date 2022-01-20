import React, { useContext } from "react";
import ProjectsNavigation from "./ProjectsNavigation";
import { SECTIONS } from "../../data/sections";
import { SearchContext, SearchDispatchContext } from '../../providers/search-provider';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const { activeSection } = useContext(SearchContext);
  const { setActiveSection } = useContext(SearchDispatchContext);

  return (
    <nav>
      <ul className={"navigation-content flex-center mt-10"}>
        <div className="dropdown">
          <button tabIndex="0" className={`btn-ghost text-primary`}>
            {activeSection}
          </button>
          <ul
            tabIndex="0"
            className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
          >
            {SECTIONS.map((section) => (
              <li key={section} style={{ marginRight: 0 }}>
                <NavLink to={`/${section}`} onClick={() => setActiveSection(section)}>{section}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </ul>
      <ProjectsNavigation />
    </nav>
  );
}

export default Navigation;
