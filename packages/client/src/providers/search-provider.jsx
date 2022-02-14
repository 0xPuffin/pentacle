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
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [searchString, setSearchString] = useState("");
  const [activeCategory, setActiveCategory] = useState();
  const [tags, setTags] = useState([]);
  const [activeSection, setActiveSection] = useState("projects");
  const [tagsLoading, setTagsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [activeTag, setActiveTag] = useState("");
  const [loadedKeys, setLoadedKeys] = useState([]);
  useEffect(() => {
    const section = location.pathname.split("/")[1] || "projects";
    setActiveSection(section);
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
    (async () => {
      setProjectsLoading(true);
      if (activeSection  && activeCategory) {
        try {
          const response = await fetch( BASE_URI + "/" + activeSection + "/" + activeCategory);
          const res = await response.json();
          setProjectsLoading(false);
          setSearchResults(res.data);
          setProjects(res.data);
        } catch (error) {
          setProjectsLoading(true);
          setError(error); // TODO
          console.error(error);
        }
      } else {
        try {
          const response = await fetch( BASE_URI + "/" + activeSection + "/" + activeSection);
          const res = await response.json();
          setProjectsLoading(false);
          setSearchResults(res.data);
          setProjects(res.data);
        } catch (error) {
          setProjectsLoading(true);
          setError(error); // TODO
          console.error(error);
        }
      }
    })()
  }, [activeSection, activeCategory]);

  useEffect(() => {
    const searchResult = projects.filter((project) =>
      project.project_name.toLowerCase().includes(searchString.toLowerCase())
    );
    setSearchResults(searchResult);
  }, [searchString]);

  const handleClear = () => {
    setSearchResults(projects);
    setSearchString("");
  };

  return (
    <SearchContext.Provider
      value={{
        activeCategory,
        search: searchString,
        tags,
        tagsLoading,
        projects,
        projectsLoading,
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
