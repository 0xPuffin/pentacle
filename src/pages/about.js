import React from "react";
import Layout from "../components/layout";
import {Link} from "react-router-dom";

export const About = () => {
    return (
        <Layout>
            <section className={"editorial-content margin-top-2"}>
                <article className={"margin-top-2"}>
                    <p>People often ask, where to begin with crypto.
                    <br/>There are many entry points. And many many lists.</p>
                    <p>Information overload causes confusion and doubt. And there's only so far
                        technology can go to protect people from fraud, scams and risky investing.</p>
                </article>

                <article className={"margin-top-2"}>
                    <h2>Discoverability</h2>

                    <h3>Pentacle is growing into</h3>
                    <ul>
                        <li>a gateway into the world of crypto, starting with the <Link to="/">Ethereum Universe</Link></li>
                        <li>an explorable and fun platform to discover projects and teams</li>
                        <li>a browser plugin to accompany people on their voyage beyond the platform.</li>
                    </ul>
                </article>

                <article className={"margin-top-2"}>
                    <h2>Security</h2>
                    <h3>Pentacle will</h3>
                    <ul>
                        <li>guide people to verifiable projects and teams</li>
                        <li>help people take responsibility for their own security</li>
                        <li>collaborate with teams and connect with existing tech across the ecosystem.</li>
                    </ul>
                </article>
            </section>
        </Layout>
    )
}
