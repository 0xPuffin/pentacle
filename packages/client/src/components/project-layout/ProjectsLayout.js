import React, {useState, useEffect} from "react";
import ProjectDetail from "./ProjectDetail";
import ProjectSummary from "./ProjectSummary";
import CarouselContainer from "../carousel/CarouselContainer";
// import TagDescription from "../tag-description/TagDescription";

export const ProjectsLayout = ({projects = []}) => {
    const [projectDetail, setProjectDetail] = useState();
    const [usdValue, setUsdValue] = useState();
    const [activeProjectId, setActiveProjectId] = useState();

    useEffect(() => {
        setProjectDetail(projects[0]);
    }, [projects]);

    const fetchPrice = async (props) => {
        if (props === undefined) {
            const apiCall = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${projects[0].coingecko_id}&vs_currencies=usd`);
            const data = await apiCall.json();
            const lowerCaseName = projects[0].coingecko_id;
            const namedObject = data[lowerCaseName];
            setUsdValue(`$${namedObject.usd}`);
            return apiCall;
        } else {
            const apiCall = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${props.coingecko_id}&vs_currencies=usd`);
            const data = await apiCall.json();
            const lowerCaseName = props.coingecko_id;
            const namedObject = data[lowerCaseName];
            if (namedObject === undefined) {
                setUsdValue(null);
            } else {
                setUsdValue(`$${namedObject.usd}`);
            }
        }
    };

    useEffect(() => {
        if (projects.length === 0) {
            return <article>Loading...</article>;
        } else {
            setProjectDetail(projects[0]);
            fetchPrice(projects[0]);
        }
    }, [projects]);

    function changeProjectDetails(props) {
        setActiveProjectId(props.project_id);
        setProjectDetail(props);
        fetchPrice(props);
    }

    return (<>
        <CarouselContainer>
                {projects.map((project, index) => (<article key={index} id={`item-${index}`}>
                    <ProjectSummary{...project} onClick={() => changeProjectDetails(projects[index])}
                                   active={projects[index].project_id === activeProjectId}/>
                </article>))}
        </CarouselContainer>
        <ProjectDetail {...projectDetail} usdValue={usdValue}/>
    </>);
};
