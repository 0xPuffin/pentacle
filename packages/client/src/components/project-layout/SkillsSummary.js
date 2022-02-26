import React from "react";

const SkillSummary = ({skill_name, onClick}) => {
    return (<article className={"p-card small"}  onClick={onClick}>
        <h3 className={"boxed lowercase"}>{skill_name}</h3>
        {/*<p className={"length-300"}>{description}</p>*/}
    </article>);
};

export default SkillSummary;