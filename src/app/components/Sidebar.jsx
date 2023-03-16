import React, { useState, useRef, useEffect } from 'react'
import styles from "./styles/Sidebar.module.css";
import OptionsList from './OptionsList.jsx';
import PlayButton from './PlayButton.jsx';
import CustomizationList from './CustomizationList.jsx';
import { themeSetProp } from '../../store/actions/themeAction.js';
import ThemeManager from '../../services/ThemeManager.js';
import { useSelector } from 'react-redux';
import BindsList from './BindsList.jsx';
import GenerationList from './GenerationList.jsx';

function Sidebar() {
    const activated = useSelector(state => state.theme.activated);
    const [collapse, useCollapse] = useState(true);
    const self = useRef();
    const resizer = useRef();
    const container = useRef();

    const oncollapse = () => {
      useCollapse(collapse ? false : true);
    };


    const resize = (e) => {
        themeSetProp({ prop: "--sidebar-width", value: Math.max(window.innerWidth - e.clientX, 270) + "px" });
        ThemeManager.activate(activated);
    };

    const beginResize = (e) => {
        resizer.current.addEventListener("pointermove", resize);
        resizer.current.setPointerCapture(e.pointerId);
    };

    const stopResize = (e) => {
        resizer.current.removeEventListener("pointermove", resize);
        resizer.current.releasePointerCapture(e.pointerId);
    };


    return (
        <div ref={self} className={styles.sidebar} collapse={collapse ? "true" : "false"}>
            <button className={styles.toggle} onClick={oncollapse}><ion-icon name="chevron-back-outline"></ion-icon></button>
            <button ref={resizer} className={styles.resizer} onPointerDown={beginResize} onPointerUp={stopResize}></button>
            <div ref={container} className={styles.container}>
                <GenerationList/>
                <OptionsList />
                <CustomizationList />
                <BindsList/>
                <PlayButton />
            </div>
        </div>
    )
}

export default Sidebar;
