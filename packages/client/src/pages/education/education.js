import React, { useContext, useEffect } from "react";
import Layout from "../../components/layouts/layout";
import HeaderV2 from "../../components/header-v2/HeaderV2";
import { EducationTagNav } from "../../components/tags/education-tag-nav";
import { SearchContext } from "../../providers/search-provider";

export function EducationPage() {
  const { projects: pageData } = useContext(SearchContext);

  useEffect(() => {
    console.log(pageData)
  }, [pageData])

  return (
    <>
      <HeaderV2 />
      <Layout>
        <EducationTagNav />
        {pageData && (
          <main className={"main-container"}>
            {pageData.map((data, index) => (
              <article className={"main-content margin-bottom-2"} key={index}>
                <article className={"readability-max-width"}>
                  <h2>{data.education_name}</h2>
                  <div className={"placeholder margin-bottom-1 margin-top-1"}>
                    image thingy in here
                  </div>
                  <h3>What</h3>
                  <p className={"large"}>{data.what}</p>
                  <h3>Why</h3>
                  <p className={"large"}>{data.why}</p>
                  <h3>Reward</h3>
                  <p className={"large"}>{data.reward}</p>
                  <h3>Risk</h3>
                  <p className={"large"}>{data.risk}</p>
                </article>
              </article>
            ))}
          </main>
        )}
      </Layout>
      {/*<Layout>*/}
      {/*    <EducationTagNav/>*/}
      {/*    <main className={"main-container"}>*/}
      {/*    {education && (*/}
      {/*        <EducationDetail data={education}/>*/}
      {/*    )}*/}
      {/*    </main>*/}
      {/*</Layout>*/}
    </>
  );
}
