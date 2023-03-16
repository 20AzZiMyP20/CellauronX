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


    const [toggleTheme, useToggleTheme] = useState("KeyT");
    const toggleThemeBinder = useRef();

    const changeTheme = (event) => {
        keyBinder.unbindAction("toggleTheme");
        keyBinder.bindAction("toggleTheme", event.code);
        useToggleTheme(event.code);
    }
    
    return (
        <List title="Binds" iconName="link-outline"> 
            <Input ref={playBinder} name="key_binder" title="Play:" onKeyDown={changePlayBind} value={playBind}/>
            <Input ref={toggleThemeBinder} name="key_binder" title="Theme:" onKeyDown={changeTheme} value={toggleTheme} />
        </List>
    )
}
