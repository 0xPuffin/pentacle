import React from "react"
import {Link} from "react-router-dom";
import {useThemeSwitcher} from 'react-css-theme-switcher';

const Header = () => {
    const {switcher, themes, currentTheme, status} = useThemeSwitcher();
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    if (status === 'loading') {
        return <div>Loading styles...</div>;
    }

    const toggleDarkMode = () => {
        setIsDarkMode(previous => {
            switcher({theme: previous ? themes.light : themes.dark});
            return !previous;
        });
    };

    return (<header className={"p-header"}>
        <div className="header-content flex justify-end align-items-center">
            <div><Link to="/"><img alt="Pentacle logo" className={"logo"} src={"pentacle-logo-LH.svg"}/></Link></div>
            <div>In your quest for knowledge, a talisman of protection</div>
        </div>
        <div>
            <button onClick={toggleDarkMode}>{currentTheme}</button>
        </div>
    </header>);
}

export default Header




