import { Container } from "pixi.js";
import StageListeners from "../../../events/StageListeners.js";
import { store } from "../../../store/pixi.js";

const VIEWPORT = store.getState().viewport;

class Stage extends Container {
    constructor() {
        super();
        
        this.x = VIEWPORT.size.width / 2;
        this.y = VIEWPORT.size.height / 2;

        this.sortableChildren = true;
        this.interactive = true;
        this.interactiveChildren = true;

        StageListeners.init(this);
    }
}

export const stage = new Stage();