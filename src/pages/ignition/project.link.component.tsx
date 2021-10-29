import React from "react";

const Link = (props: any) => {

    return(
        <li>
            { props && <a href={props.url} className={"text-link"} target={"_blank"} rel="noopener noreferrer">{props.title}</a> }
        </li>
    )
};

export default Link
