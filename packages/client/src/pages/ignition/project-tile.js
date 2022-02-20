import React from "react";

const ProjectTile = ({ name, description, onClick }) => {
  return (
    <article className="project-tile box link secondary dark" onClick={onClick}>
      <h3>{name}</h3>
      <p className={"length-300"}>{description}</p>
    </article>
  );
};

export default ProjectTile;
