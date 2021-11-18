import React, {useEffect, useState} from 'react';
import Layout from "../../components/layouts/layout";
import {TopLevel} from './toplevel';
import Data from './solIgnition';

export const ProjectsPage = () => {

    const [projects, setProjects] = useState(Data.children);

    return (
        <>
            <Layout>
                <TopLevel projects={projects}/>
            </Layout>
        </>
    );
}
