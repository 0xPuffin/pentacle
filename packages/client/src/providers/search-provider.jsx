/* eslint-disable no-debugger */
import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router";

const initVal = {
  section: "projects",
  category: "projects",
  search: "",
  error: null,
  tags: [],
  selectedTags: [],
  relatedArticles: [],
  selectedProject: null,
};

export const SearchDispatchContext = createContext({
  setSection: () => {},
  setCategory: () => {},
  setSearchString: () => {},
  clearError: () => {},
  handleClear: () => {},
  setSelectedTags: () => {},
  setSelectedProject: () => {},
});

export const SearchContext = createContext(initVal);

const BASE_URI =
  process.env.NODE_ENV === "production"
    ? `${process.env.REACT_APP_SERVER_URI}`
    : "/api";

export function SearchProvider({ children }) {
  const location = useLocation();
  const [pageData, setPageData] = useState([]);
  const [pageDataLoading, setPageDataLoading] = useState(true);

  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [activeSection, setActiveSection] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const [tags, setTags] = useState([]);
  const [tagsLoading, setTagsLoading] = useState(true);

  const [error, setError] = useState(null);
  const [activeTag, setActiveTag] = useState("");
  const [loadedKeys, setLoadedKeys] = useState([]);

  const [allRelatedArticles, setAllRelatedArticles] = useState([]);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [selectedProject, setSelectedProject] = useState();

  const clearError = () => setError(null);

  useEffect(() => {
    const section = location.pathname.split("/")[1] || "projects";
    setActiveSection(section);
    setActiveCategory(location.pathname.split("/")[2]);
  }, [location.pathname]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${BASE_URI}/articles/articles`).then(
        (res) => res.json()
      );
      const reduced = response.data.reduce((acc, curr) => {
        const existing = acc.find((e) => e.article_id === curr.article_id);
        const { tag_name } = curr;
        if (!existing) {
          acc.push({
            ...curr,
            tags: [tag_name],
          });
        } else {
          existing.tags.push(tag_name);
        }
        return acc;
      }, []);
      setRelatedArticles(reduced);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (selectedProject) {
        setRelatedArticles(
          allRelatedArticles.filter((article) =>
            article.tags.includes(selectedProject.tag_name)
          )
        );
      }
    })();
  }, [selectedProject]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${BASE_URI}/articles/articles`).then(
        (res) => res.json()
      );
      const reduced = response.data.reduce((acc, curr) => {
        const existing = acc.find((e) => e.article_id === curr.article_id);
        const { tag_name } = curr;
        if (!existing) {
          acc.push({
            ...curr,
            tags: [tag_name],
          });
        } else {
          existing.tags.push(tag_name);
        }
        return acc;
      }, []);
      setAllRelatedArticles(reduced);
      setRelatedArticles(reduced);
    })();
  }, []);

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
        console.log(error.message);
        setError(error.message); // TODO
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (selectedTags.length) {
      setSearchResults(
        searchResults.filter((res) => selectedTags.includes(res.tag_name))
      );
    } else {
      setSearchResults(pageData);
    }
  }, [selectedTags]);

  useEffect(() => {
    if (activeSection) {
      (async () => {
        setPageDataLoading(true);
        try {
          // fix url to be
          const url =
            activeSection && activeCategory
              ? BASE_URI + "/" + activeSection + "/" + activeCategory
              : BASE_URI + "/" + activeSection + "/" + activeSection;
          const response = await fetch(url);
          const res = await response.json();

          setPageDataLoading(false);
          setSearchResults(res.data);
          setPageData(res.data);
        } catch (error) {
          setPageDataLoading(false);
          setError(error.message); // TODO
          console.error(error);
        }
      })();
    }
  }, [activeSection, activeCategory]);

  useEffect(() => {
    const searchResult = pageData.filter((project) =>
      project.project_name.toLowerCase().includes(searchString.toLowerCase())
    );
    setSearchResults(searchResult);
  }, [searchString]);

  useEffect(() => {}, []);

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
        pageData,
        pageDataLoading,
        searchResults,
        error,
        activeTag,
        activeSection,
        loadedKeys,
        selectedTags,
        relatedArticles,
        selectedProject,
      }}
    >
      <SearchDispatchContext.Provider
        value={{
          setSearchString,
          setActiveSection,
          setActiveCategory,
          handleClear,
          setActiveTag,
          setLoadedKeys,
          clearError,
          setSelectedTags,
          setSelectedProject,
        }}
      >
        {children}
        {/*<input type="checkbox" defaultChecked={true} id="error-modal" className="modal-toggle"></input>*/}
        {/*TODO alice this needs to work with old style pages for now */}
        {/*{error && <div className="modal">*/}
        {/*  <div className="modal-box px-3 py-2">*/}
        {/*    <h3 className="font-bold text-lg py-2">*/}
        {/*      Error*/}
        {/*    </h3>*/}
        {/*    <p className="py-4">*/}
        {/*      {error}*/}
        {/*    </p>*/}
        {/*    <div className="modal-action">*/}
        {/*      <button  className="btn rounded-2xl" onClick={() => clearError()}>*/}
        {/*        Ok*/}
        {/*      </button>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>}*/}
      </SearchDispatchContext.Provider>
    </SearchContext.Provider>
  );
}
