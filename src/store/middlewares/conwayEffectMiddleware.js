import { conwayController } from "../../services/conway/ConwayController.js";
import { conwayGetStepCount } from "../actions/conwayAction.js";
import { conway_setStepCount } from "../reducers/conwayReducer.js";
import { createEffectMiddleware } from "../services/createEffectMiddleware.js";

export const conwayStepCounterEffectMiddleware = createEffectMiddleware(
    conway_setStepCount,
    () => {
        conwayController.loadStep(conwayGetStepCount());
    },
);
