import { conway_decrementStepCount, conway_incrementStepCount, conway_setBase, conway_setSpeed, conway_setStatus, conway_setStepCount } from "../reducers/conwayReducer.js";
import { createGetAction } from "../services/createGetAction.js";
import { createSetAction } from "../services/createSetAction.js";

const conwayGetSpeed = createGetAction(state => state.conway.speed);
const conwaySetSpeed = createSetAction(conway_setSpeed);

const conwayGetStatus = createGetAction(state => state.conway.status);
const conwaySetStatus = createSetAction(conway_setStatus);

const conwayGetStepCount = createGetAction(state => state.conway.stepCount);
const conwaySetStepCount = createSetAction(conway_setStepCount);

const conwayIncrementStepCount = createSetAction(conway_incrementStepCount);
const conwayDecrementStepCount = createSetAction(conway_decrementStepCount);

const conwayGetBase = createGetAction(state => state.conway.base);
const conwaySetBase = createSetAction(conway_setBase);

const conwayGetState = createGetAction(state => state.conway);

export {
    conwayGetSpeed, conwaySetSpeed,
    conwayGetStatus, conwaySetStatus,
    conwayGetStepCount, conwaySetStepCount,
    conwayIncrementStepCount, conwayDecrementStepCount,
    conwayGetState, conwayGetBase, conwaySetBase,
}