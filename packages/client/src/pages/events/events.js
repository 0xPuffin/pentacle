import React, {useContext} from "react";
import Layout from "../../components/layouts/layout";
import {SearchContext} from "../../providers/search-provider";
import Header from "../../components/header/Header";

export function EventsPage() {
    const {pageData} = useContext(SearchContext);

    return (<>
        <Header/>
        <Layout>
            {pageData && (<main className={"main-container"}>
                <section className={"main-content"}>
                    <article className={"flex space-between"}>
                        <div><h1 className={"boxed"}>events</h1>
                        <p>credit <a href={"https://twitter.com/NathanSexer"} target={"_blank"} rel="noopener noreferrer">@NathanSexer</a></p></div>
                        {/*<EventsTagNav/>*/}
                    </article>
                    <article className={"flex margin-top-2"}>
                    {pageData.map((data, index) => (<div className={"p-card margin-bottom-1"} key={index}>
                        <h3 className={"boxed lowercase"}>{data.event_name}</h3>
                        <p>{data.start} -<br/> {data.finish}</p>
                        <p>{data.location}</p>
                        <p><a className={"text-link"} href={`https://${data.event_url}`} target={"_blank"} rel="noopener noreferrer">{data.event_url}</a></p>
                        <p>{data.twitter}</p>
                    </div>))}
                    </article>
                </section>
            </main>)}
        </Layout>
    </>);
}
