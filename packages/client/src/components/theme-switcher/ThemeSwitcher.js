import React, { useState } from "react";
import { themeChange } from "theme-change";


const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('dark');
  return (
    <article className={"flex flex-start"}>
        <label data-set-theme={theme === 'dark' ? 'light' : 'dark'} className="cursor-pointer label">
          <i className={"material-icons"}>nightlight_round</i>
          <input type="checkbox" onClick={() => {
            setTheme(
              theme === 'dark' ? 'light' : 'dark'
            )
            themeChange(
              theme === 'dark' ? 'light' : 'dark'
            )
          }} className="toggle toggle-primary mx-3" />
          <i className={"material-icons"}>wb_sunny</i>
        </label>
      {/*<button className={"primary"} data-set-theme="dark"><i className={"material-icons"}>nightlight_round</i>*/}
      {/*</button>*/}
      {/*<button className={"primary"} data-set-theme="light"><i className={"material-icons"}>wb_sunny</i>*/}
      {/*</button>*/}
    </article>
  );
};

export default ThemeSwitcher;
