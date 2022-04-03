import React from "react";

type Props = {
    article_name: string; article_url: string;
};

const ArticleDetail = ({article_name, article_url}: Props) => {
    return (<section className={"main-content-wide margin-top-1"}>
        <div className={"main-content"}>
            <article className={"margin-bottom-2 readability-max-width padding-top-1"}>
                <h2>{article_name}</h2>
                <a href={article_url}>{article_url}</a>
            </article>
        </div>
    </section>);
};

export default ArticleDetail;
