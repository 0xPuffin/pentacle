import React from "react";

const ProjectSummary = ({education_name, description, onClick}) => {
    return (<article className={"p-card small beginner"}  onClick={onClick}>
        <h2 className={"boxed lowercase"}>{education_name}</h2>
        <p className={"length-300"}>{description}</p>
    </article>);
};

export default ProjectSummary;