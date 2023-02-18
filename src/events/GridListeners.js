import { store } from "../store/pixi.js";
import CreateEventListener from "./CreateEventListener.js";
import { stage } from "../services/renderer/components/Stage.js";
import { EngineEmitter } from "./EngineEmitter.js";
import { Rectangle } from "pixi.js";
import PixiObserver from "../store/observers/PixiObserver.js";

let CELL;
PixiObserver.subscribe(state => state.cell, cell => CELL = cell);

const GridListeners = new CreateEventListener();

GridListeners.add(
    function () {
        this.on("click", (event) => {
            const cell = {
                x: Math.floor((event.globalX - stage.x) / CELL.size),
                y: Math.floor((event.globalY - stage.y) / CELL.size),
            };

            event.cell = cell;

            this.emit("clickcell", event);
        });
    },

    function () {
        stage.on("move", (event) => {
            const stageOffsetX = (stage.x - event.startStageGlobalX) / CELL.size;
            const stageOffsetY = (stage.y - event.startStageGlobalY) / CELL.size;

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

            console.log(coefX)

        });
    },
    function () {
        let prevSize = {width: 0, height: 0};

        PixiObserver.subscribe(state => state.viewport, ({size}) => {
            const prevX = this.x;
            const prevY = this.y;

            this.centerByScreen();

            this.offset.x += this.x - prevX;
            this.offset.y += this.y - prevY;

            if(
                Math.abs(size.width - prevSize.width) >= CELL.size ||
                Math.abs(size.height - prevSize.height) >= CELL.size 
                ) {
                this.draw();
                this.centerBySelf();
                prevSize = size;
            }

            this.hitArea = new Rectangle(0, 0, size.width + CELL.size, size.height + CELL.size);

        }, this);
    }
);

export default GridListeners;