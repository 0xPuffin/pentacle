import React, {useState, useEffect, useContext} from "react";
import { SearchContext, SearchDispatchContext } from "../../providers/search-provider";
import ProjectDetail from "./ProjectDetail";
import ProjectSummary from "./ProjectSummary";

export const ProjectsLayout = ({projects = []}) => {
    const {selectedProject} = useContext(SearchContext);
    const {setSelectedProject} = useContext(SearchDispatchContext);
    const [usdValue, setUsdValue] = useState();

    useEffect(() => {
        setSelectedProject(projects[0]);
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
            fetchPrice(projects[0]);
            setSelectedProject(projects[0]);
        }
    }, [projects]);

    function changeProjectDetails(props) {
        fetchPrice(props);
        setSelectedProject(props);
    }

    return (<>
            <section className={"main-content padding-bottom-1 overflow-x-scroll overflow-y-hidden"}>
                <div>
                     {/*<TagDescription/>*/}
                    {/* TODO: use intersection observer to do next/prev button */}
                        <div className={"flex-mobile"}>
                            {projects.map((project, index) => (<article key={index} id={`item-${index}`}>
                                    <ProjectSummary{...project} onClick={() => changeProjectDetails(projects[index])}/>
                                </article>))}
                        </div>
                </div>
            </section>
            {selectedProject && (
                <ProjectDetail {...selectedProject} usdValue={usdValue}/>
            )}
        </>);
};
