import React from "react";

const ProjectTile = ({ name, description, onClick }) => {
  return (
    <article className="p-card intermediate" onClick={onClick}>
      <h2>{name}</h2>
      <p className={"length-300"}>{description}</p>
    </article>
  );
};

export default ProjectTile;
