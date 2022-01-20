import React, { useContext } from "react";
import { CATEGORIES } from "../../data/categories";
import {
  SearchContext,
  SearchDispatchContext,
} from "../../providers/search-provider";

function ProjectsNavigation() {
  const { activeCategory } = useContext(SearchContext);
  const { setActiveCategory } = useContext(SearchDispatchContext);

  return (
    <>
      <ul className="text-white">
        {CATEGORIES.map((category) => (
          <li key={category}>
            <button
              onClick={() => setActiveCategory(category)}
              className={`btn-ghost ${
                activeCategory === category ? "btn-active" : ""
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default ProjectsNavigation;
