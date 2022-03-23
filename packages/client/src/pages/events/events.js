import React, {useContext} from "react";
import Layout from "../../components/layouts/layout";
import {SearchContext} from "../../providers/search-provider";
import Header from "../../components/header/Header";
import Button from "../../components/project-elements/ProjectButton";

export function EventsPage() {
    const {pageData} = useContext(SearchContext);

    return (<>
        <Header/>
        <Layout>
            {pageData && (<main className={"main-container"}>
                <div className={"main-content"}>
                    <article className={"flex space-between margin-bottom-2"}>
                        <div><h1>Events</h1>
                            <p>credit <a className={"text-link"} href={"https://twitter.com/NathanSexer"}
                                         target={"_blank"} rel="noopener noreferrer">@NathanSexer</a></p></div>
                        {/*<EventsTagNav/>*/}
                    </article>
                </div>
                <section className={"main-content-wide overflow-scroll"}>
                    <div className={"main-content padding-top-1"}>
                        <article className={"grid event"}>
                            {pageData.map((data, index) => (
                                <div className={"card-large content beginner"} key={index}>
                                    <h2 className={"break-word"}>{data.event_name}</h2>
                                    <article>
                                        <p>{data.start} - {data.finish}</p>
                                        <p className={"padding-bottom-1"}>{data.location}</p>
                                        {/*<p><a className={"text-link inv"} href={`https://${data.event_url}`}*/}
                                        {/*      target={"_blank"} rel="noopener noreferrer">website</a></p>*/}
                                        {data.event_url && (<Button url={`https://data.event_url`} title="website"/>)}
                                        <p>{data.twitter}</p>
                                    </article>
                                </div>))}
                        </article>
                    </div>
                </section>
            </main>)}
        </Layout>
    </>);
}
