import React, {useEffect, useState} from 'react';
import Layout from "../../components/layouts/layout";
import Header from "../../components/header";
import {EducationTagNav} from "../../components/tags/education-tag-nav";

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
                {education && (
                    <main className={"main-container"}>
                        {education.map((data, index) => (
                            <article className={"main-content margin-bottom-2"} key={index}>
                                <h2>{data.education_name}</h2>
                                <div className={"placeholder margin-bottom-1 margin-top-1"}>image thingy in here</div>
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


