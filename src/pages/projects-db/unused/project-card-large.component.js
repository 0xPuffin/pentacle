import React from "react"

const ProjectCardLargeComponent = (props) => {
        return (
            <>
                <article className="editorial-content box feature light link align-center padding-1">
                    <h3 className={"boxed"}>{props.targets} aaa</h3>
                    <p className="">{props.name}</p>
                    <p className="">{props.date}</p>
                    <a className="" href={props.link}>Link</a>
                    <p className="">{props.author}</p>
                </article>
            </>
        )
}

export default ProjectCardLargeComponent
