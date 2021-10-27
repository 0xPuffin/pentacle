import React from "react";
import Layout from "../../components/layout";
import Header from "../../components/header";
import TxCardMed from "../../components/tx-cards/tx-card-med";

export const BadThingsCream = () => {
    return (
        <>
            <Header/>
            <Layout>
                <section className={"editorial-content two-col"}>
                    <article className={"box feature dark box-padding margin-top-1 hero"}>
                        <h1>Bad things™ 1.0 - CREAM hack</h1>
                    </article>
                    <TxCardMed jsonUrl="https://raw.githubusercontent.com/penta-fun/cream-hacker-chat/main/data.json"  hackerAddress="0x24354d31bc9d90f62fe5f2454709c32049cf866b" />
                    <p className={"margin-top-1"}>Bad things™ naming credit <a className={"text-link"}
                                                                               href={"https://twitter.com/tayvano_"}>Tayvano</a>
                    </p>
                </section>
            </Layout>
        </>
    )
}
