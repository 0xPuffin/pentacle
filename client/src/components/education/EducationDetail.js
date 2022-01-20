import React from "react";

const EducationDetail = ({ data }) => {
  return (
    <>
      <article className={"main-content margin-bottom-2"}>
        <h2>{data.education_name}</h2>
        <div className={"placeholder margin-bottom-1 margin-top-1"}>
          image thingy in here
        </div>
        <h3>What</h3>
        <p className={"large"}>{data.what}</p>
        <h3>Why</h3>
        <p className={"large"}>{data.why}</p>
        <h3>Reward</h3>
        <p className={"large"}>{data.reward}</p>
        <h3>Risk</h3>
        <p className={"large"}>{data.risk}</p>
      </article>
    </>
  );
};

export default EducationDetail;
