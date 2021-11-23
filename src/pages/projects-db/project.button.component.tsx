import React, {useState} from "react";

const Button = (props: any) => {

    const handleClick = () => {
        window.open(props.url);
    };

    return(
        <div>
            { props && <button className={"project-button flex-center"} onClick={handleClick}><img src={props.icon}></img><span>{props.title}</span></button> }
        </div>
    )
};

export default Button
