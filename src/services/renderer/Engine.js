import { Ticker } from "pixi.js";
import EngineListeners from "../../events/EngineListeners.js";
import Cell from "../../services/renderer/components/Cell.js";
import { grid } from "../../services/renderer/components/Grid.js";
import { cellGetColor, cellGetSize } from "../../store/actions/cellAction.js";
import { stage } from "./components/Stage.js";
const cellSize = cellGetSize();
class Engine {
    constructor() {
        this.ticker = new Ticker();
        this.cells = new Map();
        EngineListeners.init(this);

    }

    start() {
        const { renderer, ticker } = this;
        
        const render = () => renderer.render(stage);
        ticker.add(render);
        ticker.start();
    }

    drawCell(x, y) {
        
        const cellColor = cellGetColor();

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

    setPointerCapture(pointerId) {
        return this.renderer.view.setPointerCapture(pointerId);
    }

    releasePointerCapture(pointerId) {
        return this.renderer.view.releasePointerCapture(pointerId);
    }
}

export const engine = new Engine();