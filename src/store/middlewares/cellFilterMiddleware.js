import { cell_setSize } from "../reducers/cellReducer.js";
import { createFilterMiddleware } from "../services/createFilterMiddleware.js";

export const cellFilterMiddleware = createFilterMiddleware(
    cell_setSize, 
    action => {
        if (typeof action.payload !== "number") return false;
        action.payload = Math.max(10, action.payload);
        
        return action;
});