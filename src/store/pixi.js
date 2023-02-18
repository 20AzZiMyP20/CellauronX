import { configureStore } from "@reduxjs/toolkit";
import { cellReducer, conwayReducer, gridReducer, viewportReducer } from "./reducers/rootReducers.js";

export const store = configureStore({
    reducer: {
        viewport: viewportReducer,
        cell: cellReducer,
        grid: gridReducer,
        conway: conwayReducer,
    }
});
