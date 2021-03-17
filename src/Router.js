import React from "react";
import { Route, Routes } from "react-router";

import {About} from "./pages/about";
import EthEcosystem from "./pages/eth-ecosystem/eth-ecosystem";
import {Creator} from "./pages/creator";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<EthEcosystem/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="creator" element={<Creator/>}/>
        </Routes>
    );
}
