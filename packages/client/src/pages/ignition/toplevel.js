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
      <nav className={"margin-top-2"}>
        <ul className={"nav-content overflow-x-scroll"}>
          {projects.map((project, index) => (
            <li key={index}><a className={"text-link padding-right-2"} onClick={() => setProjectDetail(projects[index])}>{project.name}</a></li>
          ))}
        </ul>
      </nav>
      <Projects projects={projectDetail} />
    </>
  );
};
