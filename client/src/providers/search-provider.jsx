import React, { createContext, useEffect, useState } from "react";

const initVal = {
  category: "/projects/projects",
  search: "",
  tags: [],
};

export const SearchDispatchContext = createContext({
  setCategory: () => {},
  setSearchString: () => {},
  setTags: () => {},
  handleClear: () => {},
});

export const SearchContext = createContext(initVal);

export function SearchProvider({ children }) {
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [searchString, setSearchString] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [tagsLoading, setTagsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const fetchTags = async () => {
    setTagsLoading(true);
    try {
      const response = await fetch("/projects/tags");
      const res = await response.json();
      setTagsLoading(false);
      setTags(res.data);
    } catch (error) {
      setTagsLoading(false);
      console.log(error);
    }
  };

  const fetchProjects = async () => {
    setProjectsLoading(true);
    try {
      const response = await fetch(category);
      const res = await response.json();
      setProjectsLoading(false);
      setSearchResults(res.data);
      setProjects(res.data);
    } catch (error) {
      setProjectsLoading(true);
      setError(error); // TODO
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [category]);

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
        category,
        search: searchString,
        tags,
        tagsLoading,
        projects,
        projectsLoading,
        searchResults,
        error,
      }}
    >
      <SearchDispatchContext.Provider
        value={{ setSearchString, setCategory, setTags, handleClear }}
      >
        {children}
      </SearchDispatchContext.Provider>
    </SearchContext.Provider>
  );
}
