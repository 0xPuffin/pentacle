import React from "react";

const TagDescription = ({tag_name, description}) => {
    return (<article className="p-card inverse">
            {/*TODO*/}
            <h3>{tag_name}Analytics</h3>
            <p className={"line-clamp-5"}>{description}Data-driven analysis of crypto projects</p>
        </article>);
};

export default TagDescription;
