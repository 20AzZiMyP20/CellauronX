import { viewport_setColor, viewport_setSize } from "../reducers/viewportReducer.js";
import { createGetAction } from "../services/createGetAction.js";
import { createSetAction } from "../services/createSetAction.js";

const viewportGetSize = createGetAction(state => state.viewport.size);
const viewportSetSize = createSetAction(viewport_setSize);

const viewportGetColor = createGetAction(state => state.viewport.color);
const viewportSetColor = createSetAction(viewport_setColor);

const viewportGetState = createGetAction(state => state.viewport);

export {
    viewportGetSize, viewportSetSize,
    viewportGetColor, viewportSetColor,
    viewportGetState,
}