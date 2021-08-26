import React from "react"
import {Link} from "react-router-dom";

const features = require("../../data/featuresMain.json");
const FeatureMainLayout = () => {

    return (<>
            <section className="flex-large margin-top-1">
                {features
                    .map(feature => <Link className={"margin-bottom-1"} to={feature.link} key={feature.text}>
                            <article className={"editorial-content box feature link secondary box-padding"}>
                                <article className={"flex column align-space-between height-100 boxed"}>
                                    <div className={"flex"}>
                                        <article>
                                            <div><h2>{feature.title}</h2></div>
                                            <div><p className={"padding-bottom-1"}>{feature.text}</p></div>
                                        </article>
                                        <div className={"align-center"}>
                                            <img className={feature.logoClass} alt={feature.alt}
                                                 src={feature.logoUrl}/>
                                        </div>
                                    </div>
                                    <div className={"flex justify-start align-end shield-container"}>
                                        <div>
                                            <div className={`shield ${feature.protocol}`}>{feature.protocol}</div>
                                        </div>
                                    </div>
                                </article>
                            </article>
                        </Link>
                    )}
            </section>
        </>
    );
};

export default FeatureMainLayout
