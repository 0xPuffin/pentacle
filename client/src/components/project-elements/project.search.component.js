import React, { useContext } from "react";
import { SearchContext, SearchDispatchContext } from '../../providers/search-provider';

const Search = () => {

  const { search } = useContext(SearchContext);
  const { setSearchString } = useContext(SearchDispatchContext);

  const handleChange = event => {
    setSearchString(event.target.value);
  };

  const handleClear = () => {
    setSearchResults(projects);
    setSearchString('');
  };

  return (
    <article className={"fieldset inline boxed"}>
      <label aria-labelledby={"search"} className={"display-none"} htmlFor={"search"}>Search</label>
      <input id="search" type="text" placeholder="Filter by project name" value={search}
        onChange={handleChange} />
      <input className={"padding-left-0-75"} type="reset" value="Clear" onClick={handleClear} />
    </article>
  );
};


export default Search;




