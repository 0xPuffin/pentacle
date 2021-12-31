import React, {useState, useEffect} from "react";
import ProjectDetail from "./ProjectDetail";
import ProjectSummary from "./ProjectSummary";
import TagDescription from "../tag-layout/TagDescription";

export const ProjectsLayout = ({projects}) => {
    const [projectDetail, setProjectDetail] = useState(projects[0]);
    const [usdValue, setUsdValue] = useState();

    const fetchPrice = async (props) => {
        if (props === undefined) {
            const apiCall = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${projects[0].coingecko_id}&vs_currencies=usd`)
            const data = await apiCall.json()
            const lowerCaseName = projects[0].coingecko_id
            const namedObject = data[lowerCaseName];
            setUsdValue(`$${namedObject.usd}`)
            return apiCall
        } else {
            const apiCall = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${props.coingecko_id}&vs_currencies=usd`)
            const data = await apiCall.json()
            const lowerCaseName = props.coingecko_id
            const namedObject = data[lowerCaseName];
            if (namedObject === undefined) {
                setUsdValue(null)
            } else {
                setUsdValue(`$${namedObject.usd}`)
            }
        }
    }

    useEffect(() => {
        if ((projects).length === 0) {
            return <article>Loading...</article>;
        } else {
            setProjectDetail(projects[0])
            fetchPrice(projects[0])
        }
    }, [projects]);

    function changeProjectDetails(props) {
        setProjectDetail(props)
        fetchPrice(props)
    }

    return (
        <>
            <section>
                <article className={"overflow-scroll padding-top-2 padding-bottom-3 main-content"}>
                    <article className={"flex-mobile stretch"}>
                        <TagDescription/>
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
