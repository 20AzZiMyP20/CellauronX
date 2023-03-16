import CreateEventListener from "./CreateEventListener.js";
import { stage } from "../services/renderer/components/Stage.js";
import { cellGetSize, cellSetSize } from "../store/actions/cellAction.js";
import { viewportGetSize } from "../store/actions/viewportAction.js";
import { gridGetColor, gridGetWidth } from "../store/actions/gridAction.js";

const GridListeners = new CreateEventListener();

GridListeners.add(
    function () {
        let isClicked = false;

        const click = (event) => {
            const cellSize = cellGetSize();

            const cell = {
                x: Math.floor((event.globalX - stage.x) / cellSize),
                y: Math.floor((event.globalY - stage.y) / cellSize),
            };

            event.cell = cell;

            this.emit("clickcell", event);
        };

        this.on("pointerdown", () => isClicked = true);
        this.on("globalpointermove", () => isClicked = false);
        this.on("click", (event) => isClicked && click(event));
    },

    function () {
        stage.on("move", (event) => {
            const cellSize = cellGetSize();

            const stageOffsetX = (stage.x - event.startStageGlobalX) / cellSize;
            const stageOffsetY = (stage.y - event.startStageGlobalY) / cellSize;

            const selfOffsetX = this.x - this.offset.x;
            const selfOffsetY = this.y - this.offset.y;

            const coefX = Math.trunc(stageOffsetX + selfOffsetX);
            const coefY = Math.trunc(stageOffsetY + selfOffsetY);

            if (stageOffsetX + selfOffsetX >= 1) {
                this.x -= coefX;
            }
            if (stageOffsetX + selfOffsetX <= -1) {
                this.x += -coefX;
            }
            if (stageOffsetY + selfOffsetY >= 1) {
                this.y -= coefY;
            }
            if (stageOffsetY + selfOffsetY <= -1) {
                this.y += -coefY;
            }

        });
    },
    function () {
        let prevSize = {width: 0, height: 0};

        viewportGetSize((size) => {
            const cellSize = cellGetSize();
            const offsetWidth = size.width - prevSize.width;
            const offsetHeight = size.height - prevSize.height;

            const prevX = this.x;
            const prevY = this.y;

            this.centerByScreen();

            this.offset.x += this.x - prevX;
            this.offset.y += this.y - prevY;

            if(
                Math.abs(offsetWidth) >= cellSize ||
                Math.abs(offsetHeight) >= cellSize 
                ) {
                
                this.draw();
                this.centerBySelf();
                prevSize = size;
            }

            this.updateHitArea();

        }, this);
    },
    function () {
        gridGetColor(() => this.draw(), this);
    },

    function () {
        gridGetWidth(() => {
            this.draw();
        }, this);
    },

    function () {
        let prevCellSize = cellGetSize();

        cellGetSize((cellSize) => {
            this.offset.x *= prevCellSize / cellSize
            this.offset.y *= prevCellSize / cellSize

            this.draw();
            this.centerBySelf();
            this.centerByScreen();

            prevCellSize = cellSize
        }, this);
    },
);

export default GridListeners;