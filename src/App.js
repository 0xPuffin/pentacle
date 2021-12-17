import React from 'react';
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/footer";
import {Router} from "./Router";
import {ThemeSwitcherProvider} from "react-css-theme-switcher/src/index";

const themes = {
    light: 'pentacleui/src/scss/assets/styles/pentacle-light.scss',
    dark: 'pentacleui/src/scss/assets/styles/pentacle-light.scss',
};

const App = () => (
    <ThemeSwitcherProvider defaultTheme="dark" themeMap={themes}>
        <BrowserRouter>
            <Router/>
            <Footer/>
        </BrowserRouter>
    </ThemeSwitcherProvider>
);

export default App;
