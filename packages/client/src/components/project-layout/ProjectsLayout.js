import React, { useState, useEffect } from "react";
import ProjectDetail from "./ProjectDetail";
import ProjectSummary from "./ProjectSummary";
// import TagDescription from "../tag-description/TagDescription";

export const ProjectsLayout = ({ projects = [] }) => {
  const [projectDetail, setProjectDetail] = useState();
  const [usdValue, setUsdValue] = useState();

  useEffect(() => {
    setProjectDetail(projects[0]);
  }, [projects]);

  const fetchPrice = async (props) => {
    if (props === undefined) {
      const apiCall = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${projects[0].coingecko_id}&vs_currencies=usd`
      );
      const data = await apiCall.json();
      const lowerCaseName = projects[0].coingecko_id;
      const namedObject = data[lowerCaseName];
      setUsdValue(`$${namedObject.usd}`);
      return apiCall;
    } else {
      const apiCall = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${props.coingecko_id}&vs_currencies=usd`
      );
      const data = await apiCall.json();
      const lowerCaseName = props.coingecko_id;
      const namedObject = data[lowerCaseName];
      if (namedObject === undefined) {
        setUsdValue(null);
      } else {
        setUsdValue(`$${namedObject.usd}`);
      }
    }
  };

  useEffect(() => {
    if (projects.length === 0) {
      return <article>Loading...</article>;
    } else {
      setProjectDetail(projects[0]);
      fetchPrice(projects[0]);
    }
  }, [projects]);

  function changeProjectDetails(props) {
    setProjectDetail(props);
    fetchPrice(props);
  }

  return (
    <>
      <section>
        {/* 
        <div className="flex justify-center w-full py-4 space-x-2">
          <a href="/components/carousel#item1" className="btn btn-xs btn-circle">1</a>
          <a href="/components/carousel#item4" className="btn btn-xs btn-circle">4</a>
        </div> */}

        <article
          className={
            "overflow-scroll main-content"
          }
        >
          <article className={"flex-mobile stretch"}>
            {/* <TagDescription /> */}
            {/* TODO: use intersection observer to do next/prev button */}
            <div className="relative">
              <div className="carousel">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    id={`item-${index}`}
                    className="carousel-item pr-8 pt-4 pb-4"
                    style={{ width: 160 }}
                  >
                    <ProjectSummary
                      {...project}
                      onClick={() => changeProjectDetails(projects[index])}
                    />
                  </div>
                ))}
              </div>
            </div>
          </article>
        </article>
      </section>
      <ProjectDetail {...projectDetail} usdValue={usdValue} />
    </>
  );
};
