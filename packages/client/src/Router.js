import React from "react";
import { Route, Routes } from "react-router-dom";

import { SearchProvider } from "./providers/search-provider";
import { TitleProvider } from "./providers/title-provider";

import { About } from "./pages/about";
import { Terms } from "./pages/terms";
import { Main } from "./pages/main";

import { EducationPage } from "./pages/education/education";
import { EventsPage } from "./pages/events/events";
import { ProjectsPage } from "./pages/projects/projects";
import { ArticlesPage } from "./pages/articles/articles";

import EthEcosystemDefi from "./pages/eth-ecosystem/eth-ecosystem-defi";
import EthEcosystemRetail from "./pages/eth-ecosystem/eth-ecosystem-retail";
import SolEcosystem from "./pages/sol-ecosystem/sol-ecosystem";
import SolHackathon from "./pages/sol-ecosystem/sol-hackathon";

import { BadThingsPoly } from "./pages/bad-things/bad-things-poly";
import EthEcosystemLearn from "./pages/eth-ecosystem/eth-ecosystem-learn";
import EthEcosystemNft from "./pages/eth-ecosystem/eth-ecosystem-nft";
import { IgnitionProjectsPage } from "./pages/ignition/projects.page";
import EthEcosystemDev from "./pages/eth-ecosystem/eth-ecosystem-dev";

export const Router = () => {
  return (
    <SearchProvider>
      <TitleProvider>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path={`/projects`} element={<ProjectsPage />} />
          <Route path={`/projects/:category`} element={<ProjectsPage />} />
          <Route path={`/education`} element={<EducationPage />} />
          <Route path={`/education/:category`} element={<EducationPage />} />
          <Route path={`/events`} element={<EventsPage />} />
          <Route path={`/events/:category`} element={<EventsPage />} />
          <Route path={`/articles`} element={<ArticlesPage />} />
          <Route path={`/articles/:category`} element={<ArticlesPage />} />

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
          <Route path="/ignition" element={<IgnitionProjectsPage />} />
        </Routes>
      </TitleProvider>
    </SearchProvider>
  );
};
