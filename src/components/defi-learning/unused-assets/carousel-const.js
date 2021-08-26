// import React, { useState } from "react"
// import useCarousel from "./carousel.js"


// export const Carousel = ({ data, interval = 5000 }) => {
//     const length = data.length;
//     const [active, setActive, handlers, style] = useCarousel(length, interval);
  
//     return (
//         length > 0 && (
//             <div className="carousel">
//             <ol className="carousel-indicators">
//                 {data.map((_, index) => (
//                 <li
//                     onClick={() => setActive(index)}
//                     key={index}
//                     className={`${active === index ? "active" : ""}`}
//                 />
//                 ))}
//             </ol>
//             <div className="carousel-content" {...handlers} style={style}>
//                 <div className="carousel-item">{data[data.length - 1]}</div>
//                 {data.map((slide, index) => (
//                 <div className="carousel-item" key={index}>
//                     {slide}
//                 </div>
//                 ))}
//                 <div className="carousel-item">{data[0]}</div>
//             </div>
//             </div>
//         )
//     );
//   };