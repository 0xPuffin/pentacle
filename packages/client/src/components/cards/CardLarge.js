import React from "react";
import {Link} from "react-router-dom";

const features = require("../../data/featuresMain.json");
const CardLarge = () => {
    return (<>
        <section className="grid">
            {features.map((feature) => (<Link to={feature.link} key={feature.text}>
                <article className={`card-large content ${feature.class}`}>
                    <h2>{feature.title}</h2>
                    <p>{feature.text}</p>
                </article>
            </Link>))}
        </section>
    </>);
};

export default CardLarge;
