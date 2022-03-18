import React from "react";

const ProjectLink = (props: any) => {
  return (
    <li className={"inline-block margin-right-1"}>
      {props && (<a href={props.url} className={"text-link"} target={"_blank"} rel="noopener noreferrer">{props.title}</a>)}
    </li>
  );
};

export default ProjectLink;
