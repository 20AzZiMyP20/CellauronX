import { Renderer, Ticker } from "pixi.js";
import { EngineEmitter } from "../../events/EngineEmitter.js";
import EngineListeners from "../../events/EngineListeners.js";
import { store } from "../../store/pixi.js";
import Cell from "../../services/renderer/components/Cell.js";
import { grid } from "../../services/renderer/components/Grid.js";
import { stage } from "./components/Stage.js";
import PixiObserver from "../../store/observers/PixiObserver.js";

const VIEWPORT = store.getState().viewport;
let CELL;
PixiObserver.subscribe(state => state.cell, cell => CELL = cell);

class Engine {
    constructor() {
        this.ticker = new Ticker();
        this.cells = new Map();
        
        EngineEmitter.on("stageload", (stage) => {
            this.renderer = new Renderer({
                width: VIEWPORT.size.width,
                height: VIEWPORT.size.height,
                backgroundColor: VIEWPORT.color,
                view: stage.current,
            });
        });

        EngineListeners.init(this);

    }

    start() {
        const { renderer, ticker } = this;
        
        const render = () => renderer.render(stage);
        ticker.add(render);
        ticker.start();
    }

    drawCell(x, y) {
        const { size: cellSize, color: cellColor } = CELL; 

        if (this.cells.has(Cell.key({x, y}))) return;

        const cell = new Cell({
            x: x,
            y: y,
            width: cellSize,
            height: cellSize,
            color: cellColor,
        });

        this.cells.set(Cell.key(cell), cell);
        stage.addChild(cell);

        return cell;

    }

    eraseCell(x, y) {
        const cell = this.cells.get(Cell.key({x, y}));

        if (!cell) return;

        stage.removeChild(cell);
        this.cells.delete(Cell.key({x, y}));

        return cell;
    }

    getCell(x, y) {
        const cell = this.cells.get(Cell.key({ x, y }));

        return cell;
    }

    hasCell(x, y) {
        return this.cells.has(Cell.key({ x, y }));
    }

    enableGrid() {
        stage.addChild(grid);
    }

    disableGrid() {
        stage.removeChild(grid);
    }
}

export const engine = new Engine();