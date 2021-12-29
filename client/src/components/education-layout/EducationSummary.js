import React from "react"

const EducationSummary = ({education_name, what, onClick})  => {
    return (
        <article className="education-tile box link secondary dark" onClick={(onClick)}>
            <h3>{education_name}</h3>
            <p className={"length-300"}>{what}</p>
        </article>
    )
}

export default EducationSummary;
