import { createAction, createReducer } from "@reduxjs/toolkit";

export const conway_setSpeed = createAction("conway/set-speed");
export const conway_setStatus = createAction("conway/set-status");

const preloadState = {
    speed: 3,
    status: "paused",
};

export const conwayReducer = createReducer(preloadState, (builder) => {
    builder
        .addCase(conway_setSpeed, (state, action) => {
            state.speed = action.payload;
        })
        .addCase(conway_setStatus, (state, action) => {
            state.status = action.payload;
        })
});