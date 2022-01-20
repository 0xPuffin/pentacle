import React from "react";

const ProjectButton = (props: any) => {
  const handleClick = () => {
    window.open(props.url);
  };

  return (
    <>
      {props && (
        <button className={"project-button flex-center"} onClick={handleClick}>
          <img alt={props.icon} src={props.icon} />
          <span>{props.title}</span>
        </button>
      )}
    </>
  );
};

export default ProjectButton;
