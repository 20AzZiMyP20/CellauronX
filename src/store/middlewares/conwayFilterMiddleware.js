import { createFilterMiddleware } from "../services/createFilterMiddleware.js";
import { conway_setBase, conway_setSpeed, conway_setStepCount} from "../reducers/conwayReducer.js";
import { conwayController } from "../../services/conway/ConwayController.js";

const conwayFilterMiddleware = createFilterMiddleware(
    conway_setSpeed, 
    conway_setStepCount,
    (action) => {
        if (!Number.isInteger(action.payload)) return false;
        if (action.type === conway_setStepCount.toString()) {
            action.payload = Math.min(conwayController.cachedSteps.length - 1, Math.max(0, action.payload));
        }
        return action;
    }
);

const conwaySpeedFilterMiddleware = createFilterMiddleware(
    conway_setSpeed,
    (action) => {
        if (!Number.isInteger(action.payload)) return false;
        action.payload = Math.min(Infinity, Math.max(0, action.payload));
        return action;
    }
);

const conwayStepCountFilterMiddleware = createFilterMiddleware(
    conway_setStepCount,
    (action) => {
        if (!Number.isInteger(action.payload)) return false;
        action.payload = Math.min(conwayController.cachedSteps.length - 1, Math.max(0, action.payload));
        return action;
    }
);

export { 
    conwayFilterMiddleware, 
    conwayStepCountFilterMiddleware, 
    conwaySpeedFilterMiddleware,
};