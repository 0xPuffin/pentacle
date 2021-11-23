// import React, {useState} from "react"
// import data from "./data"
// import ProjectCardComponent from "./project-card.component"
// import ProjectContentComponent from "./project-content.component"
// import callAllProjectNames from "../../server/server"
//
// function ProjectsNavigation() {
//     const [projectContentData, projectContentDataUpdate] = useState(data[0])
//     const data = callAllProjectNames()
//     console.log(data)
//
//     return (
//         <>
//             <article className={"projects-db-container flex"}>
//                 {data.map((item, index) => (
//                     <ProjectCardComponent
//                         key={index}
//                         {...item}
//                         onClick={() => projectContentDataUpdate(data[index])}/>
//                 ))}</article>
//             <section className={"project-container"}>
//                 <ProjectContentComponent
//                     key={projectContentData.author}
//                     {...projectContentData}
//                 />
//             </section>
//         </>
//     );
// }
//
// export default ProjectsNavigation
