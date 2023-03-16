import { grid_setWidth } from "../reducers/gridReducer.js";
import { createFilterMiddleware } from "../services/createFilterMiddleware.js";

export const gridFilterMiddleware = createFilterMiddleware(
    grid_setWidth, 
    (action) => Number.isInteger(action.payload) ? action : false);