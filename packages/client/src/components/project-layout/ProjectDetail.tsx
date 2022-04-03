import React from "react";
import Button from "../project-elements/ProjectButton";

type Props = {
    project_name: string; ticker: string; tag_name: string; website_url: string; webapp_url: string; discord_url: string; twitter_url: string; twitter: string; telegram_url: string; medium_url: string; contract_url: string; coingecko_url: string; llama_url: string; dune_url: string; whitepaper_url: string; github_url: string; docs_url: string; description: string; token_image_url: string; usdValue: string; tag1: string; tag2: string; tag3: string; tag4: string;
};

const ProjectDetail = ({
                           usdValue,
                           project_name,
                           ticker,
                           website_url,
                           webapp_url,
                           description,
                           twitter_url,
                           discord_url,
                           telegram_url,
                           medium_url,
                           contract_url,
                           coingecko_url,
                           whitepaper_url,
                           github_url,
                           docs_url,
                           token_image_url,
                           llama_url,
                           dune_url,
                           tag1,
                           tag2,
                           tag3,
                           tag4
                       }: Props) => {
    const analyticsLinks = llama_url || dune_url || coingecko_url
    const socialLinks = twitter_url || discord_url || telegram_url || medium_url
    const devLinks = github_url || whitepaper_url || docs_url || contract_url
    const tags = tag1 || tag2 || tag3 || tag4

    return (<section className={"main-content-wide margin-top-1"}>
        <div className={"main-content"}>
            <article className={"flex flex-start flex-mobile padding-top-2 margin-bottom-1"}>
                <h1 className={"body-text"}>{token_image_url && (
                    <img alt={project_name} src={token_image_url} className={"width-1"}/>)}{" "}
                    {project_name} {ticker && `(${ticker})`}{" "}
                </h1>
                {usdValue && <p className={"padding-left-0-75 padding-top-1"}>{usdValue.toLocaleString()}</p>}
            </article>
            <article className={"flex"}>
                <div className={"flex flex-start flex-mobile"}>
                    {website_url && <Button url={website_url} title="website"/>}
                    {webapp_url && <Button url={webapp_url} title="webapp"/>}
                </div>
            </article>
            <article className={"flex"}>
                <div className={"margin-top-1 readability-max-width"}>
                    <p className={"large"}>{description}</p>
                </div>
            </article>
            {socialLinks && (<article>
                <h3>social</h3>
                <div className={"flex flex-start flex-mobile flex-wrap"}>
                    {twitter_url && (<Button url={twitter_url} title="twitter"/>)}
                    {discord_url && (<Button url={discord_url} title="discord"/>)}
                    {telegram_url && (<Button url={telegram_url} title="telegram"/>)}
                    {medium_url && (<Button url={medium_url} title="medium"/>)}
                </div>
            </article>)}
            {analyticsLinks && (<article>
                <h3>analytics</h3>
                <div className={"flex flex-start flex-mobile"}>
                    {coingecko_url && (<Button url={coingecko_url} title="coingecko"/>)}
                    {llama_url && (<Button url={llama_url} title="defi llama"/>)}
                    {dune_url && <Button url={dune_url} title="dune"/>}
                </div>
            </article>)}
            {devLinks && (<article>
                <h3>technical</h3>
                <div className={"flex flex-start flex-mobile flex-wrap"}>
                    {github_url && (<Button url={github_url} title="github"/>)}
                    {whitepaper_url && (<Button url={whitepaper_url} title="whitepaper"/>)}
                    {docs_url && <Button url={docs_url} title="docs"/>}
                    {contract_url && (<Button url={contract_url} title="contract"/>)}
                </div>
            </article>)}
            {tags && (<article>
                <h3>tags</h3>
                <div className={"flex flex-start flex-mobile flex-wrap"}>
                    {tag1 && (<Button url={tag1} title={tag1}/>)}
                    {tag2 && (<Button url={tag2} title={tag2}/>)}
                    {tag3 && <Button url={tag3} title={tag3}/>}
                    {tag4 && (<Button url={tag4} title={tag4}/>)}
                </div>
            </article>)}
        </div>
    </section>);
};

export default ProjectDetail;
