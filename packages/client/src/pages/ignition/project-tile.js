import React from "react";

const ProjectTile = ({ name, description, onClick }) => {
  return (
    <article className="" onClick={onClick}>
      <h3>{name}</h3>
      <p className={"length-250"}>{description}</p>
    </article>
  );
};

export default ProjectTile;
