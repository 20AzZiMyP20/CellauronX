import React, { useState, useRef, useEffect } from 'react'
import styles from "./styles/Sidebar.module.css";
import OptionsList from './OptionsList.jsx';
import PlayButton from './PlayButton.jsx';
const { sidebar, toggle } = styles;

function Sidebar() {
  const [collapse, useCollapse] = useState(true);
  const self = useRef();

  const onclick = () => {
    useCollapse(collapse ? false : true);
  }

  return (
    <div ref={self} className={sidebar} collapse={collapse ? "true" : "false"}>
      <button className={toggle} onClick={onclick}></button>
      <OptionsList />
      <PlayButton />
    </div>
  )
}

export default Sidebar;
