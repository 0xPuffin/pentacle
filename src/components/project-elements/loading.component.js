import React from "react";
import { TagsNav } from "../tags/tags-nav";

const Loading = () => {
  return (
    <>
      <TagsNav />
      <main className={"main-container"}>
        <section className={"main-content padding-top-3"}>Loading</section>
      </main>
    </>
  );
};

export default Loading;
