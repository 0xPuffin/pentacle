import React from "react";

const CarouselContainer = ({children}) => {
    return (<>
        <section className={"carousel-container"}>
            <article className={"padding-bottom-1 overflow-x-scroll flex-mobile"}>
                {children}
            </article>
        </section>
    </>);
};

export default CarouselContainer;
