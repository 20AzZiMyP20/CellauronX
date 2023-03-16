import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { keyBinder } from "../../services/KeyBinder.js";
import { cellGetSize, cellSetSize } from "../../store/actions/cellAction.js";
import { conwayGetSpeed, conwayGetStepCount, conwaySetSpeed, conwaySetStepCount } from "../../store/actions/conwayAction.js";
import { gridGetWidth, gridSetWidth } from "../../store/actions/gridAction.js";
import { Input } from "./interface/Input.jsx";
import List from "./interface/List.jsx";


export default function OptionsList() {
    useSelector(state => state.cell.size);
    useSelector(state => state.grid.width);
    useSelector(state => state.conway.stepCount);
    useSelector(state => state.conway.speed);

    const cellSize = useRef();
    const gridWidth = useRef();
    const stepCounter = useRef();
    const conwaySpeed = useRef();

    const changeCellSize = () => cellSetSize(+cellSize.current.value);
    const changeGridWidth = () => gridSetWidth(+gridWidth.current.value);
    const changeStepCount = () => conwaySetStepCount(+stepCounter.current.value);
    const changeConwaySpeed = () => conwaySetSpeed(+conwaySpeed.current.value);

    const incrementStepCount = () => conwaySetStepCount(+stepCounter.current.value + 1);
    const decrementStepCount = () => conwaySetStepCount(+stepCounter.current.value - 1);

    const incrementCellSize = () => cellSetSize(+cellSize.current.value + 1);
    const decrementCellSize = () => cellSetSize(+cellSize.current.value - 1);

    const incrementGridWidth = () => gridSetWidth(+gridWidth.current.value + 1);
    const decrementGridWidth = () => gridSetWidth(+gridWidth.current.value - 1);

    const incrementConwaySpeed = () => conwaySetSpeed(+conwaySpeed.current.value + 1);
    const decrementConwaySpeed = () => conwaySetSpeed(+conwaySpeed.current.value - 1);
    
    const bindKeys = () => {
        keyBinder.setAction("incrementStepCount", stepCounter.current, incrementStepCount);
        keyBinder.setAction("decrementStepCount", stepCounter.current, decrementStepCount);
        keyBinder.bindAction("incrementStepCount", "ArrowUp", true);
        keyBinder.bindAction("decrementStepCount", "ArrowDown", true);

        keyBinder.setAction("incrementCellSize", cellSize.current, incrementCellSize);
        keyBinder.setAction("decrementCellSize", cellSize.current, decrementCellSize);
        keyBinder.bindAction("incrementCellSize", "ArrowUp", true);
        keyBinder.bindAction("decrementCellSize", "ArrowDown", true);

        keyBinder.setAction("incrementGridWidth", gridWidth.current, incrementGridWidth);
        keyBinder.setAction("decrementGridWidth", gridWidth.current, decrementGridWidth);
        keyBinder.bindAction("incrementGridWidth", "ArrowUp", true);
        keyBinder.bindAction("decrementGridWidth", "ArrowDown", true);

        keyBinder.setAction("incrementConwaySpeed", conwaySpeed.current, incrementConwaySpeed);
        keyBinder.setAction("decrementConwaySpeed", conwaySpeed.current, decrementConwaySpeed);
        keyBinder.bindAction("incrementConwaySpeed", "ArrowUp", true);
        keyBinder.bindAction("decrementConwaySpeed", "ArrowDown", true);
    }

    useEffect(bindKeys, []);

    return (
        <List title="Options" iconName="settings-outline">
            <Input ref={stepCounter} type="text" title="Step:" onChange={changeStepCount} value={conwayGetStepCount()} />
            <Input ref={conwaySpeed} type="text" title="Speed:" onChange={changeConwaySpeed} value={conwayGetSpeed()} />
            <Input ref={cellSize} type="text" title="Cell-size:" onChange={changeCellSize} value={cellGetSize()} />
            <Input ref={gridWidth} type="text" title="Grid-width:" onChange={changeGridWidth} value={gridGetWidth()} />
        </List>
    )
}