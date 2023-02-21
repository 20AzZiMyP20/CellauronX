import React, { useEffect, useRef } from 'react'
import { StageEmitter } from '../../events/StageEmitter.js';
import { conwayController } from '../../services/conway/ConwayController.js';

export default function Stage() {
    const self = useRef();

    const start = () => {
        StageEmitter.emit("stageload", self);

        conwayController.birthCell(0, 0);
    };

    useEffect(start, []);

    return (
        <canvas ref={self}></canvas>
    )
}
