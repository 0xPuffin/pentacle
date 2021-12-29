import React, {useEffect} from "react";

const TwitterPhotos = ({photos}) => {
    let slideIndex = 1;

    const showDivs = (n) => {
        let i;
        let x = document.getElementsByClassName("tweet-img");
        if (!x.length) {
            return;
        }
        if (n > x.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = x.length;
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex - 1].style.display = "block";
    };

    const plusDivs = (n) => {
        showDivs((slideIndex += n));
    };

    useEffect(() => {
        showDivs(slideIndex);
    });

    return (
        <article>
            {photos.map(
                (u, i) =>
                    !!u && (
                        <img alt={"tweet image"} key={i} className="tweet-img" src={`${u}`}/>
                    )
            )}
            {photos && photos.length > 1 && (
                <button onClick={() => plusDivs(-1)}>
                    <span className="material-icons">chevron_left</span>
                </button>
            )}
            {photos && photos.length > 1 && (
                <button onClick={() => plusDivs(+1)}>
                    <span className="material-icons">chevron_right</span>
                </button>
            )}
        </article>
    );
};

const tweetIcon = ({value, icon}) => (
    <span><i className="material-icons">{icon}</i>
        {value}</span>
)

const Tweet = ({
                   user: {displayname, username, profileImageUrl},
                   media, content, date, url, likeCount, replyCount,
               }) => {
    return (

        <a href={url} target="_blank" rel="noopener noreferrer" className={"margin-bottom-1 text-link"}>
            <article className="editorial-content box feature dark link secondary box-padding margin-bottom-2">
                <img alt={`Twitter avatar ${username}`}
                     src={profileImageUrl}/>
                <p><strong>{displayname}</strong> | <span>@{username}</span></p>
                <div>{new Date(date).toLocaleDateString(window.navigator.language, {
                    timeZone: "UTC", month: "long", day: "numeric", year: "numeric",
                })}</div>
                <p dangerouslySetInnerHTML={{__html: content}}></p>
                {media && media.length && (
                    <TwitterPhotos photos={media.map(
                        ({thumbnailUrl, previewUrl, fullUrl, _type}) =>
                            _type.includes("Photo") && (thumbnailUrl || previewUrl || fullUrl))}/>
                )}
                <div>
                    {likeCount && tweetIcon({value: likeCount, icon: 'favorite_border'})}
                    {replyCount && tweetIcon({value: replyCount, icon: 'question_answer'})}
                </div>
            </article>
        </a>
    );
};

export default Tweet;
