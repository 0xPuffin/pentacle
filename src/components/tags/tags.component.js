import React from "react";
import Tag from "./tag.component";

const Tags = ({tags}) => {
    // console.log(tags)
    return (
            <div className={"flex flex-start"}>
                {tags.map((tag_name, index) => (
                    <Tag
                        key={index}
                        {...tag_name}
                    />
                    // onClick={() => projectContentDataUpdate(data[index])}/>
                ))}
            </div>
    );
};

export default Tags;
