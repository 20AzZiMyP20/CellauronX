import Cell from "../services/renderer/components/Cell.js";
import { engine } from "../services/renderer/Engine.js";
import CreateEventListener from "./CreateEventListener.js";
import { EngineEmitter } from "./EngineEmitter.js";
import EngineListeners from "./EngineListeners.js";

const ConwayControllerListener = new CreateEventListener();

ConwayControllerListener.add(
    function () {
        EngineEmitter.on("cellclicked", ({ x, y }) => {
            if (engine.cells.has(Cell.key({ x, y }))) {
                this.killCell(x, y);

            }
            else {
                this.birthCell(x, y);
            }
        });
    },
    function () {
        EngineEmitter.on("stageload", (stage) => {
            engine.start();
        });
    }
);

export default ConwayControllerListener;