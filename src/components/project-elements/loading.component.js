import React from "react";
import { ProjectTagNav } from "../tags/project-tag-nav";

const Loading = () => {
  return (
    <>
      <ProjectTagNav />
      <main className={"main-container"}>
        <section className={"main-content padding-top-3"}>Loading</section>
      </main>
    </>
  );
};

export default Loading;
