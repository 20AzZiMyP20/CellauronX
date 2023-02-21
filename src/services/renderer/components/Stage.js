import { Container } from "pixi.js";
import StageListeners from "../../../events/StageListeners.js";
import { viewportGetSize } from "../../../store/actions/viewportAction.js";

class Stage extends Container {
    constructor() {
        super();
        
        const viewportSize = viewportGetSize();

        this.x = viewportSize.width / 2;
        this.y = viewportSize.height / 2;

        this.sortableChildren = true;
        this.interactive = true;
        this.interactiveChildren = true;

        StageListeners.init(this);
    }
}

export const stage = new Stage();