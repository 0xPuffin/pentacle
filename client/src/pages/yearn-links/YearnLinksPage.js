import React from 'react';
import Layout from "../../components/layouts/layout";

export const YearnLinksPage = () => {
    return (
        <Layout>
            <section>
                <article>
                    <h2>Products</h2>
                    <ul>
                        <li><a href={"https://beta.yearn.finance"} target={"_blank"} rel="noopener noreferrer">beta.yearn.finance – new vaults site</a></li>
                        <li><a href={"https://yearn.finance"} target={"_blank"} rel="noopener noreferrer">yearn.finance – vaults current site for a bit longer</a></li>
                        <li><a href={"https://yearn.fi"} target={"_blank"} rel="noopener noreferrer">yearn.fi – unofficial ui</a></li>
                    </ul>
                </article>
                <article>
                    <h2>Contribute</h2>
                    <ul>
                        <li><a href={"https://contribute.yearn.rocks"} target={"_blank"} rel="noopener noreferrer">Github open issues</a></li>
                        <li><a href={"https://github.com/search?q=org%3Ayearn+label%3Abounty&type=issues"} target={"_blank"} rel="noopener noreferrer">Bounties</a></li>
                        <li><a href={"https://www.notion.so/yearnfinance/Woofy-Quest-New-Contributors-031b438a593b4b1683959e56e76102a0"} target={"_blank"} rel="noopener noreferrer">New contributor registration</a></li>
                        <li><a href={"https://www.notion.so/yearnfinance/Contributors-bceb03566612483ca139f800fb5452ad"} target={"_blank"} rel="noopener noreferrer">Contributors wiki</a></li>
                        <li><a href={"https://contribute.yearn.rocks"} target={"_blank"} rel="noopener noreferrer">Pool of ideas</a></li>
                        <li><a href={"https://contribute.yearn.rocks"} target={"_blank"} rel="noopener noreferrer">Coordinape (for existing contributors)</a></li>
                    </ul>
                </article>
                <article>
                    <h2>Become a Yearn partner</h2>
                    <ul>
                        <li><a href={"https://yearnfinance.typeform.com/to/uP7xOJUN"} target={"_blank"} rel="noopener noreferrer">Ecosystem partners</a></li>
                    </ul>
                </article>

                <article>
                    <h2>Strategies</h2>
                    <ul>
                        <li><a href={"https://yearn.github.io/yearn-devdocs/getting-started/products/yvaults/vaults-and-strategies"} target={"_blank"} rel="noopener noreferrer">Vaults and strategies</a></li>
                        <li><a href={"https://github.com/yearn/yearn-vaults/blob/main/contracts/BaseStrategy.sol"} target={"_blank"} rel="noopener noreferrer">Base strategy</a></li>
                        <li><a href={"https://github.com/yearn/brownie-strategy-mix/getting-started/products/yvaults/vaults-and-strategies"} target={"_blank"} rel="noopener noreferrer">Brownie strategy mix</a></li>
                        <li><a href={"https://twitter.com/flashfish0x/status/1460246273488044036"} target={"_blank"} rel="noopener noreferrer">Thread on strategies and Yearn</a></li>
                        <li><a href={"https://docs.yearn.finance/yearn-finance/yvaults"} target={"_blank"} rel="noopener noreferrer">yVaults wiki</a></li>
                    </ul>
                </article>
                <article>
                    <h2>Docs</h2>
                    <ul>
                        <li><a href={"https://yearn.github.io/yearn-devdocs/"} target={"_blank"} rel="noopener noreferrer">Yearn dev docs</a></li>
                        <li><a href={"https://docs.yearn.finance/"} target={"_blank"} rel="noopener noreferrer">Yearn docs</a></li>
                        <li><a href={"https://www.notion.so/yearnfinance/Yearn-Finance-26d6c4210e3e405c9f02f84ba567a249/"} target={"_blank"} rel="noopener noreferrer">Yearn knowledgebase</a></li>
                        <li><a href={"https://yearn.substack.com/"} target={"_blank"} rel="noopener noreferrer">Yearn substack</a></li>
                    </ul>
                </article>
                <article>
                    <h2>Brand assets</h2>
                    <ul>
                        <li><a href={"https://github.com/yearn/yearn-assets"} target={"_blank"} rel="noopener noreferrer">Yearn assets</a></li>
                    </ul>
                </article>
            </section>
        </Layout>
    );
}
