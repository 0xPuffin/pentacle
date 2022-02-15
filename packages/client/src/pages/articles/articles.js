import React, {useContext} from "react";
import Layout from "../../components/layouts/layout";
import { ProjectTagNav } from "../../components/tags/project-tag-nav";
import HeaderV2 from "../../components/header-v2/HeaderV2";
import { SearchContext } from "../../providers/search-provider";

export const ArticlesPage = () => {
  const { projects: pageData } = useContext(SearchContext);


  return (
    <>
      <HeaderV2 />
      <Layout>
          <ProjectTagNav />
          {pageData && (
            <main className={"main-container"}>
              <section className={"main-content padding-top-3"}>
                <h1 className={"boxed"}>Articles</h1>
                {pageData.map((data, index) => (
                  <article key={index}>
                    <h3>{data.article_name}</h3>
                    <a href={"data.article_url"}>{data.article_url}</a>
                  </article>
                ))}
              </section>
            </main>
        )}
      </Layout>
    </>
  );
};
