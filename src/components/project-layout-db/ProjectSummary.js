import React from "react"

const ProjectSummary = (props) => {
    return (
        <article className="project-tile box feature dark link box-padding">
            <h2>{props.name}</h2>
            <p className={"length-250"}>{props.description}</p>
        </article>
    )
}

export default ProjectSummary;
