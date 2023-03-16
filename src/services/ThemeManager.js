import { cellSetColor } from "../store/actions/cellAction.js";
import { gridGetColor, gridSetColor } from "../store/actions/gridAction.js";
import { themeActivate, themeGetActivated } from "../store/actions/themeAction.js";
import { viewportSetColor } from "../store/actions/viewportAction.js";

class ThemeManager {
    static activate(name) {
        themeActivate({ name });

        const root = document.querySelector(":root");
        const theme = themeGetActivated();

        for (const prop in theme) {
            if (
                !CSS.supports("color", theme[prop]) &&
                !CSS.supports("width", theme[prop])
            ) continue;
            root.style.setProperty(prop, theme[prop]);
        }

        gridSetColor(this.hexCSStoDec(theme["--grid-color"]));
        viewportSetColor(this.hexCSStoDec(theme["--background-color"]));
        cellSetColor(this.hexCSStoDec(theme["--cell-color"]));
    }

    static hexCSStoDec(color) {
        return Number("0x" + color.slice(-6));
    }
}



export default ThemeManager;