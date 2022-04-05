import React, {useState, useEffect} from "react";
import SkillDetail from "./SkillDetail";
import SkillsSummary from "./SkillsSummary";
import CarouselContainer from "../carousel/CarouselContainer";

export const SkillsLayout = ({projects = []}) => {
    const [projectDetail, setProjectDetail] = useState();

    useEffect(() => {
        setProjectDetail(projects[0]);
    }, [projects]);

    useEffect(() => {
        if (projects.length === 0) {
            return <article>Loading...</article>;
        } else {
            setProjectDetail(projects[0]);
        }
    }, [projects]);

    function changeProjectDetails(props) {
        setProjectDetail(props);
    }

    return (<>
        <CarouselContainer>
            {projects.map((project, index) => (<article key={index} id={`item-${index}`}>
                <SkillsSummary{...project} onClick={() => changeProjectDetails(projects[index])}/>
            </article>))}
        </CarouselContainer>

        <SkillDetail {...projectDetail}/>
    </>);
};
