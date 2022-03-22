import React from "react";

type Props = {
    education_name: string;
    what: string;
    why: string;
    reward: string;
    risk: string;
};

const EducationDetail = ({education_name, what, why, reward, risk}: Props) => {
    return (<section className={"main-content"}>
        <article className={"margin-bottom-2 readability-max-width"}>
            <h2>{education_name}</h2>
            <p>by <a href={"https://twitter.com/noidtwo"} target={"_blank"} rel="noopener noreferrer">@noidtwo</a></p>
            <h3 className={"lowercase"}>what</h3>
            <p className={"large"}>{what}</p>
            <h3 className={"lowercase"}>why</h3>
            <p className={"large"}>{why}</p>
            <h3 className={"lowercase"}>reward</h3>
            <p className={"large"}>{reward}</p>
            <h3 className={"lowercase"}>risk</h3>
            <p className={"large"}>{risk}</p>
        </article>
    </section>);
};

export default EducationDetail;
