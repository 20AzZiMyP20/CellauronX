import { createAction, createReducer } from "@reduxjs/toolkit";

export const viewport_setSize = createAction("viewport/set-size");
export const viewport_setColor = createAction("viewport/set-color");

const preloadState = {
    size: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
    color: 0xffffff,
}

export const viewportReducer = createReducer(preloadState, (builder) => {   
    builder
        .addCase(viewport_setSize, (state, action) => {
            state.size = action.payload;
        })
        .addCase(viewport_setColor, (state, action) => {
            state.color = action.payload;
        })
});