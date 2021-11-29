import React from 'react';
import './App.scss';
import {BrowserRouter} from "react-router-dom";

import Footer from "./components/footer";
import {Router} from "./Router";

const App = () => (
    <BrowserRouter>
        <Router/>
        <Footer/>
    </BrowserRouter>
);

export default App;
