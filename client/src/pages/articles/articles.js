import React, {useEffect, useState} from 'react';
import Layout from "../../components/layouts/layout";
import Header from "../../components/header/Header";
import Loading from "../../components/Loading/Loading";
import {ProjectTagNav} from "../../components/tags/project-tag-nav";

export const Articles = () => {

    const [error, setError] = useState(null);
    const [loading, setIsLoaded] = useState(true);
    const [articles, setArticles] = useState([]);

    const fetchArticles = async () => {
        setIsLoaded(true)
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URI}/articles/articles`);
            const res = await response.json()
            setIsLoaded(false)
            setArticles(res.data)
            setArticles(res.data)
        } catch (error) {
            setIsLoaded(true);
            setError(error); // TODO
        }
    }
    useEffect(() => {
        fetchArticles()
    }, [])

    if (loading) {
        return (
            <>
                <Header/>
                <Layout>
                    <Loading/>
                </Layout>
            </>
        )
    } else if (error) {
        return <>error</>;
    } else {
        return (
            <>
                <Header/>
                <Layout>
                    <ProjectTagNav/>
                    {articles && (
                        <main className={"main-container"}>
                            <section className={"main-content padding-top-3"}>
                                <h1 className={"boxed"}>Articles</h1>
                                {articles.map((data, index) => (
                                    <article key={index}>
                                        <h3>{data.article_name}</h3>
                                        <a href={"data.article_url"}>{data.article_url}</a>
                                    </article>
                                ))}
                            </section>
                        </main>
                    )}
                </Layout>
            </>
        );
    }
}

