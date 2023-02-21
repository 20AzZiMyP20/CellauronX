import { cell_setColor, cell_setSize } from "../reducers/cellReducer.js";
import { createGetAction } from "../services/createGetAction.js";
import { createSetAction } from "../services/createSetAction.js";

const cellGetSize = createGetAction(state => state.cell.size);
const cellSetSize = createSetAction(cell_setSize);

const cellGetColor = createGetAction(state => state.cell.color);
const cellSetColor = createSetAction(cell_setColor);

const cellGetState = createGetAction(state => state.cell);

export {
    cellGetSize, cellSetSize,
    cellGetColor, cellSetColor,
    cellGetState,
}