import React, { useEffect } from "react";
import { themeChange } from "theme-change";


const ThemeSwitcher = () => {
    useEffect(() => {
        themeChange(false)
    }, [])
    return (<article className={"align-right"}>
        <button className={"primary"} data-set-theme="dark"><i className={"material-icons"}>nightlight_round</i>
        </button>
        <button className={"primary"} data-set-theme="light"><i className={"material-icons"}>wb_sunny</i>
        </button>
    </article>)
}

export default ThemeSwitcher;


{/*<label data-set-theme={theme === 'dark' ? 'light' : 'dark'} className="cursor-pointer label">*/}
{/*  <i className={"material-icons"}>nightlight_round</i>*/}
{/*  <input type="checkbox" onClick={() => {*/}
{/*    setTheme(*/}
{/*      theme === 'dark' ? 'light' : 'dark'*/}
{/*    )*/}
{/*    themeChange(*/}
{/*      theme === 'dark' ? 'light' : 'dark'*/}
{/*    )*/}
{/*  }} className="toggle toggle-primary mx-3" />*/}
{/*  <i className={"material-icons"}>wb_sunny</i>*/}
{/*</label>*/}