import { createAction, createReducer } from "@reduxjs/toolkit";

export const theme_setTheme = createAction("theme/set-theme");
export const theme_setProp = createAction("theme/set-prop");
export const theme_activate = createAction("theme/activate-theme");

const preloadState = {
    activated: localStorage.getItem("activeTheme") || "light",

    light: {
        "--main-color": "#ffffff",
        "--additional-color": "#f1f2f3",
        "--hover-color": "#f5f6f7",
        "--main-text-color": "#1e1e1e",
        "--main-shadow-color": "rgba(0, 0, 0, 0.075)",
        "--additional-shadow-color": "rgba(0, 0, 0, 0.15)",

        "--close-hover-color": "rgb(201, 0, 0)",
        "--close-hover-text-color": "#ffffff",

        "--cell-color": "#3e3e3e",
        "--grid-color": "#7e7e7e",
        "--background-color": "#ffffff",

        "--sidebar-width": "270px",
    },

    dark: {
        "--main-color": "#3a3a3a",
        "--additional-color": "#2f2f2f",
        "--hover-color": "#414243",
        "--main-text-color": "#cccccc",
        "--main-shadow-color": "rgba(0, 0, 0, 0.15)",
        "--additional-shadow-color": "rgba(0, 0, 0, 0.25)",

        "--close-hover-color": "rgb(201, 0, 0)",
        "--close-hover-text-color": "#ffffff",

        "--cell-color": "#1f1f1f",
        "--grid-color": "#5e5e5e",
        "--background-color": "#3a3a3a",

        "--sidebar-width": "270px",
    },
};

export const themeReducer = createReducer(preloadState, (builder) => {
    builder
        .addCase(theme_setTheme, (state, action) => {
            if (action.payload.name === "activated") return;

            state[action.payload.name] = action.payload.theme;
        })

        .addCase(theme_setProp, (state, action) => {
            if (!action.payload.name) action.payload.name = state.activated;
            const { name, prop, value } = action.payload;

            state[name][prop] = value;
        })

        .addCase(theme_activate, (state, action) => {
            if (!action.payload.name in state) return;

            state.activated = action.payload.name;
            state[state.activated];
        })
});