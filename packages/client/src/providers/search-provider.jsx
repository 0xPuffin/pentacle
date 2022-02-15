/* eslint-disable no-debugger */
import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router";

const initVal = {
  section: "projects",
  category: "projects",
  search: "",
  tags: [],
};

export const SearchDispatchContext = createContext({
  setSection: () => {},
  setCategory: () => {},
  setSearchString: () => {},
  setTags: () => {},
  handleClear: () => {},
});

export const SearchContext = createContext(initVal);

const BASE_URI =
  process.env.NODE_ENV === "production"
    ? `${process.env.REACT_APP_SERVER_URI}`
    : "api";

export function SearchProvider({ children }) {
  const location = useLocation();
  const [pageData, setPageData] = useState([]);
  const [pageDataLoading, setPageDataLoading] = useState(true);
  
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  const [activeSection, setActiveSection] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  
  const [tags, setTags] = useState([]);
  const [tagsLoading, setTagsLoading] = useState(true);
  
  const [error, setError] = useState(null);
  const [activeTag, setActiveTag] = useState("");
  const [loadedKeys, setLoadedKeys] = useState([]);

  useEffect(() => {
    const section = location.pathname.split("/")[1] || "projects";
    setActiveSection(section);
    setActiveCategory(location.pathname.split("/")[2])
  }, [location.pathname]);

  useEffect(() => {
    (async () => {
        setTagsLoading(true);
        try {
          const response = await fetch(`${BASE_URI}/projects/tags`);
          const res = await response.json();
          setTagsLoading(false);
          setTags(res.data);
        } catch (error) {
          setTagsLoading(false);
          setError(error); // TODO
          console.error(error);
        }
    }) ()
  }, []);
  
  useEffect(() => {
    if (activeSection) {

      (async () => {
        setPageDataLoading(true);
        try {
          // fix url to be 
          const url = activeSection && activeCategory ? BASE_URI + "/" + activeSection + "/" + activeCategory :  BASE_URI + "/" + activeSection + "/" + activeSection;
          const response = await fetch(url);
          const res = await response.json();
  
          setPageDataLoading(false);
          setSearchResults(res.data);
          setPageData(res.data);
          debugger
        } catch (error) {
          setPageDataLoading(true);
          setError(error); // TODO
          console.error(error);
        }
      })()
    }
  }, [activeSection, activeCategory]);

  useEffect(() => {
    const searchResult = pageData.filter((project) =>
      project.project_name.toLowerCase().includes(searchString.toLowerCase())
    );
    setSearchResults(searchResult);
  }, [searchString]);

  const handleClear = () => {
    setSearchResults(pageData);
    setSearchString("");
  };

  return (
    <SearchContext.Provider
      value={{
        activeCategory,
        search: searchString,
        tags,
        tagsLoading,
        // rename to more generic thing
        projects: pageData,
        projectsLoading: pageDataLoading,
        searchResults,
        error,
        activeTag,
        activeSection,
        loadedKeys,
      }}
    >
      <SearchDispatchContext.Provider
        value={{
          setSearchString,
          setActiveSection,
          setActiveCategory,
          setTags,
          handleClear,
          setActiveTag,
          setLoadedKeys,
        }}
      >
        {children}
      </SearchDispatchContext.Provider>
    </SearchContext.Provider>
  );
}
