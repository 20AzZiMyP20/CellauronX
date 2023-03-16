import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from "./styles/PlayButton.module.css"

export default function PlayButton() {
    const status = useSelector(state => state.conway.status);
    const dispatch = useDispatch();

    const onclick = () => {
        dispatch({type: "conway/set-status", payload: status === "paused" ? "plays" : "paused"});
    };

    return (
        <div className={style.wrapper}>
            <button className={status === "paused" ? style.play : style.pause} onClick={onclick}>
                <ion-icon name={status === "paused" ? "play-outline" : "pause-outline"} />
                <span>{status === "paused" ? "Play" : "Pause"}</span>
            </button>
        </div>
    )
}
