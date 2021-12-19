import React from "react";
import { Route, Routes } from "react-router-dom";

import { About } from "./pages/about";
import { Terms } from "./pages/terms";
import { Main } from "./pages/main";
import EthEcosystemDefi from "./pages/eth-ecosystem/eth-ecosystem-defi";
import { EthDefiProtocolsPage } from "./pages/eth-defi-protocols/EthDefiProtocolsPage";
import EthEcosystemDev from "./pages/eth-ecosystem/eth-ecosystem-dev";
import EthEcosystemRetail from "./pages/eth-ecosystem/eth-ecosystem-retail";
import SolEcosystem from "./pages/sol-ecosystem/sol-ecosystem";
import SolHackathon from "./pages/sol-ecosystem/sol-hackathon";
import { BadThingsPoly } from "./pages/bad-things/bad-things-poly";
import EthEcosystemLearn from "./pages/eth-ecosystem/eth-ecosystem-learn";
import EthEcosystemNft from "./pages/eth-ecosystem/eth-ecosystem-nft";
import { ProjectsPage } from "./pages/ignition/projects.page";
import { TweetPage } from "./pages/tweet/tweet.page";
import { EthDecentralisedExchange } from "./pages/eth-decentralised-exchange/EthDecentralisedExchange";
import { EthDefiToolsPage } from "./pages/eth-defi-tools/EthDefiToolsPage";
import { EthDefiInsurancePage } from "./pages/eth-defi-insurance/EthDefiInsurancePage";
import {AnalyticsPage} from "./pages/analytics/Analytics";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/solana" element={<SolEcosystem />} />
      <Route path="/ethereum" element={<EthEcosystemDefi />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
      <Route path="/yield" element={<EthDefiProtocolsPage />} />
      <Route path="/tool" element={<EthDefiToolsPage />} />
      <Route path="/decentralised-exchange" element={<EthDecentralisedExchange />} />
      <Route path="/insurance" element={<EthDefiInsurancePage />} />
      <Route path="/developer" element={<EthEcosystemDev />} />
      <Route path="/ethereum-retail" element={<EthEcosystemRetail />} />
      <Route path="/learning" element={<EthEcosystemLearn />} />
      <Route path="/nft" element={<EthEcosystemNft />} />
      <Route path="/hackathon" element={<SolHackathon />} />
      <Route path="/bad-things" element={<BadThingsPoly />} />
      <Route path="/about" element={<About />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/ignition" element={<ProjectsPage />} />
      <Route path="/tweet" element={<TweetPage />} />
    </Routes>
  );
};
