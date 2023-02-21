import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducers.js";


export const store = configureStore({
    reducer: rootReducer,
});

