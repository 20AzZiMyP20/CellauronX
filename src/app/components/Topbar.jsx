import React, { useRef } from "react";
import WindowButtons from "./WindowButtons.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import style from "./styles/Topbar.module.css";

export default function Topbar(props) {
    const self = useRef();

    return (
        <div ref={self} className={style.topbar}>
            <ThemeToggle />
            <WindowButtons />
        </div>
    )
}