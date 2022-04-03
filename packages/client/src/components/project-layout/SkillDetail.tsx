import React from "react";

type Props = {
    skill_title: string; replace: string;
};

const SkillDetail = ({skill_title, replace}: Props) => {
    return (<section className={"main-content-wide margin-top-1"}>
        <div className={"main-content"}>
            {replace && <article className={"margin-bottom-2 readability-max-width padding-top-1"}>
                <h2>{skill_title}</h2>
                <p className={"margin-bottom-2"}>by <a className={"text-link"}
                                                       href={"https://twitter.com/knowerofmarkets"} target={"_blank"}
                                                       rel="noopener noreferrer">@knowerofmarkets</a></p>
                <p className={"large"} style={{whiteSpace: "pre-line"}}>{replace}</p>
            </article>}
        </div>
    </section>);
};

export default SkillDetail;
