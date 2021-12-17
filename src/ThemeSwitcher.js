import { useState, useEffect } from 'react';

import * as lightTheme from './theme.scss';
import * as darkTheme from './theme2.scss';


const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <div lightTheme={isLight} onClick={toggleTheme}>
      <button>Button</button>
    </div>
  );
};

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      window.localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light')
      window.localStorage.setItem('theme', 'light');
    }
  };
  
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');

    if (localTheme) {
      setTheme(localTheme);
    } else {
      window.localStorage.setItem('theme', 'light');
    }
  })

  return [theme, toggleTheme]
};

export function ToggleButton() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
      <div>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>
      </div>
  );
};

export default ToggleButton