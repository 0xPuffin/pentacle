import React, {useContext} from "react";
import Layout from "../../components/layouts/layout";
import HeaderV2 from "../../components/header-v2/HeaderV2";
import {EducationTagNav} from "../../components/tags/education-tag-nav";
import {SearchContext} from "../../providers/search-provider";

export function EducationPage() {
    const {pageData} = useContext(SearchContext);

    return (<>
        <HeaderV2/>
        <Layout>

            {pageData && (<main className={"main-container"}>
                <section className={"main-content"}>
                    <article className={"flex space-between"}>
                        <h1 className={"boxed"}>education</h1>
                        <EducationTagNav/>
                    </article>
                    {pageData.map((data, index) => (
                        <article className={"margin-bottom-2 readability-max-width"} key={index}>
                            <h2>{data.education_name}</h2>
                            <div className={"placeholder margin-bottom-1 margin-top-1"}>
                                image thingy in here
                            </div>
                            <h3>What</h3>
                            <p className={"large"}>{data.what}</p>
                            <h3>Why</h3>
                            <p className={"large"}>{data.why}</p>
                            <h3>Reward</h3>
                            <p className={"large"}>{data.reward}</p>
                            <h3>Risk</h3>
                            <p className={"large"}>{data.risk}</p>
                        </article>))}
                </section>
            </main>)}
        </Layout>
        {/*<Layout>*/}
        {/*    <EducationTagNav/>*/}
        {/*    <main className={"main-container"}>*/}
        {/*    {education && (*/}
        {/*        <EducationDetail data={education}/>*/}
        {/*    )}*/}
        {/*    </main>*/}
        {/*</Layout>*/}
    </>);
}
