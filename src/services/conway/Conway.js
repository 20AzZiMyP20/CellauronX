import ConwayListener from "../../events/ConwayListener.js";
import PixiObserver from "../../store/observers/PixiObserver.js";
import { PhantomCell } from "../renderer/components/PhantomCell.js";
import { conwayController } from "./ConwayController.js";

let CONWAY;
PixiObserver.subscribe(state => state.conway, conway => CONWAY = conway);

class Conway {
    constructor() {
        this.cells = new Set();
        this.alives = new Set();
        this.status = "paused";

        ConwayListener.init(this);

        /////---TEST
        let id;
        addEventListener("keydown", (event) => {
            
            switch (event.code) {
                case "Space":
                    if (this.status === "paused") {
                        id = setInterval(() => this.step(), CONWAY.speed);
                        this.status = "plays";
                        break;
                    }

                    if (this.status === "plays") {
                        clearInterval(id);
                        this.status = "paused";
                    }

            
                default:
                    break;
            }
        });
        /////----TEST
    }

    getNeightCoords(x, y) {
        const coords = [];

        coords.push({x: x - 1, y: y - 1});
        coords.push({ x: x, y: y - 1 });
        coords.push({ x: x + 1, y: y - 1 });

        coords.push({ x: x - 1, y: y});
        //coords.push({ x: x, y: y});
        coords.push({ x: x + 1, y: y});

        coords.push({ x: x - 1, y: y + 1 });
        coords.push({ x: x, y: y + 1 });
        coords.push({ x: x + 1, y: y + 1 });

        return coords;
    }

    getNeightCells(x, y){
        const neightCoords = this.getNeightCoords(x, y);
        const cells = [];

        for (const neightCoord of neightCoords) {
            if (!conwayController.hasCell(neightCoord.x, neightCoord.y) &&
                !conwayController.hasPhantomCell(neightCoord.x, neightCoord.y)
            ) continue;

            const cell = conwayController.getCell(neightCoord.x, neightCoord.y) || 
                conwayController.getPhantomCell(neightCoord.x, neightCoord.y);

            cells.push(cell);
        }

        return cells;
    }

    generatePhantomArea(x, y) {
        const neightCoords = this.getNeightCoords(x, y);

        for (const neightCoord of neightCoords) {
            if (conwayController.hasCell(neightCoord.x, neightCoord.y) ||
                conwayController.hasPhantomCell(neightCoord.x, neightCoord.y)
            ) continue;

            const phantomCell = new PhantomCell(neightCoord.x, neightCoord.y);
            this.cells.add(phantomCell);
        }
    }

    step() {
        const birthNeeded = new Set();
        const killNeeded = new Set();
        const neightbours = [];

        for (const alive of this.alives) {
            const neightCells = this.getNeightCells(alive.x, alive.y);

            neightCells.forEach(neight => neightbours.push(neight));
        }

        for (const cell of this.cells) {
            const count = countElemInArray(cell, neightbours);

            if (count === 3) birthNeeded.add(cell);
            else if (count !== 2) killNeeded.add(cell);
        }

        birthNeeded.forEach(cell => conwayController.birthCell(cell.x, cell.y));
        killNeeded.forEach(cell => conwayController.killCell(cell.x, cell.y));

    }

}

function countElemInArray(elem, arr) {
    let count = 0;

    arr.forEach(item => elem === item && count++);

    return count;
}
export const conway = new Conway();