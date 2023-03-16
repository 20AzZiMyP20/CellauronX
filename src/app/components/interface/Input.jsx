import React from 'react'
import { forwardRef } from 'react';
import styles from "./styles/Input.module.css";

export const Input = forwardRef(({title, ...props}, ref) => {
      return (
        <div className={styles.wrapper}>
          <span className={styles.title}>{title}</span>
          <input ref={ref} className={styles.input} {...props}/>
        </div>
      )
});
