import React from "react"
import {features} from "../../data/features";

const FeaturesSmlLayout = () => {

    return (
        <>
            <section className="flex flex-wrap">
                {features
                    .map(feature => <a className={"margin-bottom-1"} href={feature.link} target={"_blank"}
                                       rel="noopener noreferrer" key={feature.title}>
                            <article className={"editorial-content box feature link primary box-padding"}>
                                <div className={"flex column align-center align-space-between height-100 boxed"}>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.text}</p>
                                    <div><img src={feature.imageUrl} alt={feature.imageAlt}/></div>
                                    <div className={"flex flex-center"}>
                                        <button className={"primary-gradient width-100"}>{feature.buttonText}</button>
                                    </div>
                                </div>
                            </article>
                        </a>
                    )}
            </section>
        </>
    );
};

export default FeaturesSmlLayout
