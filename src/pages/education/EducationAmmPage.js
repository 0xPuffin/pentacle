import React, {useEffect, useState} from 'react';
import Layout from "../../components/layouts/layout";
import {ProjectTagNav} from "../../components/tags/project-tag-nav";
import {ProjectsLayout} from "../../components/project-layout/ProjectsLayout";
import Header from "../../components/header";
import {EducationTagNav} from "../../components/tags/education-tag-nav";

export const EducationAmmPage = () => {

    const [loading, setLoading] = useState(true);
    const [amm, setAmm] = useState([]);
    const [tags] = useState([]);
    // const [searchTerm, setSearchTerm] = useState("");
    // const [searchResults, setSearchResults] = useState([]);

    console.log(amm);
    // console.log(tags);

    const fetchEducation = async () => {
        setLoading(true);
        try {
            const response = await fetch("/education/amm");
            const res = await response.json();
            console.log(res)
            setLoading(false);
            setAmm(res.data);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    useEffect(() => {
        fetchEducation();
    }, []);

    const tagName = (tag =>
      tag.tag_name);

    if (loading) {
        return (
            <Layout><p>Loading</p></Layout>
        )
    }

    return (
        <>
            <Header/>
            <Layout>
                <EducationTagNav/>
                <main className={"main-container"}>
                    <h2>{amm.education_name}</h2>
                    <p>{amm.what}</p>
                </main>
            </Layout>
        </>
    );
}

