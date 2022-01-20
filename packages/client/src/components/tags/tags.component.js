import React, { useContext } from "react";
import {
  SearchContext,
  SearchDispatchContext,
} from "../../providers/search-provider";

const Tags = () => {
  const { tags, activeTag } = useContext(SearchContext);
  const { setActiveTag } = useContext(SearchDispatchContext);

  return (
    <div className={"flex flex-start mt-3"}>
      {tags.map((tag, index) => (
        <button
          onClick={() => setActiveTag(tag.name)}
          key={index}
          className={`btn-ghost ${activeTag === tag.name ? "btn-active" : ""}`}
        >
          {tag.name}
        </button>
      ))}
    </div>
  );
};

export default Tags;
