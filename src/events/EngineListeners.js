import { EngineEmitter } from "./EngineEmitter.js";
import CreateEventListener from "./CreateEventListener.js";
import { grid } from "../services/renderer/components/Grid.js";
import { store } from "../store/pixi.js";

const EngineListeners = new CreateEventListener();

EngineListeners.add(
    function () {
        grid.on("clickcell", (event) => {
            EngineEmitter.emit("cellclicked", event.cell);
        });
    },
    function () {
        window.api.on("WINDOW_RESIZE", (event, width, height) => {
            this.renderer.resize(width, height);
            
            store.dispatch({type: "viewport/set-size", payload: {width, height}});

            //EngineEmitter.emit("windowresize", {width, height});
        });
    }
);

export default EngineListeners;

