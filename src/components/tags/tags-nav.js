import React from 'react';
// import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
// import Tags from './tags.component';

export const TagsNav = () => {

    // const [loading, setLoading] = useState(true);
    // const [tags, setTags] = useState([]);
    // console.log(tags)
    //
    // const fetchTags = async () => {
    //     setLoading(true)
    //     try {
    //         const response = await fetch("/tags")
    //         const res = await response.json()
    //         setLoading(false)
    //         setTags(res.data)
    //     } catch (error) {
    //         setLoading(false)
    //         console.log(error)
    //     }
    // }
    // useEffect(() => {
    //     fetchTags()
    // }, [])
    //
    // if (loading) {
    //     return (
    //         <nav className={"nav-content"}>
    //             <Link to={''}>Loading..</Link>
    //         </nav>
    //     )
    // }
    return (<nav>
            <article className={"nav-content overflow-scroll"}>
                 {/*<Tags tags={tags}/>*/}
                <Link to="/analytics" className={"text-link padding-right-2"}>Analytics</Link>
                <Link to="/buy-crypto" className={"text-link padding-right-2"}>Buy crypto</Link>
                <Link to="/centralised-exchange" className={"text-link padding-right-2"}>Centralised exchange</Link>
                <Link to="/decentralised-exchange" className={"text-link padding-right-2"}>Decentralised exchange</Link>
                <Link to="/insurance" className={"text-link padding-right-2"}>Insurance</Link>
                <Link to="/tool" className={"text-link padding-right-2"}>Tools</Link>
                <Link to="/yield" className={"text-link padding-right-2"}>Yield</Link>
            </article>
        </nav>
    );
}

