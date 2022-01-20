import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tags from "./tags.component";

export const EventsTagNav = () => {
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState([]);

  const fetchTags = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URI}/events/tags`
      );
      const res = await response.json();
      setLoading(false);
      setTags(res.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTags();
  }, []);

  if (loading) {
    return (
      <nav className={"nav-content"}>
        <Link to={""}>Loading..</Link>
      </nav>
    );
  }
  return (
    <nav>
      <article className={"nav-content overflow-scroll"}>
        <Tags tags={tags} />
      </article>
    </nav>
  );
};
