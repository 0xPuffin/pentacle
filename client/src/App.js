import React from 'react';
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/footer/Footer";
import {Router} from "./Router";

// const themes = {
//     light: 'pentacleui/src/scss/assets/styles/pentacle-light.scss',
//     dark: 'pentacleui/src/scss/assets/styles/pentacle-light.scss',
// };

const App = () => (
        <BrowserRouter>
            <Router/>
            <Footer/>
        </BrowserRouter>
);

export default App;
