import React from "react";
import Layout from "../components/layout";
import CardLarge from "../components/cards/CardLarge";

export const Main = () => {
    return (<Layout className={"bg-dark"}>
        <section className={"main-content padding-top-1"}>
            <CardLarge/>
        </section>
    </Layout>);
};
