import React from "react";
import Button from "../project-elements/project.button.component";
import Link from "../project-elements/project.link.component";

type Props = {
    education_name: string;
    what: string;
    why: string;
    risk: string;
    reward: string;
}

const EducationDetail = ({education_name, what, why, risk, reward}: Props) => {
    return (
        <section className={"main-container"}>
            <article className={"main-content"}>
                <h2>{education_name}</h2>
                <p>{what}</p>
                <p>{why}</p>
                <p>{risk}</p>
                <p>{reward}</p>
            </article>
        </section>
    );
};

export default EducationDetail;
