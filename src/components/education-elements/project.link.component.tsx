import React from "react";

const Link = (props: any) => {

    return(
        <li className={"inline-block margin-right-1"}>
            { props && <a href={props.url} className={"text-link underline"} target={"_blank"} rel="noopener noreferrer">{props.title}</a> }
        </li>
    )
};

export default Link
