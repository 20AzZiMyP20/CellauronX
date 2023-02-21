import { Container, Graphics, Rectangle } from "pixi.js";
import GridListeners from "../../../events/GridListeners.js";
import Cell from "./Cell.js";
import { stage } from "./Stage.js";
import { cellGetSize } from "../../../store/actions/cellAction.js";
import { viewportGetSize } from "../../../store/actions/viewportAction.js";
import { gridGetState } from "../../../store/actions/gridAction.js";

class Grid extends Container {
    constructor() {
        super();

        this.x = 0;
        this.y = 0;
        this.offset = {x: 0, y: 0};

        this.cells = new Map();
        this.interactive = true;
        this.zIndex = 1000;
        
        this.draw();
        this.centerBySelf();
        this.centerByScreen();
        this.updateHitArea();

        GridListeners.init(this);
    }

    centerBySelf() {
        const [ countX, countY ] = this.#getCounts();
        const cellSize = cellGetSize();

        const anchorX = Math.floor((countX) * 0.5) * cellSize;
        const anchorY = Math.floor((countY) * 0.5) * cellSize;

        this.pivot.set(anchorX, anchorY);
    }

    centerByScreen() {
        const [countX, countY] = this.#getCounts();
        const cellSize = cellGetSize();

        this.x = Math.trunc((countX) * 0.5 - (stage.x / cellSize));
        this.y = Math.trunc((countY) * 0.5 - (stage.y / cellSize));
    }

    draw() {
        const [ countX, countY ] = this.#getCounts();

        const childrends = []; 

        for (let y = -2; y < countY + 2; y++) {
            for (let x = -2; x < countX + 2; x++) {
                const cell = this.#createCell(x, y);

                this.cells.set(Cell.key({x, y}), cell);
                childrends.push(cell);
            }
        }

        this.removeChildren(0);
        this.addChild(...childrends);
    }

    updateHitArea() {
        const cellSize = cellGetSize();
        const viewportSize = viewportGetSize();

        this.hitArea = new Rectangle(-cellSize, -cellSize, viewportSize.width + cellSize, viewportSize.height + cellSize);
    }

    #createCell(x, y) {
        const cellSize = cellGetSize();
        const {color: gridColor, width: gridWidth} = gridGetState();

        const cell = new Graphics();
        cell.lineStyle({ color: gridColor, width: gridWidth });
        cell.drawRect(x * cellSize, y * cellSize, cellSize, cellSize);


        return cell;
    }

    #getCounts(){
        const cellSize = cellGetSize();
        const viewportSize = viewportGetSize();

        const countY = Math.floor(viewportSize.height / cellSize);
        const countX = Math.floor(viewportSize.width / cellSize);

        return [countX, countY];
    }

    get x() {
        const cellSize = cellGetSize();
        return this.position.x / cellSize;
    }
    set x(value) {
        const cellSize = cellGetSize();
        this.position.x = value * cellSize;
    }
    get y() {
        const cellSize = cellGetSize();
        return this.position.y / cellSize;
    }
    set y(value) {
        const cellSize = cellGetSize();
        this.position.y = value * cellSize;
    }
}

export const grid = new Grid();