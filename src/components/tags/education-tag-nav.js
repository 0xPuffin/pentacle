import React from 'react';
// import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
// import Tags from './tags.component';

export const EducationTagNav = () => {

    return (<nav>
            <article className={"nav-content overflow-scroll"}>
                <Link to="/education-amm" className={"text-link padding-right-2"}>AMM</Link>
                <Link to="/education-divergence-loss" className={"text-link padding-right-2"}>Divergence loss</Link>
                <Link to="/education-hold" className={"text-link padding-right-2"}>Hold</Link>
                <Link to="/education-liquidity" className={"text-link padding-right-2"}>Liquidity</Link>
                <Link to="/education-stake" className={"text-link padding-right-2"}>Stake</Link>
                <Link to="/education-xyk" className={"text-link padding-right-2"}>xyk</Link>
            </article>
        </nav>
    );
}

