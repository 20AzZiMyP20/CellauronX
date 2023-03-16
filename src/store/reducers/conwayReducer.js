import { createAction, createReducer } from "@reduxjs/toolkit";

export const conway_setSpeed = createAction("conway/set-speed");
export const conway_setStatus = createAction("conway/set-status");
export const conway_setStepCount = createAction("conway/set-stepCount");
export const conway_incrementStepCount = createAction("conway/increment-stepCount");
export const conway_decrementStepCount = createAction("conway/decrement-stepCount");
export const conway_setBase = createAction("conway/set-base");

const preloadState = {
    speed: 3,
    status: "paused",
    stepCount: 0,
};

export const conwayReducer = createReducer(preloadState, (builder) => {
    builder
        .addCase(conway_setSpeed, (state, action) => {
            state.speed = action.payload;
        })
        .addCase(conway_setStatus, (state, action) => {
            state.status = action.payload;
        })
        .addCase(conway_setStepCount, (state, action) => {
            state.stepCount = action.payload;
        })
        .addCase(conway_incrementStepCount, (state) => {
            state.stepCount = state.stepCount + 1;
        })
        .addCase(conway_decrementStepCount, (state) => {
            state.stepCount = state.stepCount - 1;
        })
        .addCase(conway_setBase, (state, action) => {
            state.base = action.payload;
        });
});