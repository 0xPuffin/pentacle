import React, {useState, useEffect} from "react";
import ProjectDetail from "./ProjectDetail";
import ProjectSummary from "./ProjectSummary";
import TagDescription from "../tag-description/TagDescription";
// import TagDescription from "../tag-description/TagDescription";

export const ProjectsLayout = ({projects = []}) => {
    const [projectDetail, setProjectDetail] = useState();
    const [usdValue, setUsdValue] = useState();

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
        setProjectDetail(props);
        fetchPrice(props);
    }

    return (<>
            <section className={"main-content padding-bottom-1 overflow-x-scroll"}>
                <div className="flex-mobile">
                     <TagDescription/>
                    {/* TODO: use intersection observer to do next/prev button */}
                        <div className={"flex-mobile"}>
                            {projects.map((project, index) => (<article className={"p-card"} key={index} id={`item-${index}`}>
                                    <ProjectSummary{...project} onClick={() => changeProjectDetails(projects[index])}/>
                                </article>))}
                        </div>
                </div>
            </section>
            <ProjectDetail {...projectDetail} usdValue={usdValue}/>
        </>);
};
