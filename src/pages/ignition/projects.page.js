import React, {useEffect, useState} from 'react';
import Layout from "../../components/layouts/layout";
import { TopLevel } from './toplevel';
import Data from './solIgnition';
import styles from '../../assets/styles/ignition.scss';

export const ProjectsPage = () => {

    const [projects, setProjects] = useState(Data.children);

    return (
        <Layout className={styles}>
            <TopLevel projects={projects}/>
        </Layout>
    );
}

