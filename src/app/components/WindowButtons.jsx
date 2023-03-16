import React, { useRef } from 'react'
import style from "./styles/WindowButtons.module.css";

export default function WindowButtons() {
    const self = useRef();

    const oncollapse = () => window.api.send("collapse");
    const onexpand = () => window.api.send("expand");;
    const onclose = () => window.api.send("close");;

    return (
        <div ref={self} className={style.wrapper}>
            <button className={style.collapse} onClick={oncollapse}><ion-icon name="remove-outline"/></button>
            <button className={style.expand} onClick={onexpand}><ion-icon name="copy-outline" /></button>
            <button className={style.close} onClick={onclose}><ion-icon name="close-outline" /></button>
        </div>
    )
}
