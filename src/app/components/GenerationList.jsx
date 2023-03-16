import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { conwayGenerator } from '../../services/conway/ConwayGenerator.js'
import { conwayGetBase, conwaySetBase } from '../../store/actions/conwayAction.js'
import { Input } from './interface/Input.jsx'
import List from './interface/List.jsx'

export default function GenerationList() {
    useSelector(state => state.conway.base);

    const self = useRef();

    const changeBase = () => {
        conwaySetBase(self.current.value);
        conwayGenerator.generateByBase(self.current.value);
    };

    return (
        <List title="Generation" iconName="cog-outline">
            <Input ref={self} title="Base:" onFocus={(e) => e.target.select()}  onChange={changeBase} value={conwayGetBase()}/>
        </List>
    )
}