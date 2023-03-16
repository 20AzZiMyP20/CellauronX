import React, { forwardRef } from 'react'
import styles from './styles/Textarea.module.css'

export const Textarea = forwardRef(({title, children, ...props}, ref) => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>{title}</span>
            <textarea ref={ref} className={styles.textarea} {...props}>{children}</textarea>
        </div>
    )
});
