import React, {useState, useEffect} from "react";
import EducationDetail from "./EducationDetail";
import EducationSummary from "./EducationSummary";
import CarouselContainer from "../carousel/CarouselContainer";

export const EducationLayout = ({projects = []}) => {
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
                <EducationSummary{...project} onClick={() => changeProjectDetails(projects[index])}/>
            </article>))}
        </CarouselContainer>

        <EducationDetail {...projectDetail}/>
    </>);
};
