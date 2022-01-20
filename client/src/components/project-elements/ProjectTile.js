import React from "react";

const ProjectTile = (props) => {
  return (
    <article className="project-tile box feature dark link box-padding">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </article>
  );
};

export default ProjectTile;
