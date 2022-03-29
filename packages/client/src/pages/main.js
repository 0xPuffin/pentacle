import React from "react";
import Layout from "../components/layout";
import Header from "../components/header/Header";
import CardLarge from "../components/cards/CardLarge";

export const Main = () => {
  return (
    <div>
      <Header />
      <Layout>
        <CardLarge />
      </Layout>
    </div>
  );
};
