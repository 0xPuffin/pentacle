import React, {useState} from "react";
import {Link} from "react-router-dom";

const Tag = (props) => {
    return (
        <Link to={''} className={"text-link padding-right-1"}>{props.name}</Link>
    );
};

export default Tag;