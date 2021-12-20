import React from "react";
import Button from "../project-elements/project.button.component";
import Link from "../project-elements/project.link.component";
import twitter from '../../images/icons/clicky-link.svg';
import discord from '../../images/icons/clicky-link.svg';
import telegram from '../../images/icons/clicky-link.svg';
import coingecko from '../../images/icons/clicky-link.svg';
import medium from '../../images/icons/clicky-link.svg';
import whitepaper from '../../images/icons/clicky-link.svg';
import docs from '../../images/icons/clicky-link.svg';
import github from '../../images/icons/clicky-link.svg';
import contract from '../../images/icons/clicky-link.svg';
import llama from '../../images/icons/clicky-link.svg';
import dune from '../../images/icons/clicky-link.svg';

type Props = {
    project_name: string;
    ticker: string;
    tag_name: string;
    website_url: string;
    webapp_url: string;
    discord_url: string;
    twitter_url: string;
    twitter: string;
    telegram_url: string;
    medium_url: string;
    contract_url: string;
    coingecko_url: string;
    llama_url: string;
    dune_url: string;
    whitepaper_url: string;
    github_url: string;
    docs_url: string;
    description: string;
    token_image_url: string;
    usdValue: object;
}

const ProjectDetail = ({usdValue, project_name, ticker, website_url, webapp_url, description, twitter_url, discord_url, telegram_url, medium_url, contract_url, coingecko_url, whitepaper_url, github_url, docs_url, token_image_url, llama_url, dune_url}: Props) => {
    return (
        <section className={"main-container"}>
            <article className={"main-content"}>
                <h2>{token_image_url && <img alt={project_name} src={token_image_url} className={"width-1"}/>} {project_name} {ticker && `(${ticker})`} </h2>
            {usdValue && <h3>{usdValue}</h3>}
                <article className={"flex"}>
                    <div className={"editorial-content"}>
                        <ul className={"list-none"}>
                            {website_url && <Link url={website_url} title="website"/>}
                            {webapp_url && <Link url={webapp_url} title="webapp"/>}
                        </ul>
                    </div>
                    <div></div>
                </article>
                <article className={"margin-top-2 flex flex-start"}>
                    {twitter_url && <Button url={twitter_url} title="twitter" icon={twitter}/>}
                    {discord_url && <Button url={discord_url} title="discord" icon={discord}/>}
                    {telegram_url && <Button url={telegram_url} title="telegram" icon={telegram}/>}
                    {medium_url && <Button url={medium_url} title="medium" icon={medium}/>}
                    {coingecko_url && <Button url={coingecko_url} title="coingecko" icon={coingecko}/>}
                    {github_url && <Button url={github_url} title="github" icon={github}/>}
                    {whitepaper_url && <Button url={whitepaper_url} title="whitepaper" icon={whitepaper}/>}
                    {docs_url && <Button url={docs_url} title="docs" icon={docs}/>}
                    {contract_url && <Button url={contract_url} title="contract" icon={contract}/>}
                </article>
                <article className={"flex"}>
                    <div className={"margin-top-2 margin-bottom-2"}><p className={"large"}>{description}</p></div>
                    <div></div>
                </article>
                <article className={"flex flex-start"}>
                    {docs_url && <Button url={llama_url} title="defi llama" icon={llama}/>}
                    {contract_url && <Button url={dune_url} title="dune" icon={dune}/>}
                </article>
            </article>
        </section>
    );
};

export default ProjectDetail;
