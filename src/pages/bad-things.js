import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import TxCardMed from "../components/tx-cards/tx-card-med";

export const BadThings = () => {
    return (
        <>
            <Header/>
            <Layout>
                <section className={"editorial-content two-col"}>
                    <article className={"box feature dark box-padding margin-top-1 hero"}>
                        <h1>Bad things™ 1.0 - Poly Network hack</h1>
                        <p className={"align-center"}><span>10-Aug-2021</span> | <span>Lilac bunny ended up <a
                            className={"text-link"}
                            href={"https://gist.github.com/banteg/bc9a6d5594fac27fa1d9342421fa570d"} target={"_blank"}
                            rel="noopener noreferrer">coding this</a> to read the hacker's on-chain blog</span> | <span><a
                            className={"text-link"}
                            href={"https://twitter.com/kelvinfichter/status/1425217046636371969"} target={"_blank"}
                            rel="noopener noreferrer">Post-mortem by @kelvinfichter</a></span>
                        </p>
                    </article>
                    <TxCardMed/>
                    <p className={"margin-top-1"}>Bad things™ naming credit <a className={"text-link"}
                                                                               href={"https://twitter.com/tayvano_"}>Tayvano</a>
                    </p>
                </section>
            </Layout>
        </>
    )
}
