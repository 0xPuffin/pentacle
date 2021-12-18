import React from "react"

const TagDescription = ({tag_name, description, onClick})  => {
    return (
        <article className="project-tile box link secondary dark solid">
            <h3>{tag_name}</h3>
            <p className={"length-300"}>{description}</p>
        </article>
    )
}

export default TagDescription;
