import React, {useContext} from "react";
import {
    SearchContext, SearchDispatchContext,
} from "../../providers/search-provider";

const ProjectSearch = () => {
    const {search} = useContext(SearchContext);
    const {setSearchString} = useContext(SearchDispatchContext);

    const handleChange = (event) => {
        setSearchString(event.target.value);
    };

    const handleClear = () => {
        setSearchResults(projects);
        setSearchString("");
    };

    return (<article className={"fieldset inline boxed"}>
            <label
                aria-labelledby={"search"}
                className={"display-none"}
                htmlFor={"search"}
            >
                Search
            </label>
            <input
                className={"border-2 rounded-2xl p-4 border-p-green mr-4"}
                id="search"
                type="text"
                placeholder="Filter by name"
                value={search}
                onChange={handleChange}
            />
            <input
                className={"border-2 rounded-2xl p-4 border-p-green mr-4"}
                type="reset"
                value="clear"
                onClick={handleClear}
            />
        </article>);
};

export default ProjectSearch;
