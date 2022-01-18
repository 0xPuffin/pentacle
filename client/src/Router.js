import React from "react";
import { Route, Routes } from "react-router-dom";

import { About } from "./pages/about";
import { Terms } from "./pages/terms";
import { Main } from "./pages/main";

import { Articles } from "./pages/articles/articles";
import { Education } from "./pages/education/education";
import { Events } from "./pages/events/events";

import { Projects } from "./pages/projects/projects";
// import { Projects } from "./pages/projects/projects";
// import { Projects } from "./pages/projects/projects";
// import { Projects } from "./pages/projects/projects";
// import { Projects } from "./pages/projects/projects";
// import { Projects } from "./pages/projects/projects";
// import { Projects } from "./pages/projects/projects";
// import { Projects } from "./pages/projects/projects";
// import { Projects } from "./pages/projects/projects";
// import { Projects } from "./pages/projects/projects";

import EthEcosystemDefi from "./pages/eth-ecosystem/eth-ecosystem-defi";
import EthEcosystemRetail from "./pages/eth-ecosystem/eth-ecosystem-retail";
import SolEcosystem from "./pages/sol-ecosystem/sol-ecosystem";
import SolHackathon from "./pages/sol-ecosystem/sol-hackathon";
import { BadThingsPoly } from "./pages/bad-things/bad-things-poly";
import EthEcosystemLearn from "./pages/eth-ecosystem/eth-ecosystem-learn";
import EthEcosystemNft from "./pages/eth-ecosystem/eth-ecosystem-nft";
import { TweetPage } from "./pages/tweet/tweet.page";
import { ProjectsPage } from "./pages/ignition/projects.page";


export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/education" element={<Education />} />
      <Route path="/events" element={<Events />} />
      <Route path="/projects" element={<Projects />} />

      <Route path="/solana" element={<SolEcosystem />} />
      <Route path="/ethereum" element={<EthEcosystemDefi />} />
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
