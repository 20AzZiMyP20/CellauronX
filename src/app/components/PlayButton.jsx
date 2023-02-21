import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from "./styles/PlayButton.module.css"

export default function PlayButton() {
    const status = useSelector(state => state.conway.status);
    const dispatch = useDispatch();

    const onclick = () => {
        dispatch({type: "conway/set-status", payload: status === "paused" ? "plays" : "paused"});
        console.log(status);
    };

    return (
        <div className={style.wrapper}>
            <button className={status === "paused" ? style.play : style.pause} onClick={onclick}>{status === "paused" ? "Play" : "Pause"}</button>
        </div>
    )
}
