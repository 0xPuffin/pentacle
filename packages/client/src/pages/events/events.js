import React, {useContext} from "react";
import Layout from "../../components/layouts/layout";
import { EventsTagNav } from "../../components/tags/events-tag-nav";
import { SearchContext } from "../../providers/search-provider";
import HeaderV2 from "../../components/header-v2/HeaderV2";

export function EventsPage() {
  const { pageData } = useContext(SearchContext);

  return (
    <>
      <HeaderV2 />
      <Layout>
        <EventsTagNav />
        {pageData && (
          <main className={"main-container"}>
            {pageData.map((data, index) => (
              <article className={"main-content margin-bottom-2"} key={index}>
                <h2>{data.event_name}</h2>
                <p>{data.start}</p>
                <p>{data.finish}</p>
                <p>{data.location}</p>
                <p>{data.event_url}</p>
                <p>{data.twitter}</p>
                <p>{data.start}</p>
              </article>
            ))}
          </main>
        )}
      </Layout>
    </>
  );
}
