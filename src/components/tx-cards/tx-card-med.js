import React, {useEffect, useState} from "react"

const TxCardMed = () => {

    const [chat, setChat] = useState([]);
    const [filteredChat, setFilteredChat] = useState([]);
    const [hackerOnly, setHackerOnly] = useState(false);

    useEffect(() => {
        const getData = async () => {

          if (!chat.length) {

            const json = await fetch('https://raw.githubusercontent.com/penta-fun/polynetwork-hacker-chat/main/data.json')
                .then(res => res.json())
                .then(res => res.reverse())
                .then(res => res.map(item => {
                    return {
                        ...item,
                        timestamp: new Date((item.timestamp || 1628695418) * 1000)
                    }
                }))
            setChat(json);
          }
          setFilteredChat(chat);
        }
        getData();
    }, [chat]);

    useEffect(() => {
        setFilteredChat(hackerOnly ? chat.filter(c => c.address === '0xC8a65Fadf0e0dDAf421F28FEAb69Bf6E2E589963') : chat);
    }, [chat, hackerOnly])

    return (
        <section className={"margin-top-1"}>
            <article className={"max-width-50 margin-auto"}>
                <div className={"field"}>
                    <label htmlFor="hacker">
                    <input type="checkbox" id="hacker" onClick={() => {
                        setHackerOnly(!hackerOnly)
                    }}/> <span className={"haxorgreen"}>Hacker messages</span></label>
                </div>
                {filteredChat
                    .map((item, i) => <a key={i}
                                         href={`https://etherscan.io/tx/${item.hash}`} target={"_blank"}
                                         rel="noopener noreferrer">
                            <div className="box feature dark link box-padding padding-bottom-0-5">
                                <div
                                    className={item.address === '0xC8a65Fadf0e0dDAf421F28FEAb69Bf6E2E589963' ? 'haxorgreen' : 'info'}>
                                    <p>{item.message === '[2m(unintelligible)[0m' ? '(unintelligible)' : item.message}</p>
                                    <span className={"txt-opacity-50"}>{item.address}</span>


                                    <br/>
                                    <span>{item.timestamp.toLocaleString()}</span>
                                </div>
                            </div>
                        </a>
                    )}
            </article>
        </section>
    );
};

export default TxCardMed
