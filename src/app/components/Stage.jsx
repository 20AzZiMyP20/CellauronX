import React, { useEffect, useRef } from 'react'
import { StageEmitter } from '../../events/StageEmitter.js';
import { conwayGenerator } from '../../services/conway/ConwayGenerator.js';
import { keyBinder } from '../../services/KeyBinder.js';
import { conwayGetStatus, conwaySetStatus } from '../../store/actions/conwayAction.js';

export default function Stage() {
    const self = useRef();

    const bindKeys = () => {
        keyBinder.setAction("conwaySetStatus", document.body, (event) => {
            if (event.target.name === "key_binder") return;

            const status = conwayGetStatus();

            if (status === "paused") conwaySetStatus("plays");
            else if (status === "plays") conwaySetStatus("paused");
        });

        keyBinder.bindAction("conwaySetStatus", "Space");
    };

    const start = () => {
        StageEmitter.emit("stageload", self.current);
        bindKeys();

        conwayGenerator.generateByBase("W3sieCI6MSwieSI6LTN9LHsieCI6LTEsInkiOi0zfSx7IngiOi0xLCJ5IjozfSx7IngiOjEsInkiOjN9LHsieCI6LTMsInkiOjF9LHsieCI6MywieSI6MX0seyJ4IjozLCJ5IjotMX0seyJ4IjotMywieSI6LTF9LHsieCI6MSwieSI6LTJ9LHsieCI6LTEsInkiOi0yfSx7IngiOjEsInkiOjJ9LHsieCI6LTEsInkiOjJ9LHsieCI6MiwieSI6LTF9LHsieCI6LTIsInkiOi0xfSx7IngiOjIsInkiOjF9LHsieCI6LTIsInkiOjF9LHsieCI6MywieSI6LTZ9LHsieCI6LTMsInkiOi02fSx7IngiOi0zLCJ5Ijo2fSx7IngiOjMsInkiOjZ9LHsieCI6LTYsInkiOi0zfSx7IngiOjYsInkiOi0zfSx7IngiOi02LCJ5IjozfSx7IngiOjYsInkiOjN9LHsieCI6LTUsInkiOi0zfSx7IngiOjUsInkiOi0zfSx7IngiOi01LCJ5IjozfSx7IngiOjUsInkiOjN9LHsieCI6MywieSI6LTV9LHsieCI6LTMsInkiOi01fSx7IngiOi0zLCJ5Ijo1fSx7IngiOjMsInkiOjV9LHsieCI6LTUsInkiOi0yfSx7IngiOjUsInkiOi0yfSx7IngiOi01LCJ5IjoyfSx7IngiOjUsInkiOjJ9LHsieCI6MiwieSI6LTV9LHsieCI6LTIsInkiOi01fSx7IngiOi0yLCJ5Ijo1fSx7IngiOjIsInkiOjV9LHsieCI6MywieSI6LTJ9LHsieCI6LTMsInkiOi0yfSx7IngiOi0zLCJ5IjoyfSx7IngiOjMsInkiOjJ9LHsieCI6MiwieSI6LTN9LHsieCI6LTIsInkiOi0zfSx7IngiOi0yLCJ5IjozfSx7IngiOjIsInkiOjN9LHsieCI6NCwieSI6LTN9LHsieCI6LTQsInkiOi0zfSx7IngiOi00LCJ5IjozfSx7IngiOjQsInkiOjN9LHsieCI6MywieSI6LTR9LHsieCI6LTMsInkiOi00fSx7IngiOi0zLCJ5Ijo0fSx7IngiOjMsInkiOjR9LHsieCI6LTQsInkiOi0xfSx7IngiOjQsInkiOi0xfSx7IngiOi00LCJ5IjoxfSx7IngiOjQsInkiOjF9LHsieCI6MSwieSI6LTR9LHsieCI6LTEsInkiOi00fSx7IngiOi0xLCJ5Ijo0fSx7IngiOjEsInkiOjR9LHsieCI6NCwieSI6LTZ9LHsieCI6LTQsInkiOi02fSx7IngiOi00LCJ5Ijo2fSx7IngiOjQsInkiOjZ9LHsieCI6LTYsInkiOi00fSx7IngiOjYsInkiOi00fSx7IngiOi02LCJ5Ijo0fSx7IngiOjYsInkiOjR9XQ==");
    };

    useEffect(start, []);

    return (
        <canvas ref={self}></canvas>
    )
}
