import React from "react";
import { Route, Routes } from "react-router-dom";

import { About } from "./pages/about";
import { Terms } from "./pages/terms";
import { Main } from "./pages/main";

import EthEcosystemDefi from "./pages/eth-ecosystem/eth-ecosystem-defi";
import EthEcosystemRetail from "./pages/eth-ecosystem/eth-ecosystem-retail";
import SolEcosystem from "./pages/sol-ecosystem/sol-ecosystem";
import SolHackathon from "./pages/sol-ecosystem/sol-hackathon";
import { BadThingsPoly } from "./pages/bad-things/bad-things-poly";
import EthEcosystemLearn from "./pages/eth-ecosystem/eth-ecosystem-learn";
import EthEcosystemNft from "./pages/eth-ecosystem/eth-ecosystem-nft";
import { SearchProvider } from "./providers/search-provider";
import { TitleProvider } from "./providers/title-provider";
import { ProjectsAllPage } from "./pages/projects/projects";
import { ProjectsPage } from "./pages/ignition/projects.page";
import { CATEGORIES } from "./data/categories";
import { SECTIONS } from "./data/sections";
import EthEcosystemDev from "./pages/eth-ecosystem/eth-ecosystem-dev";

export const Router = () => {
  return (
    <SearchProvider>
      <TitleProvider>
        <Routes>
          <Route path="/" element={<Main />} />

          {CATEGORIES.map((category) => (
            <>
              <Route
                path={`/${category}`}
                key={category}
                element={<ProjectsAllPage />}
              />
            </>
          ))}
          {SECTIONS.map((section) => (
            <Route
              path={`/${section}`}
              key={section}
              element={<ProjectsAllPage />}
            />
          ))}

          <Route path="/solana" element={<SolEcosystem />} />
          <Route path="/ethereum" element={<EthEcosystemDefi />} />
          <Route path="/ethereum-retail" element={<EthEcosystemRetail />} />
          <Route path="/ethereum-learning" element={<EthEcosystemLearn />} />
          <Route path="/ethereum-nft" element={<EthEcosystemNft />} />
          <Route path="/ethereum-dev" element={<EthEcosystemDev />} />
          <Route path="/hackathon" element={<SolHackathon />} />
          <Route path="/bad-things" element={<BadThingsPoly />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/ignition" element={<ProjectsPage />} />
        </Routes>
      </TitleProvider>
    </SearchProvider>
  );
};
