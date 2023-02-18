import { createAction, createReducer } from "@reduxjs/toolkit";

let preloadState = {
    size: {
        width: 800,
        height: 600,
    },
    color: 0xe1e1e1,
}

const viewportReducer = createReducer(preloadState, (builder) => {
    const setSize = createAction("viewport/set-size");
    const setColor = createAction("viewport/set-color");

    builder
        .addCase(setSize, (state, action) => {
            state.size = action.payload;
        })
        .addCase(setColor, (state, action) => {
            state.color = action.payload;
        })
});

preloadState = {
    color: 0x3e3e3e,
    size: 40,
}

const cellReducer = createReducer(preloadState, (builder) => {
    const setSize = createAction("cell/set-size");
    const setColor = createAction("cell/set-color");

    builder
        .addCase(setSize, (state, action) => {
            state.size = action.payload;
        })
        .addCase(setColor, (state, action) => {
            state.color = action.payload;
        })
});

preloadState = {
    color: 0x555555,
    width: 1,
};

const gridReducer = createReducer(preloadState, (builder) => {
    const setColor = createAction("grid/set-color");
    const setWidth = createAction("grid/set-width");

    builder
        .addCase(setColor, (state, action) => {
            state.color = action.payload;
        })
        .addCase(setWidth, (state, action) => {
            state.width = action.payload;
        })
});

preloadState = {
    speed: 300,
};

const conwayReducer = createReducer(preloadState, (builder) => {
    const setSpeed = createAction("conway/set-speed");

    builder.addCase(setSpeed, (state, action) => {
        state.speed = action.payload;
    });
});


export { viewportReducer, cellReducer, gridReducer, conwayReducer }