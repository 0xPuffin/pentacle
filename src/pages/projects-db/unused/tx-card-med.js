import React, {useState} from "react"
import data from "./data.json";

const TxCardMed = () => {
    console.log(data)
    // const [chat, setChat] = useState([]);
    const [filteredChat, setFilteredChat] = useState([]);
    const [hackerOnly, setHackerOnly] = useState(false);

    return (
        <article classame={"box feature light box-padding margin-top-1"}>
            <div className={"field"}>
                <label htmlFor="hacker">
                    <input type="checkbox" id="hacker" onClick={() => {
                        setHackerOnly(!hackerOnly)
                    }}/> <span className={"haxorgreen"}>Hacker messages</span></label>
            </div>
            {data
                .map((item, i) => <a key={i}
                                     href={`https://etherscan.io/tx/${item.hash}`} target={"_blank"}
                                     rel="noopener noreferrer">
                        <div className="box feature light link box-padding margin-bottom-1">
                            <div className={item.address === '0xC8a65Fadf0e0dDAf421F28FEAb69Bf6E2E589963' ? 'haxorgreen' : 'info'}>
                                <p className={"padding-y-0-5"}>{item.message === '[2m(unintelligible)[0m' ? '(unintelligible)' : item.message}</p>
                                <div className={"txt-opacity-50"}>{item.address}</div>
                                <div>{item.timestamp.toLocaleString()}</div>
                            </div>
                        </div>
                    </a>
                )}
        </article>
    );
};

export default TxCardMed
