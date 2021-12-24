import React, {useEffect, useState} from 'react';
import Layout from "../../components/layouts/layout";
import {ProjectTagNav} from "../../components/tags/project-tag-nav";
import {ProjectsLayout} from "../../components/project-layout/ProjectsLayout";
import Header from "../../components/header";
import Loading from "../../components/project-elements/loading.component";

export const EthDefiInsurancePage = () => {

    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    console.log(projects)

    const fetchProjects = async () => {
        setLoading(true)
        try {
            const response = await fetch("/projects/insurance")
            const res = await response.json()
            // console.log(res)
            setLoading(false)
            setProjects(res.data)
            setSearchResults(res.data)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProjects()
    }, [])

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleClear = () => {
        setSearchResults(projects);
        setSearchTerm('');
    };

    useEffect(() => {
        const searchResult = projects.filter(project =>
            project.project_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(searchResult);
    }, [searchTerm]);

    if (loading) {
        return (
            <Layout>
                <Loading />
            </Layout>
        )
    }
    return (
        <>
            <Header/>
            <Layout>
                <ProjectTagNav/>
                <main className={"main-container"}>
                    <section className={"main-content flex space-between padding-top-3"}>
                        <h1>Insurance</h1>
                        <article className={"fieldset inline boxed align-right"}>
                            <label aria-labelledby={"search"} className={"display-none"}
                                   htmlFor={"search"}>Search</label>
                            <input id="search" type="text" placeholder="Filter by project name" value={searchTerm}
                                   onChange={handleChange}/>
                            <input className={"padding-left-0-75"} type="reset" value="Clear" onClick={handleClear}/>
                        </article>
                    </section>
                    <ProjectsLayout projects={searchResults}/>
                </main>
            </Layout>
        </>
    );
}
