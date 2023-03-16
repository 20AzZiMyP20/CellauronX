import { theme_activate, theme_setProp, theme_setTheme } from "../reducers/themeReducer.js";
import { createFilterMiddleware } from "../services/createFilterMiddleware.js";

export const themeFilterMiddleware = createFilterMiddleware(
    theme_setTheme, 
    theme_setProp, 
    theme_activate, action => action);