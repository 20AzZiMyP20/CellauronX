import React, {useEffect, useState, useRef} from "react";
import style from "./styles/List.module.css";

export default function List(props) {
    const [collapse, useCollapse] = useState(true);

    const onclick = () => {
        useCollapse(collapse ? false : true);
        console.log(collapse);
    }
    

    return (
        <ul className={style.list} style={{height: collapse ? "0" : `calc(3.5rem * ${props.children.length || 1} + 3rem)`}} collapse={collapse ? "true" : "false"}>
            <div className={style.titleBox} onClick={onclick}>
                <ion-icon name={props.iconName}></ion-icon>
                <span className={style.title}>{props.title}</span>
                <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
            {props.children instanceof Array ? props.children.map((elem, index) => <li key={index} className={style.li}>{elem}</li>) :
                <li className={style.li}>{props.children}</li>}
        </ul>
    )
}