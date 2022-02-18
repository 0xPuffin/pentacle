import React, {useContext} from "react";
import Layout from "../../components/layouts/layout";
import {EventsTagNav} from "../../components/tags/events-tag-nav";
import {SearchContext} from "../../providers/search-provider";
import HeaderV2 from "../../components/header-v2/HeaderV2";

export function EventsPage() {
    const {pageData} = useContext(SearchContext);

    return (<>
            <HeaderV2/>
            <Layout>
                <EventsTagNav/>
                {pageData && (<main className={"main-container"}>
                        <section className={"main-content"}>
                            <h1>events</h1>
                            {pageData.map((data, index) => (<article className={"margin-bottom-2"} key={index}>
                                    <h3>{data.event_name}</h3>
                                    <p>{data.start} - {data.finish}</p>
                                    <p>{data.location}</p>
                                    <p><a href={data.event_url}>{data.event_url}</a></p>
                                    <p>{data.twitter}</p>
                                    <p>{data.start}</p>
                                </article>))}
                        </section>
                    </main>)}
            </Layout>
        </>);
}
