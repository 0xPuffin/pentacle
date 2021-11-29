import React from "react";
import Button from "../project-elements/project.button.component";
import Link from "../project-elements/project.link.component";
// import twitter from '../../images/twitter-logo-blue.svg';
import twitter from '../../images/twitter-logo-blue.svg';

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
    whitepaper_url: string;
    github_url: string;
    docs_url: string;
    description: string;
    token_image_url: string;
}

const ProjectDetail = ({project_name, ticker, tag_name, website_url, webapp_url, description, twitter_url, discord_url, telegram_url, medium_url, contract_url, coingecko_url, whitepaper_url, github_url, docs_url, token_image_url}: Props) => {

    return (
        <section className={"main-container"}>
            <article className={"main-content"}>
                <h2>{token_image_url && <img alt={project_name} src={token_image_url} className={"width-1"}/>} {project_name} ({ticker})</h2>
                <article className={"flex"}>
                    <div className={"editorial-content"}>
                        <ul className={"list-none"}>
                            {website_url && <Link url={website_url} title="website"/>}
                            {webapp_url && <Link url={webapp_url} title="webapp"/>}
                            {/*{tag_name && <Link url={tag_name} title={tag_name}/>}*/}
                        </ul>
                    </div>
                    <div></div>
                </article>
                <article className={"margin-top-2 flex flex-start"}>
                    {twitter_url && <Button url={twitter_url} title="twitter" icon={twitter}/>}
                    {discord_url && <Button url={discord_url} title="discord" icon={twitter}/>}
                    {telegram_url && <Button url={telegram_url} title="telegram" icon={twitter}/>}
                    {medium_url && <Button url={medium_url} title="medium" icon={twitter}/>}
                    {contract_url && <Button url={contract_url} title="contract" icon={twitter}/>}
                    {coingecko_url && <Button url={coingecko_url} title="coingecko" icon={twitter}/>}
                    {whitepaper_url && <Button url={whitepaper_url} title="whitepaper" icon={twitter}/>}
                    {github_url && <Button url={github_url} title="github" icon={twitter}/>}
                    {docs_url && <Button url={docs_url} title="docs" icon={twitter}/>}
                </article>
                <article className={"flex"}>
                    <div className={"margin-top-2 margin-bottom-2"}><p>{description}</p></div>
                    <div></div>
                </article>
            </article>
        </section>
    );
};

export default ProjectDetail;
