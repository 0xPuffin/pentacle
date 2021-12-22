import React from "react";

const Search = (props) => {

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleClear = () => {
        setSearchResults(projects);
        setSearchTerm('');
    };

    return (
        <article className={"fieldset inline boxed"}>
            <label aria-labelledby={"search"} className={"display-none"} htmlFor={"search"}>Search</label>
            <input id="search" type="text" placeholder="Filter by project name" value={searchTerm}
                   onChange={handleChange}/>
            <input className={"padding-left-0-75"} type="reset" value="Clear" onClick={handleClear}/>
        </article>
    );
};

export default Search;




