import React, { useState, useRef } from 'react'
import { keyBinder } from '../../services/KeyBinder.js';
import { Input } from './interface/Input.jsx'
import List from './interface/List.jsx'

export default function BindsList() {
    const [playBind, usePlayBind] = useState("Space");
    const playBinder = useRef();

    const changePlayBind = (event) => {
        keyBinder.unbindAction("conwaySetStatus");
        keyBinder.bindAction("conwaySetStatus", event.code);
        usePlayBind(event.code);
    };
    
    return (
        <List title="Binds" iconName="link-outline"> 
            <Input ref={playBinder} id="key_binder" title="Play/Pause:" onKeyDown={changePlayBind} value={playBind}/>
        </List>
    )
}
