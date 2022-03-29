import React, { useContext } from "react";
import { SearchContext } from "../../providers/search-provider";

const RelatedLinks = () => {
  const { relatedArticles } = useContext(SearchContext);

  return (
    <section className={"main-content margin-top-3"}>
      {relatedArticles.map((a) => (
        <article key={a.article_id || a.id} className="p-card">
          <h4>
            {a.article_name}
          </h4>
          <hr/>
          <a href={a?.article_url}>
            {a?.article_url}
          </a>
        </article>
      ))}
    </section>
  );
};

export default RelatedLinks;
