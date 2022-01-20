import React, { useState } from "react"
import ProjectsNavigation from "./ProjectsNavigation";
import { SECTIONS } from '../../data/sections';

function Navigation() {

  // const [activeCategory, setActiveMenuItem] = useState(SECTIONS[0]);
  const [activeCategory] = useState(SECTIONS[0]);
  return <nav>
    <ul className={"navigation-content flex-center mt-10"}>

      <div className="dropdown">
        <div tabIndex="0" className={`btn-ghost`}>{activeCategory}</div>
        <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52" >
          {SECTIONS.map((category) => (
            <li key={category} style={{ marginRight: 0 }}>
              <span>{category}</span>
            </li>
          ))}
        </ul>
      </div>

    </ul>
    <ProjectsNavigation />
  </nav>
}

export default Navigation
