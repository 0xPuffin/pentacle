import React from "react"

const ProjectCardComponent = ({targets, onClick}) => {
    return (
        <section className="editorial-content box feature dark link tertiary box-padding"
                 onClick={onClick}>
            <h3 className={"boxed"}>{targets}</h3>
        </section>
    )
}

export default ProjectCardComponent
