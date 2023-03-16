import React from 'react'
import { forwardRef } from 'react';
import style from "./styles/ColorInput.module.css";

export const ColorInput = forwardRef(({ title, preview, ...props }, ref) => {
    return (
        <div className={style.wrapper}>
            <div className={style.preview} style={{backgroundColor: preview}}></div>
            <span className={style.title}>{title}</span>
            <input ref={ref} className={style.input} {...props} />
        </div>
    )
});
