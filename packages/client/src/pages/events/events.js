import React, {useContext} from "react";
import Layout from "../../components/layouts/layout";
import {EventsTagNav} from "../../components/tags/events-tag-nav";
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
                        <h1 className={"boxed"}>events</h1>
                        <EventsTagNav/>
                    </article>
                    {pageData.map((data, index) => (<article className={"margin-bottom-2"} key={index}>
                        <h3>{data.event_name}</h3>
                        <p>{data.start} - {data.finish}</p>
                        <p>{data.location}</p>
                        <p><a className={"text-link"} href={`http://${data.event_url}`}>{data.event_url}</a></p>
                        <p>{data.twitter}</p>
                        <p>{data.start}</p>
                    </article>))}
                </section>
            </main>)}
        </Layout>
    </>);
}
