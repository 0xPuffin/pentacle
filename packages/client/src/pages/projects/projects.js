import React, { useContext } from "react";
import Layout from "../../components/layouts/layout";
import { ProjectsLayout } from "../../components/project-layout/ProjectsLayout";
import RelatedLinks from "../../components/related-links/RelatedLinks";
import {
  SearchContext,
  SearchDispatchContext,
} from "../../providers/search-provider";
import { TitleContext } from "../../providers/title-provider";
import { useLocation } from "react-router-dom";
import ProjectsNavigation from "../../components/navigation/ProjectsNavigation";
import Spinner from "../../components/spinner";
import HeaderV2 from "../../components/header-v2/HeaderV2";

export const ProjectsPage = () => {
  const { searchResults, projectsLoading, error, search } =
    useContext(SearchContext);
  const { setSearchString, handleClear } = useContext(SearchDispatchContext);
  const { title } = useContext(TitleContext);
  const location = useLocation();

  const handleChange = (event) => {
    setSearchString(event.target.value);
  };

  const hasNoRelatedLinks = [
    "/projects",
    "/projects/decentralised-exchange",
    "/projects/insurance",
  ];

  if (projectsLoading) {
    return (
      <>
        <HeaderV2 />
        <Layout>
          <main className={"main-container"}>
            <section>
              <article
                className={"main-content flex space-between margin-top-2"}
              >
                <h1 className={"boxed"}>loading...</h1>
                <ProjectsNavigation />
              </article>
              <article className={"margin-y-3 flex-center"}>
                <div className={"fieldset"}>
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
                    placeholder="filter by project name"
                    value={search}
                    onChange={handleChange}
                  />
                  <input
                    className={"padding-left-0-75"}
                    type="reset"
                    value="clear"
                    onClick={handleClear}
                  />
                </div>
              </article>
            </section>
            <div className="flex flex-center">
              <Spinner />
            </div>
          </main>
        </Layout>
      </>
    );
  } else if (error) {
    return <>error</>;
  } else {
    return (
      <>
        <HeaderV2 />
        <Layout>
          {/*<ProjectTagNav />*/}
          <main className={"main-container"}>
            <section>
              <article
                className={"main-content flex space-between margin-top-2"}
              >
                <h1 className={"boxed"}>{title}</h1>
                <ProjectsNavigation />
              </article>
              <article className={"margin-y-3 flex-center"}>
                <div className={"fieldset"}>
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
                    placeholder="filter by project name"
                    value={search}
                    onChange={handleChange}
                  />
                  <input
                    className={"padding-left-0-75"}
                    type="reset"
                    value="clear"
                    onClick={handleClear}
                  />
                </div>
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
