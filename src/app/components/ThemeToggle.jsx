import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { keyBinder } from "../../services/KeyBinder.js";
import ThemeManager from "../../services/ThemeManager.js";
import { themeGetActivatedName } from "../../store/actions/themeAction.js";
import style from "./styles/ThemeToggle.module.css";

function ThemeToggle() {
    useSelector(state => state.theme.activated);

    const click = () => themeGetActivatedName() === "light" 
        ? ThemeManager.activate("dark")
        : ThemeManager.activate("light");

    const bindKeys = () => {
        keyBinder.setAction("toggleTheme", document.body, (event) => {
            if (event.target.tagName === "INPUT") return
            click();
        });
        keyBinder.bindAction("toggleTheme", "KeyT");
    };

    useEffect(bindKeys, [])
        
    return (
        <button className={style.toggle} onClick={click}>
            <ion-icon name="sunny-outline" />
        </button>
    )
}

export default ThemeToggle;