import React from "react";

const ProjectSummary = ({project_name, description, onClick}) => {
    return (<article className={"p-card intermediate"}  onClick={onClick}>
        <h2>{project_name}</h2>
        <p className={"length-300"}>{description}</p>
    </article>);
};

export default ProjectSummary;