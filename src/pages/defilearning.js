import React from "react";
import Projects from "../components/defi-learning/projects";
import Header from "../components/header";
import Layout from "../components/layout";

export const DefiLearning = () => {
    return (
        <React.Fragment>
            <Header/>
            <Layout>
                {/*<Tags/>*/}
                <Projects/>
                {/*<Project/>*/}
                {/*<ExternalLinks/>*/}
            </Layout>
        </React.Fragment>
    )
}
