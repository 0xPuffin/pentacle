import React, { useContext, useState } from "react";
import { CATEGORIES } from "../../data/categories";
import { SECTIONS } from "../../data/sections";
import { SearchContext, SearchDispatchContext } from "../../providers/search-provider";
import { NavLink } from "react-router-dom";

function ProjectsNavigation() {
  const { activeSection } = useContext(SearchContext);
  const { setActiveCategory } = useContext(SearchDispatchContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex flex-end">
      <ul className={"navigation-content"}>
        <li className={"dropdown"}>
          {isOpen && (
            <ul tabIndex="0" className="menu dropdown-content bg-base-100">
              {SECTIONS.map((section, index) => (
                <li key={index} style={{ marginRight: 0 }}>
                  <NavLink
                    to={`/${section}`}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    {section}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
        {CATEGORIES.map((category, index) => (
          <li key={index}>
            <NavLink to={`/${activeSection}/${category}`} onClick={() => setActiveCategory(category)}>{category}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );

    // const {activeCategory, loadedKeys} = useContext(SearchContext);
    // const {setActiveCategory} = useContext(SearchDispatchContext);
    // const [isOpen, setIsOpen] = useState(false);
    // return (<nav className="flex flex-end">
    //     <ul className={"navigation-content"}>
    //         <li className={"dropdown"}>
    //             {isOpen && (<ul tabIndex="0" className="menu dropdown-content bg-base-100">
    //                 {SECTIONS.map((section, index) => (<li key={index} style={{marginRight: 0}}>
    //                     <NavLink to={`/${section}`} onClick={() => {
    //                         setIsOpen(false);
    //                     }}>
    //                         {section}
    //                     </NavLink>
    //                 </li>))}
    //             </ul>)}
    //         </li>
    //         {CATEGORIES.map((category, index) => (<li key={index}>
    //             <a onClick={() => setActiveCategory(category)}
    //                className={`${loadedKeys.includes(`projects/${category}`) ? "" : " loading"} 
    //                 ${activeCategory === category ? "active" : ""}`}
    //             >
    //                 {category}
    //             </a>
    //         </li>))}
    //     </ul>
    // </nav>);
}

export default ProjectsNavigation;
