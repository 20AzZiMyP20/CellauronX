import { createAction, createReducer } from "@reduxjs/toolkit";

export const grid_setColor = createAction("grid/set-color");
export const grid_setWidth = createAction("grid/set-width");

const preloadState = {
    color: 0x00a7a2,
    width: 1,
};

export const gridReducer = createReducer(preloadState, (builder) => {
    builder
        .addCase(grid_setColor, (state, action) => {
            state.color = action.payload;
        })
        .addCase(grid_setWidth, (state, action) => {
            state.width = action.payload;
        })
});