import React from "react";

const ProjectSummary = ({education_name, description, onClick}) => {
    return (<article className={"p-card small"}  onClick={onClick}>
        <h3 className={"boxed lowercase"}>{education_name}</h3>
        <p className={"length-300"}>{description}</p>
    </article>);
};

export default ProjectSummary;