import React from "react"

const ProjectSummary = (props) => {
    return (
        <article className="project-tile box link secondary dark">
            <h3>{props.name}</h3>
            <p className={"length-250"}>{props.description}</p>
        </article>
    )
}

export default ProjectSummary;
