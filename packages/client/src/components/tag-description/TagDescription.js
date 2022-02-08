import React from "react";

const TagDescription = ({ tag_name, description }) => {
  return (
    <article className="carousel-item w-56">
        <div className={"border-2 border-p-purple rounded-2xl p-4 bg-p-purple mr-2"}>
      {/*TODO*/}
      <h3>{tag_name} tag name</h3>
      <p className={"length-300 text-white"}>{description} 0x is a protocol that facilitates the peer-to-peer exchange of Ethereum-based assets. The protocol serves as an open</p>
        </div>
    </article>
  );
};

export default TagDescription;
