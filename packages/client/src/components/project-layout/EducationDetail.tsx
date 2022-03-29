import React from "react";

type Props = {
    education_name: string; what: string; why: string; reward: string; risk: string;
};

const EducationDetail = ({education_name, what, why, reward, risk}: Props) => {
    return (<section className={"main-content-wide margin-top-1"}>
        <div className={"main-content"}>
            <article className={"margin-bottom-2 readability-max-width padding-top-1"}>
                <h2>{education_name}</h2>
                <p>by <a href={"https://twitter.com/noidtwo"} className={"text-link"} target={"_blank"} rel="noopener noreferrer">@noidtwo</a>
                </p>
                <h3>what</h3>
                <p className={"large"}>{what}</p>
                <h3>why</h3>
                <p className={"large"}>{why}</p>
                <h3>reward</h3>
                <p className={"large"}>{reward}</p>
                <h3>risk</h3>
                <p className={"large"}>{risk}</p>
            </article>
        </div>
    </section>);
};

export default EducationDetail;
