import React, {useState, useEffect} from "react";
import Project from "./lowerlevel";
import ProjectTile from "./project-tile";


const Projects = ({projects}) => {
    const [projectDetail, setProjectDetail] = useState(projects.children[0]);
    const [projectName, setProjectName] = useState();
    const [usdValue, setUsdValue] = useState();

    useEffect(() => {
        setProjectDetail(projects.children[0]);
        fetchPrice(projects.children[0].name)
    }, [projects]);


    const fetchPrice = async () => {
        const apiCall = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${projectDetail.name}&vs_currencies=usd`)
        const data = await apiCall.json()
        const lowerCaseName = projectDetail.name.toLowerCase()
        var namedObject = await data[lowerCaseName];
        console.log(namedObject)
        setUsdValue(namedObject)
    }

    function changeLowerLevelData(props) {
        setProjectDetail(props)
        setProjectName(projectDetail.name)
        fetchPrice(projectName)
        console.log(usdValue)
    }

    return (
        <main>
            <section className={"main-container"}>
                <article className={"overflow-x-scroll padding-y-3 main-content"}>
                    <article className={"flex-mobile stretch"}>
                        {projects.children.map((project, index) => (
                            <ProjectTile
                                key={index}
                                {...project}
                                onClick={() => changeLowerLevelData(projects.children[index])}
                            />
                        ))}
                    </article>
                </article>
            </section>
            <Project projectDetailLower={projectDetail} usdValue={usdValue}/>
        </main>
    );
};

export default Projects;
