import React from "react";

const ProjectLink = (props: any) => {

  const handleClick = () => {
    window.open(props.url);
  };

  return (
      <>
        {props && (
            <button className={"flex-center secondary margin-bottom-0-5"} onClick={handleClick}>
              <span>{props.title}</span><span className={"padding-left-0-5 material-icons"}>north_east</span>
            </button>
        )}
      </>
  );
};

export default ProjectLink;
