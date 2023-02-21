import React, {useEffect, useState, useRef} from "react";
import style from "./styles/List.module.css";

export default function List(props) {
    const [collapse, useCollapse] = useState(true);

    const onclick = () => {
        useCollapse(collapse ? false : true);
        console.log(collapse);
    }
    

    return (
        <ul className={style.list} collapse={collapse ? "true" : "false"}>
            <span className={style.title} onClick={onclick}>{props.title}</span>
            {props.children instanceof Array ? props.children.map((elem, index) => <li key={index} className={style.li}>{elem}</li>) :
                <li className={style.li}>{props.children}</li>}
        </ul>
    )
}