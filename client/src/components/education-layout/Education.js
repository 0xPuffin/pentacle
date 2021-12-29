import React, {useState, useEffect} from "react";
import Education from "./EducationDetail";
import ProjectTile from "./EducationSummary";

const Education = ({education}) => {
    const [educationDetail, setEducationDetail] = useState(education.children[0]);

    useEffect(() => {
        setEducationDetail(education.children[0]);
    }, [education]);

    return (
        <main>
            <section className={"main-container"}>
                <article className={"overflow-x-scroll padding-y-3 main-content"}>
                    <article className={"flex-mobile stretch"}>
                        {education.children.map((education, index) => (
                            <ProjectTile
                                key={index}
                                {...education}
                                onClick={() => setEducationDetail(education.children[index])}
                            />
                        ))}
                    </article>
                </article>
            </section>
            <Education projectDetailLower={educationDetail}/>
        </main>
    );
};

export default Education;
