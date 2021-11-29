import React from "react";
import Tag from "./tag.component";

const Tags = ({tags}) => {
    // console.log(tags)
    return (
            <div className={"flex flex-start"}>
                {tags.map((name, index) => (
                    <Tag
                        key={index}
                        {...name}
                    />
                    // onClick={() => projectContentDataUpdate(data[index])}/>
                ))}
            </div>
    );
};

export default Tags;
