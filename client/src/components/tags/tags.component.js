import React from "react";
import Tag from "./tag.component";

const Tags = ({ tags }) => {
  return (
    <div className={"flex flex-start"}>
      {tags.map((name, index) => (
        <Tag
          key={index}
          {...name}
        />
      ))}
    </div>
  );
};

export default Tags;
