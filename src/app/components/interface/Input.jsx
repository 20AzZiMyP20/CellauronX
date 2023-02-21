import React from 'react'
import { forwardRef } from 'react';
import style from "./styles/Input.module.css";

export const Input = forwardRef(({title, ...props}, ref) => {
      return (
        <div className={style.wrapper}>
          <span className={style.title}>{title}</span>
          <input ref={ref} className={style.input} {...props}/>
        </div>
      )
});
