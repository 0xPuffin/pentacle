import React from "react";
import { Route, Routes } from "react-router";

import {About} from "./pages/about";
import {Terms} from "./pages/terms";
import {Main} from "./pages/main";
import EthEcosystemDefi from "./pages/eth-ecosystem/eth-ecosystem-defi";
import EthEcosystemDev from "./pages/eth-ecosystem/eth-ecosystem-dev";
import EthEcosystemRetail from "./pages/eth-ecosystem/eth-ecosystem-retail";
import SolEcosystem from "./pages/sol-ecosystem/sol-ecosystem";
import SolHackathon from "./pages/sol-ecosystem/sol-hackathon"
import {BadThings} from "./pages/bad-things";
import {DefiLearning} from "./pages/defilearning";
import EthEcosystemLearn from "./pages/eth-ecosystem/eth-ecosystem-learn";
import EthEcosystemNft from "./pages/eth-ecosystem/eth-ecosystem-nft";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/solana" element={<SolEcosystem/>}/>
            <Route path="/ethereum" element={<EthEcosystemDefi/>}/>
            <Route path="/ethereum-dev" element={<EthEcosystemDev/>}/>
            <Route path="/ethereum-retail" element={<EthEcosystemRetail/>}/>
            <Route path="/ethereum-learning" element={<EthEcosystemLearn/>}/>
            <Route path="/ethereum-nft" element={<EthEcosystemNft/>}/>
            <Route path="/hackathon" element={<SolHackathon/>}/>
            <Route path="/bad-things" element={<BadThings/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/terms" element={<Terms/>}/>
            <Route path="/defilearning" element={<DefiLearning/>}/>
        </Routes>
    );
}
