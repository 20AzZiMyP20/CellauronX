import { theme_activate } from "../reducers/themeReducer.js";
import { createEffectMiddleware } from "../services/createEffectMiddleware.js";
import { themeGetActivatedName } from "../actions/themeAction.js";

export const themeActiveEffectMiddleware = createEffectMiddleware(
    theme_activate,
    () => {
        const name = themeGetActivatedName();
        localStorage.setItem("activeTheme", name);
    },
);