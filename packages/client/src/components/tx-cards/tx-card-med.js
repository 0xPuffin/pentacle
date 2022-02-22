import React, { useEffect, useState } from "react";

const TxCardMed = ({ jsonUrl, hackerAddress }) => {
  const [chat, setChat] = useState([]);
  const [filteredChat, setFilteredChat] = useState([]);
  const [hackerOnly, setHackerOnly] = useState(false);
  const [hackerMessageLen, setHackerMessageLen] = useState(0);

  useEffect(() => {
    const getData = async () => {
      if (!chat.length) {
        const json = await fetch(jsonUrl)
          .then((res) => res.json())
          .then((res) => res.reverse())
          .then((res) =>
            res.map((item) => {
              return {
                ...item,
                timestamp: new Date((item.timestamp || 1628695418) * 1000),
              };
            })
          );
        setChat(json);
        const len = json.filter((c) => c.address === hackerAddress).length;
        setHackerMessageLen(len);
        setFilteredChat(json);
      }
    };
    getData();
  }, [chat, hackerAddress, jsonUrl]);

  useEffect(() => {
    setFilteredChat(
      hackerOnly ? chat.filter((c) => c.address === hackerAddress) : chat
    );
  }, [chat, hackerAddress, hackerOnly]);

  return (
    <article classame={"box feature light box-padding margin-top-1"}>
      <div className={"field"}>
        {!!hackerMessageLen && (
          <label htmlFor="hacker">
            <input
              type="checkbox"
              id="hacker"
              onClick={() => {
                setHackerOnly(!hackerOnly);
              }}
            />{" "}
            <span className={"haxorgreen"}>Hacker messages</span>
          </label>
        )}
      </div>
      {filteredChat.map(
        (item, i) =>
          item.message !== "[2m(unintelligible)[0m" && (
            <a key={i} href={`https://etherscan.io/tx/${item.hash}`} target={"_blank"} rel="noopener noreferrer">
              <div className="box feature light link box-padding margin-bottom-1">
                <div
                  className={
                    item.address === hackerAddress ? "haxorgreen" : "info"
                  }
                >
                  {<p className={"padding-y-0-5"}>{item.message}</p>}
                  <div className={"txt-opacity-50"}>{item.address}</div>
                  <div>{item.timestamp.toLocaleString()}</div>
                </div>
              </div>
            </a>
          )
      )}
    </article>
  );
};

export default TxCardMed;
