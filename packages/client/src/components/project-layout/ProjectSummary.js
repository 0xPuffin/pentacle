import React from "react";

const ProjectSummary = ({project_name, description, onClick}) => {
    return (<div onClick={onClick}>
        <h3>{project_name}</h3>
        <p className={"length-300"}>{description}</p>
    </div>);
};

export default ProjectSummary;