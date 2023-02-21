import { grid_setColor, grid_setWidth } from "../reducers/gridReducer.js";
import { createGetAction } from "../services/createGetAction.js";
import { createSetAction } from "../services/createSetAction.js";

const gridGetWidth = createGetAction(state => state.grid.width);
const gridSetWidth = createSetAction(grid_setWidth);

const gridGetColor = createGetAction(state => state.grid.color);
const gridSetColor = createSetAction(grid_setColor);

const gridGetState = createGetAction(state => state.grid);

export {
    gridGetWidth, gridSetWidth,
    gridGetColor, gridSetColor,
    gridGetState,
}