import React, {useState, useEffect} from "react";
import SkillDetail from "./SkillDetail";
import SkillsSummary from "./SkillsSummary";

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
            <section className={"main-content padding-bottom-1 overflow-x-scroll"}>
                <div>
                     {/*<TagDescription/>*/}
                    {/* TODO: use intersection observer to do next/prev button */}
                        <div className={"flex-mobile"}>
                            {projects.map((project, index) => (<article key={index} id={`item-${index}`}>
                                    <SkillsSummary{...project} onClick={() => changeProjectDetails(projects[index])}/>
                                </article>))}
                        </div>
                </div>
            </section>

            <SkillDetail {...projectDetail}/>
        </>);
};
