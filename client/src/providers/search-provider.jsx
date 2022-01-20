import React, { createContext, useEffect, useState } from "react";

const initVal = {
  section: 'projects',
  category: 'projects',
  search: '',
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

export function SearchProvider({ children }) {
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [searchString, setSearchString] = useState("");
  const [section, setSection] = useState("projects");
  const [activeCategory, setActiveCategory] = useState("projects");
  const [tags, setTags] = useState([]);
  const [tagsLoading, setTagsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [activeTag, setActiveTag] = useState('')

  const fetchTags = async () => {
      setTagsLoading(true);
      try {
        // debugger
        const response = await fetch("/api/projects/tags");
        const res = await response.json();
        setTagsLoading(false);
        setTags(res.data);
      } catch (error) {
        setTagsLoading(false);
        setError(error); // TODO
        console.error(error);
      }
  };

  const fetchProjects = async () => {
    setProjectsLoading(true);
    try {
      const response = await fetch('/api/' + section + '/' + activeCategory);
      const res = await response.json();
      setProjectsLoading(false);
      setSearchResults(res.data);
      setProjects(res.data);

    } catch (error) {
      setProjectsLoading(true);
      setError(error); // TODO
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [activeCategory]);

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
        category: activeCategory,
        search: searchString,
        tags,
        tagsLoading,
        projects,
        projectsLoading,
        searchResults,
        error,
        activeTag
      }}
    >
      <SearchDispatchContext.Provider
        value={{ 
            setSearchString, 

            setActiveCategory, 
            setTags, 
            handleClear, 
            setActiveTag,
            setSection
          }}
      >
        {children}
      </SearchDispatchContext.Provider>
    </SearchContext.Provider>
  );
}
