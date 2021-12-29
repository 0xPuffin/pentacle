import React from "react";
import {Link} from "react-router-dom";

const Tag = (props) => {
    return (
        <Link to={`/projects/${props.name}`} className={"text-link padding-right-1"}>{props.name}</Link>
    );
};

export default Tag;
