import React, {useState, useEffect} from "react";
import ProjectDetail from "./ProjectDetail";
import ProjectSummary from "./ProjectSummary";

export const ProjectsLayout = ({projects}) => {
    const [projectDetail, setProjectDetail] = useState(projects[0]);
    const [usdValue, setUsdValue] = useState();

    useEffect(() => {
        if ((projects).length === 0) {
            return <div>Loading Data</div>;
        } else {
            setProjectDetail(projects[0])
            fetchPrice(projects[0])
        }
    }, [projects]);

    const fetchPrice = async (props) => {
        if (props === undefined) {
            const apiCall = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${projects[0].project_name}&vs_currencies=usd`)
            const data = await apiCall.json()
            const lowerCaseName = projects[0].project_name.toLowerCase()
            const namedObject = data[lowerCaseName];
            setUsdValue(`$${namedObject.usd}`)
            return apiCall
        } else {
            const apiCall = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${props.project_name}&vs_currencies=usd`)
            const data = await apiCall.json()
            const lowerCaseName = props.project_name.toLowerCase()
            const namedObject = data[lowerCaseName];
            if (namedObject === undefined) {
                setUsdValue('Unable to fetch price data')
            } else {
            setUsdValue(`$${namedObject.usd}`)
            }
        }
    }

    function changeProjectDetails(props) {
        setProjectDetail(props)
        fetchPrice(props)
    }

    return (
        <>
            <section className={"main-container"}>
                <article className={"overflow-scroll padding-top-2 padding-bottom-3 main-content"}>
                    <article className={"flex-mobile stretch"}>
                        {projects.map((project, index) => (
                            <ProjectSummary
                                key={index}
                                {...project}
                                onClick={() => changeProjectDetails(projects[index])}
                            />
                        ))}
                    </article>
                </article>
            </section>
            <ProjectDetail {...projectDetail} usdValue={usdValue}/>
        </>
    );
};
