import React from "react"

const ProjectContentComponent = (props) => {
    return (
        <>
            <article>
                <h3 className={"boxed"}>{props.targets}</h3>
                <p className="">{props.name}</p>
                <p className="">{props.date}</p>
                <a className="" href={props.link}>Link</a>
                <p className="">{props.author}</p>
            </article>
        </>
    )
}

export default ProjectContentComponent
