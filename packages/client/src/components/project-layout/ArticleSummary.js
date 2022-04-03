import React from "react";

const ArticleSummary = ({article_title, onClick}) => {
    return (<article className={"p-card small intermediate"}  onClick={onClick}>
        <h2 className={"small boxed lowercase"}>{article_title}</h2>
        <p className={"length-300"}>{description}</p>
    </article>);
};

export default ArticleSummary;