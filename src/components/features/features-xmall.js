import React from "react"
import {features} from "../../data/featuresXsmall";
import {Link} from "react-router-dom";


const isExternal = url => url.startsWith('https')

const FeaturesXsmlLayout = () => {

    return (
        <section className="flex flex-wrap">
            {features
                .map(feature => isExternal(feature.link) ?
                    <a className={"margin-bottom-1 text-link"} href={feature.link} target={"_blank"} rel="noopener noreferrer"
                       key={feature.title}>
                        <article className={"editorial-content box feature dark link tertiary box-padding"}>
                            <div className={"flex column align-center align-space-between height-100 boxed"}>
                                <h3 className={"boxed"}>{feature.title}</h3>
                                <p>{feature.text}</p>
                                <div className={"shield-container align-items-center"}>
                                    <span className={`shield ${feature.tag}`}>{feature.tag}</span>
                                    <span className={`material-icons ${feature.icon}`}>{feature.icon}</span>
                                </div>
                            </div>
                        </article>
                    </a>
                    :
                    <Link className={"margin-bottom-1 text-link"} to={feature.link} key={feature.title}>
                        <article className={"editorial-content box feature dark link tertiary box-padding"}>
                            <div className={"flex column align-center align-space-between height-100 boxed"}>
                                <h3 className={"boxed"}>{feature.title}</h3>
                                <p>{feature.text}</p>
                                <div className={"shield-container align-items-center"}>
                                    <span className={`shield ${feature.tag}`}>{feature.tag}</span>
                                    <span className={`material-icons ${feature.icon}`}>{feature.icon}</span>
                                </div>
                            </div>
                        </article>
                    </Link>
                )}
        </section>
    );
};

export default FeaturesXsmlLayout
