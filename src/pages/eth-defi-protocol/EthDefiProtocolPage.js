import React, {useEffect, useState} from 'react';
import Layout from "../../components/layouts/layout";
import {ProjectsLayout} from '../../components/project-layout/ProjectsLayout';
import Data from './solIgnition';

export const EthDefiProtocolPage = () => {

    const [projects, setProjects] = useState(Data.children);

    return (
        <Layout>
            <ProjectsLayout projects={projects}/>
        </Layout>
    );
}
