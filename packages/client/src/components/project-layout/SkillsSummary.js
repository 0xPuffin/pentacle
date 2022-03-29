import React from "react";

const SkillSummary = ({skill_title, onClick}) => {
    return (<article className={"p-card small intermediate"}  onClick={onClick}>
        <h2 className={"small boxed lowercase"}>{skill_title}</h2>
        {/*<p className={"length-300"}>{description}</p>*/}
    </article>);
};

export default SkillSummary;