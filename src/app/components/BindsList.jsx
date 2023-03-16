import React, { useState, useRef } from 'react'
import { basicRepo } from '../../services/BasicRepository.js';
import { keyBinder } from '../../services/KeyBinder.js';
import { Input } from './interface/Input.jsx'
import List from './interface/List.jsx'

export default function BindsList() {
    const playBinder = useKeyBinder("Space", "Play:", "conwaySetStatus");
    const toggleThemeBinder = useKeyBinder("KeyT", "Theme:", "toggleTheme");
    const clearStageBinder = useKeyBinder("KeyC", "Clear:", "clearStage");
    
    return (
        <List title="Binds" iconName="link-outline"> 
            {playBinder}
            {toggleThemeBinder}
            {clearStageBinder}
        </List>
    )
}

function useKeyBinder(state, title, actionName) {
    if (basicRepo.has(actionName)) {
         state = basicRepo.get(actionName)
    }

    const [bind, useBind] = useState(state);
    const binder = useRef();

    const changeBind = (event) => {
        keyBinder.unbindAction(actionName);
        keyBinder.bindAction(actionName, event.code);

        useBind(event.code);
    }

    return <Input ref={binder} name="key_binder" title={title} onKeyDown={changeBind} value={bind} />
}