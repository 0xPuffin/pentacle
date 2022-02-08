import React from "react";

const ProjectSummary = ({project_name, description, onClick}) => {
    return (<article className="border-2 rounded-2xl p-4 border-p-green mr-4" onClick={onClick}>
        <h3>{project_name}</h3>
        <p className={"length-250"}>{description}</p>
    </article>);
};

export default ProjectSummary;