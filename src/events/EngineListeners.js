import { Renderer } from "pixi.js";
import { StageEmitter } from "./StageEmitter.js";
import CreateEventListener from "./CreateEventListener.js";
import { grid } from "../services/renderer/components/Grid.js";
import { viewportGetState, viewportSetSize, viewportGetColor } from "../store/actions/viewportAction.js";
import { EngineEmitter } from "./EngineEmitter.js";


const EngineListeners = new CreateEventListener();

EngineListeners.add(
    function () {
        grid.on("clickcell", (event) => {
            EngineEmitter.emit("cellclicked", event.cell);
        });
    },
    function () {
        addEventListener("resize", (event) => {
            const width = innerWidth;
            const height = innerHeight;

            this.renderer.resize(width, height);
            
            viewportSetSize({width, height});
        });
    },
    function () {
        const {size: viewportSize, color: viewportColor} = viewportGetState();

        StageEmitter.on("stageload", (stage) => {
            this.renderer = new Renderer({
                width: viewportSize.width,
                height: viewportSize.height,
                backgroundColor: viewportColor,
                view: stage,
            });
            
            viewportGetColor((color) => this.renderer.background.color = color);
        });
    },

    
);

export default EngineListeners;

