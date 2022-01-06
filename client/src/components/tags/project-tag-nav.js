import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { SearchContext } from '../../providers/search-provider';
import Tags from './tags.component';

export const ProjectTagNav = () => {
  const { tags, tagsLoading } = useContext(SearchContext);

  if (tagsLoading) {
    return (
      <nav className={"nav-content"}>
        <Link to={''}>Loading..</Link>
      </nav>
    )
  }
  return (<nav>
    <article className={"nav-content overflow-scroll"}>
      <Tags tags={tags} />
    </article>
  </nav>
  );
}

