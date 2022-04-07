import React, { useState, useEffect } from "react";
import Project from "./lowerlevel";
import ProjectTile from "./project-tile";
import CarouselContainer from "../../components/carousel/CarouselContainer";

const Projects = ({ projects }) => {
  const [projectDetail, setProjectDetail] = useState(projects.children[0]);

  useEffect(() => {
    setProjectDetail(projects.children[0]);
  }, [projects]);

  return (
    <>
        <CarouselContainer>
            {projects.children.map((project, index) => (
              <ProjectTile
                key={index}
                {...project}
                onClick={() => setProjectDetail(projects.children[index])}
              />
            ))}
        </CarouselContainer>
      <Project projectDetailLower={projectDetail} />
    </>
  );
};

export default Projects;
