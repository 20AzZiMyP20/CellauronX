import { combineReducers } from "@reduxjs/toolkit";
import { cellReducer } from "./cellReducer.js";
import { conwayReducer } from "./conwayReducer.js";
import { gridReducer } from "./gridReducer.js";
import { themeReducer } from "./themeReducer.js";
import { viewportReducer } from "./viewportReducer.js";

export const rootReducer = combineReducers({
    viewport: viewportReducer,
    cell: cellReducer,
    grid: gridReducer,
    conway: conwayReducer,
    theme: themeReducer,
});