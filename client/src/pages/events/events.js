import React, { useEffect, useState } from "react";
import Layout from "../../components/layouts/layout";
import Header from "../../components/header/Header";
import { EventsTagNav } from "../../components/tags/events-tag-nav";

export function Events() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch("/events/events");
      const res = await response.json();
      setEvents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <Layout>
        <EventsTagNav />
        {events && (
          <main className={"main-container"}>
            {events.map((data, index) => (
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
