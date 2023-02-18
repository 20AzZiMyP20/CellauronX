import { Container, Geometry, Graphics, Rectangle, Sprite, Texture } from "pixi.js";
import GridListeners from "../../../events/GridListeners.js";
import { store } from "../../../store/pixi.js";
import { engine } from "../../../services/renderer/Engine.js";
import Cell from "./Cell.js";
import { stage } from "./Stage.js";
import PixiObserver from "../../../store/observers/PixiObserver.js";

let CELL, GRID, VIEWPORT;

PixiObserver.subscribe((state) => state.cell, (cell) => CELL = cell);
PixiObserver.subscribe((state) => state.grid, (grid) => GRID = grid);
PixiObserver.subscribe((state) => state.viewport, (viewport) => VIEWPORT = viewport);


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

        GridListeners.init(this);
    }

    centerBySelf() {
        const [ countX, countY ] = this.#getCounts();

        const anchorX = Math.floor((countX) * 0.5) * CELL.size;
        const anchorY = Math.floor((countY) * 0.5) * CELL.size;

        this.pivot.set(anchorX, anchorY);
    }

    centerByScreen() {
        const [countX, countY] = this.#getCounts();

        this.x = Math.trunc((countX) * 0.5 - (stage.x / CELL.size));
        this.y = Math.trunc((countY) * 0.5 - (stage.y / CELL.size));
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

    #createCell(x, y) {
        const cell = new Graphics();
        cell.lineStyle({ color: GRID.color, width: GRID.width });
        cell.drawRect(x * CELL.size, y * CELL.size, CELL.size, CELL.size);

        return cell;
    }

    #getCounts(){
        const countY = Math.floor(VIEWPORT.size.height / CELL.size);
        const countX = Math.floor(VIEWPORT.size.width / CELL.size);

        return [countX, countY];
    }

    get x() {
        return this.position.x / CELL.size;
    }
    set x(value) {
        this.position.x = value * CELL.size;
    }
    get y() {
        return this.position.y / CELL.size;
    }
    set y(value) {
        this.position.y = value * CELL.size;
    }
}

export const grid = new Grid();