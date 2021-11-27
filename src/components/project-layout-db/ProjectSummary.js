import React from "react"

const ProjectSummary = ({project_name, description, onClick})  => {
    return (
        <article className="project-tile box link secondary dark" onClick={(onClick)}>
            <h3>{project_name}</h3>
            <p className={"length-250"}>{description}</p>
        </article>
    )
}

export default ProjectSummary;
