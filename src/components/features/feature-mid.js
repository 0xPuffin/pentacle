import React from "react"
import {features} from "../../data/featuresMid";
import {Link} from "react-router-dom";

const FeatureMidLayout = () => {

    return (<section className="flex flex-wrap">
            {features
                .map(feature => <Link className={"margin-bottom-1"} to={feature.link} key={feature.title}>
                        <article
                            className={"editorial-content box feature link secondary box-padding"}>
                            <div className={"flex column align-center align-space-between height-100 boxed"}>
                                <div>
                                    <div className={"material-icons"}>{feature.icon}</div>
                                </div>
                                <div className={"flex align-start"}><h2>{feature.title}</h2></div>
                                <div className={"flex justify-start align-end"}>
                                    <div className={"shield-container"}>
                                        <div className={`shield ${feature.protocol}`}>{feature.protocol}</div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </Link>
                )}
        </section>
    );
};

export default FeatureMidLayout
