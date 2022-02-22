import React, {useContext} from "react";
import {SearchContext, SearchDispatchContext} from "../../providers/search-provider";
import {TitleContext} from "../../providers/title-provider";

import Layout from "../../components/layouts/layout";
import Header from "../../components/header/Header";
import EducationNavigation from "../../components/navigation/EducationNavigation";
import {useLocation} from "react-router-dom";
import RelatedLinks from "../../components/related-links/RelatedLinks";
import {EducationLayout} from "../../components/project-layout/EducationLayout";

export const EducationPage = () => {

    const {pageData} = useContext(SearchContext);
    const {searchResults, pageDataLoading, search} = useContext(SearchContext);
    const {setSearchString, handleClear} = useContext(SearchDispatchContext);
    const {title} = useContext(TitleContext);
    const location = useLocation();

    const handleChange = (event) => {
        setSearchString(event.target.value);
    };

    const hasNoRelatedLinks = ["/projects", "/projects/decentralised-exchange", "/projects/insurance",];

    return (<>
        <Header/>
        <Layout>

            {pageData && (<main className={"main-container"}>
                <section className={"main-content"}>
                    <article className={"flex space-between"}>
                        <h1 className={"boxed"}>{pageDataLoading ? "loading..." : title}</h1>
                        {/*<EducationTagNav/>*/}
                        <EducationNavigation/>
                    </article>
                    <article className={"margin-y-3 flex-center"}>
                        <div className={"fieldset"}>
                            <label aria-labelledby={"search"} className={"display-none"} htmlFor={"search"}>Search</label>
                            <input id="search" type="text" placeholder="filter by project name" value={search} onChange={handleChange}/>
                            <input className={"padding-left-0-75"} type="reset" value="clear" onClick={handleClear}/>
                        </div>
                    </article>
                </section>
                {!pageDataLoading && (<>
                    <EducationLayout projects={searchResults}/>
                    {!hasNoRelatedLinks.includes(location.pathname) && (<RelatedLinks/>)}
                </>)}
                    {/*{pageData.map((data, index) => (*/}
                    {/*    <article className={"margin-bottom-2 readability-max-width"} key={index}>*/}
                    {/*        <h2>{data.education_name}</h2>*/}
                    {/*        <p>by <a className={"text-link"} href={"https://twitter.com/noidtwo"} target={"_blank"} rel="noopener noreferrer">@noidtwo</a></p>*/}
                    {/*        <h3 className={"lowercase"}>what</h3>*/}
                    {/*        <p className={"large"}>{data.what}</p>*/}
                    {/*        <h3 className={"lowercase"}>why</h3>*/}
                    {/*        <p className={"large"}>{data.why}</p>*/}
                    {/*        <h3 className={"lowercase"}>reward</h3>*/}
                    {/*        <p className={"large"}>{data.reward}</p>*/}
                    {/*        <h3 className={"lowercase"}>risk</h3>*/}
                    {/*        <p className={"large"}>{data.risk}</p>*/}
                    {/*    </article>))}*/}
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
