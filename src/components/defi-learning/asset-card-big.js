import React from "react"

const AssetCardBig = (props) => {
        return (
            <section className="flex-group margin-top-1">
                <article className="editorial-content box feature link large align-center padding-1">
                    <h3>{props.name}</h3>
                    <h4>{props.img}</h4>
                </article>
            </section>
        )
}

export default AssetCardBig