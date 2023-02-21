import { conway_setSpeed, conway_setStatus } from "../reducers/conwayReducer.js";
import { createGetAction } from "../services/createGetAction.js";
import { createSetAction } from "../services/createSetAction.js";

const conwayGetSpeed = createGetAction(state => state.conway.speed);
const conwaySetSpeed = createSetAction(conway_setSpeed);

const conwayGetStatus = createGetAction(state => state.conway.status);
const conwaySetStatus = createSetAction(conway_setStatus);

const conwayGetState = createGetAction(state => state.conway);

export {
    conwayGetSpeed, conwaySetSpeed,
    conwayGetStatus, conwaySetStatus,
    conwayGetState,
}