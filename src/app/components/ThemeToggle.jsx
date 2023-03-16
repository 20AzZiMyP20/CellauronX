import React from "react";
import { useSelector } from "react-redux";
import ThemeManager from "../../services/ThemeManager.js";
import style from "./styles/ThemeToggle.module.css";

function ThemeToggle(props) {
    const name = useSelector(state => state.theme.activated);
    const click = () => name === "light" 
        ? ThemeManager.activate("dark")
        : ThemeManager.activate("light")
        
    return (
        <button className={style.toggle} onClick={click}>
            <ion-icon name="sunny-outline" />
        </button>
    )
}

export default ThemeToggle;