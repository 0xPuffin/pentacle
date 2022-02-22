import React from "react";
import Layout from "../components/layout";
import Header from "../components/header/Header";

export const About = () => {
  return (
    <>
      <Header />
      <Layout>
        <section className={"editorial-content one-col"}>
          <article className={"box feature dark box-padding margin-top-1 hero"}>
            <h1>People often ask, where to begin in Crypto</h1>
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

          <article className={"box feature dark box-padding"}>
            <h2>Roadmap</h2>
            <h3>Q1 2021</h3>
            <ul>
              <li>Build MVP Ethereum and Solana interactive ecosystems</li>
              <li>Form data-gathering team and define data set</li>
            </ul>
            <h3 className={"margin-top-1"}>Q2</h3>
            <ul>
              <li>Data collection continues</li>
              <li>Pentacle 2.0 begins</li>
              <li>New product design is developed</li>
            </ul>
            <h3 className={"margin-top-1"}>Q4</h3>
            <ul>
              <li>Develop new branding and design direction</li>
              <li>Build new front end</li>
            </ul>
            <h3 className={"margin-top-1"}>Q1 2022</h3>
            <ul>
              <li>Pentacle 2.0 released</li>
              <li>Begin work on browser plugin</li>
              <li>Further project verification work begins</li>
            </ul>
          </article>
        </section>
      </Layout>
    </>
  );
};
