import React from "react"
import {Link} from "react-router-dom";

const features = require("../../data/featuresMain.json");
const FeatureMainLayout = () => {

    return (<>
            <section className="flex-large">
                {features
                    .map(feature => <Link className={"margin-bottom-2"} to={feature.link} key={feature.text}>
                            <article className={`box secondary feature main link padding-1 height-med flex-center  ${feature.bgImgClass}`}>
                                <h2>{feature.title}</h2>
                            </article>
                        </Link>
                    )}
            </section>
        </>
    );
};

export default FeatureMainLayout
