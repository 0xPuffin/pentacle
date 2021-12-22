import React, {useState, useEffect} from "react";
import EducationDetail from "./EducationDetail";
import EducationSummary from "./EducationSummary";
import TagDescription from "../tag-layout/TagDescription";

export const EducationLayout = ({education}) => {
    const [educationDetail, setEducationDetail] = useState(educationArticles[0]);

    useEffect(() => {
        if ((educationArticles).length === 0) {
            return <div>Loading Data</div>;
        } else {
            setProjectDetail(educationArticles[0])
        }
    }, [educationArticles]);


    function changeEducationDetails(props) {
        setEducationDetail(props)
    }

    return (
        <>
            <section className={"main-container"}>
                <article className={"overflow-scroll padding-top-2 padding-bottom-3 main-content"}>
                    <article className={"flex-mobile stretch"}>
                        <TagDescription/>
                        {educationArticles.map((education, index) => (
                            <EducationSummary
                                key={index}
                                {...education}
                                onClick={() => changeEducationDetails(educationArticles[index])}
                            />
                        ))}
                    </article>
                </article>
            </section>
            <EducationDetail {...educationDetail}/>
        </>
    );
};
