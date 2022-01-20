import React, { useContext } from "react";
import Layout from "../../components/layouts/layout";
import { ProjectTagNav } from "../../components/tags/project-tag-nav";
import { ProjectsLayout } from "../../components/project-layout/ProjectsLayout";
import RelatedLinks from "../../components/related-links/RelatedLinks";
import Header from "../../components/header/Header";
import Loading from "../../components/Loading/Loading";
import { SearchContext, SearchDispatchContext } from "../../providers/search-provider";
import { TitleContext } from "../../providers/title-provider";
import { useLocation } from "react-router-dom";

export const ProjectsAllPage = () => {
  const { searchResults, projectsLoading, error, search } = useContext(SearchContext);
  const { setSearchString, handleClear } = useContext(SearchDispatchContext);
  const { title } = useContext(TitleContext);
  const location = useLocation();

  const handleChange = (event) => {
    setSearchString(event.target.value);
  };

  const hasNoRelatedLinks = [
    "/projects",
    '/projects/decentralised-exchange',
    '/projects/insurance'
  ];

  if (projectsLoading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  } else if (error) {
    return <>error</>;
  } else {
    return (
      <>
        <Header />
        <Layout>
          <ProjectTagNav />
          <main className={"main-container"}>
            <section
              className={"main-content flex space-between padding-top-3"}
            >
              <h1 style={{ textTransform: "capitalize" }}>{title}</h1>
              <article className={"fieldset inline boxed align-right"}>
                <label
                  aria-labelledby={"search"}
                  className={"display-none"}
                  htmlFor={"search"}
                >
                  Search
                </label>
                <input
                  id="search"
                  type="text"
                  placeholder="Filter by project name"
                  value={search}
                  onChange={handleChange}
                />
                <input
                  className={"padding-left-0-75"}
                  type="reset"
                  value="Clear"
                  onClick={handleClear}
                />
              </article>
            </section>
            {/*// TODO add tag filtering*/}
            <ProjectsLayout projects={searchResults} />
            {!hasNoRelatedLinks.includes(location.pathname) && <RelatedLinks />}
          </main>
        </Layout>
      </>
    );
  }
};
