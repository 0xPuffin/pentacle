import React from "react";
import Layout from "../components/layout";

export const About = () => {
  return (
      <Layout>
        <article className={"main-header align-center"}><h1>People often ask, where to begin in Crypto</h1></article>
        <section className={"editorial-content one-col"}>
          <article className={"box feature dark box-padding margin-top-1 hero"}>
            <p>
              Information overload causes confusion and doubt. And there&#39;s
              only so far technology can go to protect people from fraud, scams
              and risky investing. Pentacle&#39;s aim is to help people in their
              quest for knowledge - as a talisman of protection
            </p>
          </article>

          <article className={"box feature dark box-padding"}>
            <h2>Discoverability</h2>
            <h3>Pentacle is</h3>
            <ul>
              <li>A gateway into the world of crypto</li>
              <li>
                An explorable and fun platform to safely discover projects and
                teams
              </li>
              <li>
                A browser plugin to accompany people on their voyage beyond the
                platform (in the pipeline)
              </li>
            </ul>
          </article>

          <article className={"box feature dark box-padding"}>
            <h2>Security</h2>
            <h3>Pentacle will</h3>
            <ul>
              <li>Guide people to community-verified projects and teams</li>
              <li>Help people take responsibility for their own security</li>
              <li>
                Collaborate with teams and connect with existing data and tech
                across the ecosystem
              </li>
            </ul>
          </article>

        </section>
      </Layout>
  );
};
