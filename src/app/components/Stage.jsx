import { Graphics } from 'pixi.js';
import React, { useContext, useEffect, useRef } from 'react'
import { EngineEmitter } from '../../events/EngineEmitter.js';
import Conway from '../../services/conway/Conway.js';
import { conwayController } from '../../services/conway/ConwayController.js';

export default function Stage() {
    const self = useRef();

    const start = () => {
        EngineEmitter.emit("stageload", self);

        conwayController.birthCell(0, 0);
    };

    useEffect(start, []);

    return (
        <canvas ref={self}></canvas>
    )
}
