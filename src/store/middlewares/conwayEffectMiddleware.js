import { conwayController } from "../../services/conway/ConwayController.js";
import { conwayGenerator } from "../../services/conway/ConwayGenerator.js";
import { conwayGetBase, conwayGetStepCount } from "../actions/conwayAction.js";
import { conway_setBase, conway_setStepCount } from "../reducers/conwayReducer.js";
import { createEffectMiddleware } from "../services/createEffectMiddleware.js";

export const conwayStepCounterEffectMiddleware = createEffectMiddleware(
    conway_setStepCount,
    () => {
        conwayController.loadStep(conwayGetStepCount());
    },
);

export const conwayBaseEffectMiddleware = createEffectMiddleware(
    conway_setBase,
    () => {
    }
);