import React from "react";

const TagDescription = ({tag_name, description}) => {
    return (<article className="p-card">
            {/*TODO*/}
            <h3>{tag_name} tag name</h3>
            <p className={"line-clamp-5"}>{description} 0x is a protocol that facilitates the peer-to-peer
                exchange of Ethereum-based assets. The protocol serves as an open</p>
        </article>);
};

export default TagDescription;
