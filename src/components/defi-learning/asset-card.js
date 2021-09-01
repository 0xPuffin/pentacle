import React from "react"


const AssetCard = ({name, onClick}) => {
        return (
        <div>
            <section className="flex-group margin-top-1"
            onClick={(onClick)
            }>
                <article className="editorial-content box feature dark link large align-center padding-1">
                    <h3>{name}</h3>
                </article>
            </section>
        </div>
        )
}

export default AssetCard
