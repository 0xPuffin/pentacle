import React from "react";

type Props = {
    skill_name: string;
    text: string;
};

const SkillDetail = ({skill_name, text}: Props) => {
    return (<section className={"main-content margin-top-2"}>
        <article className={"margin-bottom-2 readability-max-width"}>
            <h2>{skill_name}</h2>
            <p>by <a href={"https://twitter.com/knowerofmarkets"} target={"_blank"} rel="noopener noreferrer">@knowerofmarkets</a></p>
            <p className={"large"}>{text}</p>
        </article>
    </section>);
};

export default SkillDetail;
