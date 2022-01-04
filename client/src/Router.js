import React from "react";
import {Route, Routes} from "react-router-dom";

import {About} from "./pages/about";
import {Terms} from "./pages/terms";
import {Main} from "./pages/main";

import {Education} from "./pages/education/Education";
import {EducationAmmPage} from "./pages/education/EducationAmmPage";
import {EducationDivergenceLossPage} from "./pages/education/EducationDivergenceLossPage";
import {EducationHoldPage} from "./pages/education/EducationHoldPage";
import {EducationStakePage} from "./pages/education/EducationStakePage";
import {EducationProvideLiquidityPage} from "./pages/education/EducationProvideLiquidityPage";
import {EducationXykPage} from "./pages/education/EducationXykPage";

import {ProjectsPage} from "./pages/ignition/projects.page";
import {AnalyticsPage} from "./pages/projects/Analytics";
import {BuyCryptoPage} from "./pages/projects/BuyCrypto";
import {CentralisedExchangePage} from "./pages/projects/CentralisedExchange";
import {EthDecentralisedExchange} from "./pages/projects/EthDecentralisedExchange";
import {EthDefiToolsPage} from "./pages/projects/EthDefiToolsPage";
import {EthDefiInsurancePage} from "./pages/projects/EthDefiInsurancePage";

import EthEcosystemDefi from "./pages/eth-ecosystem/eth-ecosystem-defi";
import {EthDefiProtocolsPage} from "./pages/projects/EthDefiProtocolsPage";
import EthEcosystemDev from "./pages/eth-ecosystem/eth-ecosystem-dev";
import EthEcosystemRetail from "./pages/eth-ecosystem/eth-ecosystem-retail";
import SolEcosystem from "./pages/sol-ecosystem/sol-ecosystem";
import SolHackathon from "./pages/sol-ecosystem/sol-hackathon";
import {BadThingsPoly} from "./pages/bad-things/bad-things-poly";
import EthEcosystemLearn from "./pages/eth-ecosystem/eth-ecosystem-learn";
import EthEcosystemNft from "./pages/eth-ecosystem/eth-ecosystem-nft";
import {TweetPage} from "./pages/tweet/tweet.page";
import {EventsPage} from "./pages/events/EventsPage";
import {ProjectsAllPage} from "./pages/projects/Projects";


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/education" element={<Education/>}/>
            <Route path="/education/amm" element={<EducationAmmPage/>}/>
            <Route path="/education/divergence-loss" element={<EducationDivergenceLossPage/>}/>
            <Route path="/education/hold" element={<EducationHoldPage/>}/>
            <Route path="/education/stake" element={<EducationStakePage/>}/>
            <Route path="/education/xyk" element={<EducationXykPage/>}/>
            <Route path="/education/provide-liquidity" element={<EducationProvideLiquidityPage/>}/>

            <Route path="/events" element={<EventsPage/>}/>

            <Route path="/projects" element={<ProjectsAllPage/>}/>
            <Route path="/projects/analytics" element={<AnalyticsPage/>}/>
            <Route path="/projects/buy-crypto" element={<BuyCryptoPage/>}/>
            <Route path="/projects/centralised-exchange" element={<CentralisedExchangePage/>}/>
            <Route path="/projects/yield" element={<EthDefiProtocolsPage/>}/>
            <Route path="/projects/tool" element={<EthDefiToolsPage/>}/>
            <Route path="/projects/decentralised-exchange" element={<EthDecentralisedExchange/>}/>
            <Route path="/projects/insurance" element={<EthDefiInsurancePage/>}/>
            <Route path="/projects/developer" element={<EthEcosystemDev/>}/>

            <Route path="/solana" element={<SolEcosystem/>}/>
            <Route path="/ethereum" element={<EthEcosystemDefi/>}/>
            <Route path="/ethereum-retail" element={<EthEcosystemRetail/>}/>
            <Route path="/learning" element={<EthEcosystemLearn/>}/>
            <Route path="/nft" element={<EthEcosystemNft/>}/>
            <Route path="/hackathon" element={<SolHackathon/>}/>
            <Route path="/bad-things" element={<BadThingsPoly/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/terms" element={<Terms/>}/>
            <Route path="/ignition" element={<ProjectsPage/>}/>
            <Route path="/tweet" element={<TweetPage/>}/>
        </Routes>
    );
};
