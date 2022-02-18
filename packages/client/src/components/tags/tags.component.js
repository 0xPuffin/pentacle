import React, {useContext} from "react";
import {
    SearchContext, SearchDispatchContext,
} from "../../providers/search-provider";

const Tags = () => {
    const {tags, activeTag} = useContext(SearchContext);
    const {setActiveTag} = useContext(SearchDispatchContext);

    return (<>
            {tags.map((tag, index) => (<li key={index}>
                    <a onClick={() => setActiveTag(tag.name)} className={`btn-ghost ${activeTag === tag.name ? "btn-active" : ""}`}>
                        {tag.name}
                    </a>
                </li>))}
        </>);
};

export default Tags;
