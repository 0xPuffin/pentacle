import React from "react";

const TagDescription = ({ tag_name, description }) => {
  return (
    <article className="project-tile box link secondary dark solid">
      {/*TODO*/}
      <h3>{tag_name} tag name</h3>
      <p className={"length-300"}>{description} tag description</p>
    </article>
  );
};

export default TagDescription;
