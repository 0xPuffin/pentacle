import React from 'react';
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import ToggleButton from './ThemeSwitcher';

import Footer from "./components/footer";
import {Router} from "./Router";

const App = () => (
    <BrowserRouter>
        <ToggleButton/>
        <Router/>
        <Footer/>
    </BrowserRouter>
);

export default App;
