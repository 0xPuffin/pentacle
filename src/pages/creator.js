import React from "react";
import Layout from "../components/layout";

export const Creator = () => {
    return (
        <Layout>
            <section className={"editorial-content margin-top-2"}>
                <article className={"margin-top-2"}>
                    <h3>Pentacle is created by</h3>
                    <ul>
                        <li>a software designer (CF), currently part time at Oxford University studying Security and Software Engineering</li>
                    </ul>
                    <h3>And is looking for funding towards</h3>
                    <ul>
                        <li>a wizard art director (SG)</li>
                        <li>a word-witch (ZS)</li>
                        <li>a cinema 4d sorcerer (AB)</li>
                        <li>a solidity and graphQL mage (??)</li>
                    </ul>
                </article>
            </section>
        </Layout>
    )
}
