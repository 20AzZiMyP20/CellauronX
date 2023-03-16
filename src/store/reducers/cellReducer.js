import { createAction, createReducer } from "@reduxjs/toolkit";

export const cell_setSize = createAction("cell/set-size");
export const cell_setColor = createAction("cell/set-color");

const preloadState = {
    color: 0x3e3e3e,
    size: 40,
}

export const cellReducer = createReducer(preloadState, (builder) => {
    builder
        .addCase(cell_setSize, (state, action) => {
            state.size = action.payload;
        })
        .addCase(cell_setColor, (state, action) => {
            state.color = action.payload;
        })
});