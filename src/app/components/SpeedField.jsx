import React, { useRef, useState } from 'react'
import { Input } from './interface/Input.jsx';
import { useDispatch, useSelector } from 'react-redux';

export default function SpeedField() {
    const speed = useSelector(state => state.conway.speed);
    const self = useRef();
    const dispatch = useDispatch();

    const changeSpeed = () => {
        dispatch({type: "conway/set-speed", payload: +self.current.value});
    }
    
    return (
        <Input ref={self} type="text" title="Speed:" onChange={changeSpeed} value={speed}/>
    )
}
