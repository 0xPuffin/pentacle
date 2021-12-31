import React, {useEffect, useState} from 'react';
import Layout from "../../components/layouts/layout";
import Header from "../../components/header";
import {EducationTagNav} from "../../components/tags/education-tag-nav";
import Loading from "../../components/project-elements/loading.component";

export function education () {
    const [error, setError] = useState(null);
    const [loading, setIsLoaded] = useState(true);
    const [education, setEducation] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const fetchEducation = async () => {
        setIsLoaded(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_URI}/education/education`);
            const res = await response.json();
            setIsLoaded(false);
            setEducation(res.data);
            setSearchResults(res.data);
        } catch (error) {
            setIsLoaded(true);
            setError(error);
        }
    };
    useEffect(() => {
        fetchEducation();
    }, []);

    if (loading) {
        return (
            <Layout>
                <Loading/>
            </Layout>
        )
    } else if (error) {
        return <>error</>;
    } else {

        return (
            <>
                <Header/>
                <Layout>
                    <EducationTagNav/>
                    {education && (
                        <main className={"main-container"}>
                            {education.map((data, index) => (
                                <article className={"main-content margin-bottom-2"} key={index}>
                                    <h2>{data.education_name}</h2>
                                    <div className={"placeholder margin-bottom-1 margin-top-1"}>image thingy in here
                                    </div>
                                    <h3>What</h3>
                                    <p className={"large"}>{data.what}</p>
                                    <h3>Why</h3>
                                    <p className={"large"}>{data.why}</p>
                                    <h3>Reward</h3>
                                    <p className={"large"}>{data.reward}</p>
                                    <h3>Risk</h3>
                                    <p className={"large"}>{data.risk}</p>
                                </article>
                            ))}
                        </main>
                    )}
                </Layout>
            </>
        );
    }
}

