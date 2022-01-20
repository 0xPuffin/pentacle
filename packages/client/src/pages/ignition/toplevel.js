import React, { useEffect, useState } from "react";
import Projects from "./middlelevel";
import Header from "../../components/header/Header";

export const TopLevel = ({ projects }) => {
  const [projectDetail, setProjectDetail] = useState(projects[0]);

  useEffect(() => {
    setProjectDetail(projects[0]);
  }, [projects]);

  return (
    <>
      <Header />
      <nav>
        <article className={"nav-content overflow-x-scroll"}>
          {projects.map((project, index) => (
            <a
              className={"text-link padding-right-2"}
              key={index}
              onClick={() => setProjectDetail(projects[index])}
            >
              {project.project_name}
            </a>
          ))}
        </article>
      </nav>
      <Projects projects={projectDetail} />
    </>
  );
};
