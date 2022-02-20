import React from "react";

const ProjectSummary = ({project_name, description, onClick}) => {
    return (<article className={"p-card"}  onClick={onClick}>
        <h3 className={"boxed"}>{project_name}</h3>
        <p className={"length-300"}>{description}</p>
    </article>);
};

export default ProjectSummary;