import React, { useState } from "react";
import { themeChange } from "theme-change";


const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('dark');
  return (
    <article className={"align-right"}>
      <div className="form-control">
        <label data-set-theme={theme === 'dark' ? 'light' : 'dark'} className="cursor-pointer label">
          <i className={"material-icons text-white"}>nightlight_round</i>
          <input type="checkbox" onClick={() => {
            setTheme(
              theme === 'dark' ? 'light' : 'dark'
            )
            themeChange(
              theme === 'dark' ? 'light' : 'dark'
            )
          }} className="toggle toggle-primary mx-3" />
          <i className={"material-icons text-white"}>wb_sunny</i>
        </label>
      </div>
    </article>
  );
};

export default ThemeSwitcher;
