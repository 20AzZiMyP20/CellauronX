import { grid } from "../services/renderer/components/Grid.js";
import { engine } from "../services/renderer/Engine.js";
import { cellGetSize, cellSetSize } from "../store/actions/cellAction.js";
import { viewportGetSize } from "../store/actions/viewportAction.js";
import CreateEventListener from "./CreateEventListener.js";

const StageListeners = new CreateEventListener();

StageListeners.add(
    function () {
        const parent = {};

        const move = (event) => {
            Object.assign(event, parent);
            this.emit("globalpointermovewhiledown", event);
        };

        const beginMove = (event) => {
            engine.setPointerCapture(event.pointerId);

            parent.startGlobalX = event.globalX;
            parent.startGlobalY = event.globalY;
            parent.stageGlobalX = this.x;
            parent.stageGlobalY = this.y;

            this.on("globalpointermove", move);
        }

        const stopMove = (event) => {
            console.log("pointer up")
            engine.releasePointerCapture(event.pointerId);
            this.off("globalpointermove", move);
        };

        this.on("pointerdown", beginMove);
        this.on("pointerup", stopMove);
        this.on("pointerupoutside", stopMove);
    },

    function () {
        const startPosition = {
            globalX: this.x,
            globalY: this.y,
        };

        this.on("globalpointermovewhiledown", (event) => {

            const offsetX = event.startGlobalX - event.stageGlobalX;
            const offsetY = event.startGlobalY - event.stageGlobalY;

            this.x = event.globalX - offsetX;
            this.y = event.globalY - offsetY;

            event.startStageGlobalX = startPosition.globalX;
            event.startStageGlobalY = startPosition.globalY;

            this.emit("move", event);
            console.log(this.x, this.y)
        });
    },
    function () {
        this.on("wheel", (event) => {
            const cellSize = cellGetSize()
            cellSetSize(+(cellSize + cellSize * 1 / 300 * event.deltaY).toFixed(2))
        });
    }
);

export  default StageListeners;