import { grid_setWidth } from "../reducers/gridReducer.js";
import { createFilterMiddleware } from "../services/createFilterMiddleware.js";

export const gridFilterMiddleware = createFilterMiddleware(
    grid_setWidth, 
    (action) => {
        if (!Number.isInteger(action.payload)) return;
        action.payload = Math.min(Math.max(0, action.payload), 10)
        return action
    });