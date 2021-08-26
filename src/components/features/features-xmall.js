import React from "react"
import {features} from "../../data/featuresXsmall";
import {Link} from "react-router-dom";


const isExternal = url => url.startsWith('https')

const FeaturesXsmlLayout = () => {

    return (
        <section className="flex flex-wrap">
            {features
                .map(feature => isExternal(feature.link) ?
                    <a className={"margin-bottom-1"} href={feature.link} target={"_blank"} rel="noopener noreferrer"
                       key={feature.title}>
                        <article className={"editorial-content box feature link tertiary box-padding"}>
                            <div className={"flex column align-center align-space-between height-100 boxed"}>
                                <h3>{feature.title}</h3>
                                <p>{feature.text}</p>
                                <span className={"shield-container"}> <span
                                    className={`shield ${feature.tag}`}>{feature.tag}</span>
                                <span className={`material-icons small ${feature.icon}`}>{feature.icon}</span>
                                </span>

                            </div>
                        </article>
                    </a>
                    :
                    <Link className={"margin-bottom-1"} to={feature.link} key={feature.title}>
                        <article className={"editorial-content box feature link tertiary box-padding"}>
                            <div className={"flex column align-center align-space-between height-100 boxed"}>
                                <h3>{feature.title}</h3>
                                <p>{feature.text}</p>
                                <span className={"shield-container"}> <span
                                    className={`shield ${feature.tag}`}>{feature.tag}</span>
                                    <span className={`material-icons small ${feature.icon}`}>{feature.icon}</span>
                                </span>

                            </div>
                        </article>
                    </Link>
                )}
        </section>
    );
};

export default FeaturesXsmlLayout
