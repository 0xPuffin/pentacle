import React, {useContext} from "react";
import Layout from "../../components/layouts/layout";
// import RelatedLinks from "../../components/related-links/RelatedLinks";
import {SearchContext} from "../../providers/search-provider";
import Header from "../../components/header/Header";
import EducationNavigation from "../../components/navigation/EducationNavigation";

export const EducationPage = () => {

    const {pageData} = useContext(SearchContext);

    return (<>
        <Header/>
        <Layout>

            {pageData && (<main className={"main-container"}>
                <section className={"main-content"}>
                    <article className={"flex space-between"}>
                        <h1 className={"boxed"}>education</h1>
                        {/*<EducationTagNav/>*/}
                        <EducationNavigation/>
                    </article>
                    {pageData.map((data, index) => (
                        <article className={"margin-bottom-2 readability-max-width"} key={index}>
                            <h2>{data.education_name}</h2>
                            <p>by <a className={"text-link"} href={"https://twitter.com/noidtwo"} target={"_blank"} rel="noopener noreferrer">@noidtwo</a></p>
                            <h3 className={"lowercase"}>what</h3>
                            <p className={"large"}>{data.what}</p>
                            <h3 className={"lowercase"}>why</h3>
                            <p className={"large"}>{data.why}</p>
                            <h3 className={"lowercase"}>reward</h3>
                            <p className={"large"}>{data.reward}</p>
                            <h3 className={"lowercase"}>risk</h3>
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
