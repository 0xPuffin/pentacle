import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Tags from "./tags.component";

export const TagsNav = () => {

    const [loading, setLoading] = useState(true);
    const [tags, setTags] = useState([]);
    console.log(tags)

    const fetchTags = async () => {
        setLoading(true)
        try {
            const response = await fetch("/tags")
            const res = await response.json()
            setLoading(false)
            setTags(res.data)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    useEffect(() => {
        fetchTags()
    }, [])

    if (loading) {
        return (
            <nav className={"nav-content"}>
                <Link to={''}>Loading...</Link>
            </nav>
        )
    }
    return (<nav>
            <article className={"nav-content overflow-scroll"}>
                {/*<Tags tags={tags}/>*/}
                <Link to="/eth-defi-protocols" className={"text-link padding-right-1"}>DeFi Protocols</Link>
                <Link to="/eth-decentralised-exchanges" className={"text-link padding-right-1"}>Decentralised exchanges</Link>
                <Link to="/eth-defi-tools" className={"text-link padding-right-1"}>DeFi tools</Link>
                <Link to="/eth-defi-insurance" className={"text-link padding-right-1"}>DeFi insurance</Link>
            </article>
        </nav>
    );
}

