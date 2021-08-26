import React from "react"


const ProjectTile = ({name, onClick}) => {
    return (
        <article className="project-tile" onClick={(onClick)}>
            <h3>{name}</h3>
            <p>description</p>
        </article>
    )
}

export default ProjectTile
