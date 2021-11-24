import React, {useEffect, useState} from 'react';
import Layout from "../../components/layouts/layout";
import {TagsNav} from "../../components/tags/tags-nav";
import {ProjectsLayout} from "../../components/project-layout-db/ProjectsLayout";

export const EthDefiPage = () => {

    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    console.log(projects)

    const fetchProjects = async () => {
        setLoading(true)
        try {
            const response = await fetch("/projects")
            const res = await response.json()
            console.log(res)
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
        const results = projects.filter(project =>
            project.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm]);


    if (loading) {
        return (
            <Layout>
                loading
            </Layout>
        )
    }
    return (
        <Layout>
            <TagsNav/>
            <main>
                <section className={"main-content flex space-between padding-top-3"}>
                    <h1>Projects</h1>
                    {/*<Search onChange={handleChange} onClick={handleClear}/>*/}
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
    );
}

