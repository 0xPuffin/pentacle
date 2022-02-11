import React, {useContext, useState} from "react";
import {CATEGORIES} from "../../data/categories";
import {SECTIONS} from "../../data/sections";
import {
    SearchContext, SearchDispatchContext,
} from "../../providers/search-provider";
import {NavLink} from "react-router-dom";

function ProjectsNavigation() {
    const {activeCategory, activeSection, loadedKeys} = useContext(SearchContext);
    const {setActiveCategory, setActiveSection} = useContext(SearchDispatchContext);
    const [isOpen, setIsOpen] = useState(false);
    return (<nav className="flex flex-end">
        <ul className={"navigation-content"}>
            <li className={"dropdown"}>
                <p className={"flex-center"}>
                    <a onClick={() => setIsOpen(true)}
                        tabIndex="0"
                        className={""}>
                        {activeSection}
                    </a>
                    <span className={"material-icons"}>expand_more</span>
                </p>
                {isOpen && (<ul tabIndex="0" className="menu dropdown-content bg-base-100">
                    {SECTIONS.map((section, index) => (<li key={index} style={{marginRight: 0}}>
                        <NavLink to={`/${section}`} onClick={() => {
                            setIsOpen(false);
                            setActiveSection(section);
                        }}>
                            {section}
                        </NavLink>
                    </li>))}
                </ul>)}
            </li>
            {CATEGORIES.map((category, index) => (<li key={index}>
                <a onClick={() => setActiveCategory(category)}
                   className={`${loadedKeys.includes(`projects/${category}`) ? "" : " loading"} 
                    ${activeCategory === category ? "underline underline-offset-4 hover:underline-offset-4 hover:underline-offset-4 hover:decoration-0" : ""}`}
                >
                    {category}
                </a>
            </li>))}
        </ul>
    </nav>);
}

export default ProjectsNavigation;
