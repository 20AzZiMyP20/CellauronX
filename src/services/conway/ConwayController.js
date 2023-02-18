import ConwayControllerListener from "../../events/ConwayControllerListener.js";
import { PhantomCell } from "../renderer/components/PhantomCell.js";
import { engine } from "../renderer/Engine.js";
import { conway } from "./Conway.js";


class ConwayController {
    constructor() {
        engine.enableGrid();
        ConwayControllerListener.init(this);
    }

    hasCell(x, y) {
        return engine.hasCell(x, y);   
    }

    getCell(x, y) {
        return engine.getCell(x, y);
    }

    hasPhantomCell(x, y) {
        const cell = this.getPhantomCell(x, y);

        if (!cell) return false;
        return true;
    }

    getPhantomCell(x, y) {
        const cell = [...conway.cells].find(cell => cell.x === x &&
            cell.y === y &&
            cell instanceof PhantomCell
        );

        return cell;
    }

    birthCell(x, y) {
        const alives = conway.alives;
        const cells = conway.cells;
        const cell = engine.drawCell(x, y);

        if (!cell) return;

        cells.delete(this.getPhantomCell(x, y));
        alives.add(cell);
        cells.add(cell);

        conway.generatePhantomArea(x, y);
    }

    killCell(x, y) {
        const alives = conway.alives;
        const cells = conway.cells;
        const cell = engine.eraseCell(x, y);

        if (!cell) return;

        alives.delete(cell);
        cells.delete(cell);
        cells.add(new PhantomCell(x, y));
    }
}

export const conwayController = new ConwayController();