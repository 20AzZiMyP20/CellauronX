import { theme_activate, theme_setProp, theme_setTheme } from "../reducers/themeReducer.js";
import { createGetAction } from "../services/createGetAction.js";
import { createSetAction } from "../services/createSetAction.js";

const themeGetThemes = createGetAction(state => state.theme);
const themeSetTheme = createSetAction(theme_setTheme);
const themeSetProp = createSetAction(theme_setProp);
const themeGetActivated = createGetAction(state => state.theme[state.theme.activated]);
const themeActivate = createSetAction(theme_activate);


export {
   themeGetThemes, themeSetTheme,
   themeGetActivated,
   themeSetProp, themeActivate,
}