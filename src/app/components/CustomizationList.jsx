import React, { useRef } from "react";
import List from "./interface/List.jsx";
import { ColorInput } from "./interface/ColorInput.jsx";
import ThemeManager from "../../services/ThemeManager.js";
import { useSelector } from "react-redux";
import { themeSetProp } from "../../store/actions/themeAction.js";

export default function CustomizationList() {
    const activated = useSelector(state => state.theme.activated);
    const getColor = (prop) => useSelector(state => state.theme[activated][prop]);

    const createHandler = (prop, self) => {
        return () => {
            themeSetProp({
                prop: prop,
                value: self.current.value,
            });

            ThemeManager.activate(activated);
        };
    };

    const mainColor = useRef();
    const additionalColor = useRef();
    const hoverColor = useRef();
    const mainTextColor = useRef();
    const mainShadowColor = useRef();
    const additionalShadowColor = useRef();

    const changeMainColor = createHandler("--main-color", mainColor);
    const changeAdditionalColor = createHandler("--additional-color", additionalColor); 
    const changeHoverColor = createHandler("--hover-color", hoverColor);
    const changeMainTextColor = createHandler("--main-text-color", mainTextColor);
    const changeMainShadowColor = createHandler("--main-shadow-color", mainShadowColor);
    const changeAdditionalShadowColor = createHandler("--additional-shadow-color", additionalShadowColor);


    const gridColor = useRef();
    const cellColor = useRef();
    const backgroundColor = useRef();

    const changeGridColor = createHandler("--grid-color", gridColor);
    const changeCellColor = createHandler("--cell-color", cellColor);
    const changeBackgroundColor = createHandler("--background-color", backgroundColor);
    
    return (
        <List title="Theme" iconName="color-filter-outline">
            <ColorInput ref={mainColor} title="Color-1:" preview={getColor("--main-color")} onChange={changeMainColor} value={getColor("--main-color")}/>
            <ColorInput ref={additionalColor} title="Color-2:" preview={getColor("--additional-color")} onChange={changeAdditionalColor} value={getColor("--additional-color")} />
            <ColorInput ref={hoverColor} title="Hover:" preview={getColor("--hover-color")} onChange={changeHoverColor} value={getColor("--hover-color")} />
            <ColorInput ref={mainTextColor} title="Text-1:" preview={getColor("--main-text-color")} onChange={changeMainTextColor} value={getColor("--main-text-color")} />
            <ColorInput ref={mainShadowColor} title="Shadow-1:" preview={getColor("--main-shadow-color")} onChange={changeMainShadowColor} value={getColor("--main-shadow-color")} />
            <ColorInput ref={additionalShadowColor} title="Shadow-2:" preview={getColor("--additional-shadow-color")} onChange={changeAdditionalShadowColor} value={getColor("--additional-shadow-color")} />
            <ColorInput ref={gridColor} title="Grid:" preview={getColor("--grid-color")} onChange={changeGridColor} value={getColor("--grid-color")} />
            <ColorInput ref={cellColor} title="Cell:" preview={getColor("--cell-color")} onChange={changeCellColor} value={getColor("--cell-color")} />
            <ColorInput ref={backgroundColor} title="Background:" preview={getColor("--background-color")} onChange={changeBackgroundColor} value={getColor("--background-color")} />
        </List>
    )
}
