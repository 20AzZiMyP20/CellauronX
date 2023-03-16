import { configureStore } from "@reduxjs/toolkit";
import { cellFilterMiddleware } from "./middlewares/cellFilterMiddleware.js";
import { conwayStepCounterEffectMiddleware } from "./middlewares/conwayEffectMiddleware.js";
import { conwaySpeedFilterMiddleware, conwayStepCountFilterMiddleware } from "./middlewares/conwayFilterMiddleware.js";
import { gridFilterMiddleware } from "./middlewares/gridFilterMiddleware.js";
import { themeActiveEffectMiddleware } from "./middlewares/themeEffectMiddleware.js";
import { themeFilterMiddleware } from "./middlewares/themeFilterMiddleware.js";
import { rootReducer } from "./reducers/rootReducers.js";


export const store = configureStore({
    reducer: rootReducer,
    middleware: [
        themeFilterMiddleware,
        gridFilterMiddleware,
        cellFilterMiddleware,
        conwayStepCounterEffectMiddleware,
        conwaySpeedFilterMiddleware,
        conwayStepCountFilterMiddleware,
        themeActiveEffectMiddleware,
    ],
});

