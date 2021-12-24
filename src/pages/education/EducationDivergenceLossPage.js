import React, {useEffect, useState} from 'react';
import Layout from "../../components/layouts/layout";
import Header from "../../components/header";
import {EducationTagNav} from "../../components/tags/education-tag-nav";
import EducationContent from "../../components/education-elements/educationContent.component";

export function EducationDivergenceLossPage () {

    const [education, setEducation] = useState(null);

    useEffect(() => {
        getData();

        async function getData () {
            const response = await fetch("/education/divergence-loss");
            const res = await response.json();
            setEducation(res.data);
        }
    }, []);

    return (
        <>
            <Header/>
            <Layout>
                <EducationTagNav/>
                <main className={"main-container"}>
                {education && (
                    <EducationContent data={education}/>
                )}
                </main>
            </Layout>
        </>
    );
}