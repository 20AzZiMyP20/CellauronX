import ConwayControllerListener from "../../events/ConwayControllerListener.js";
import { conwayGetStepCount, conwaySetBase } from "../../store/actions/conwayAction.js";
import { PhantomCell } from "../renderer/components/PhantomCell.js";
import { engine } from "../renderer/Engine.js";
import { conway } from "./Conway.js";
import { conwayGenerator } from "./ConwayGenerator.js";


class ConwayController {
    constructor() {
        this.cachedSteps = [];
        this.cacheStep();

        engine.enableGrid();
        ConwayControllerListener.init(this);
    }

    cacheStep() {
        this.cachedSteps[conwayGetStepCount()] = [new Set(conway.cells), new Set(conway.alives)];
    }

    loadStep(number) {
        this.clear();

        this.cachedSteps[number][1].forEach(cell => this.birthCell(cell.x, cell.y));
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

        const base = conwayGenerator.createBase(conway.alives);      
        conwaySetBase(base);  
    }

    killCell(x, y) {
        const alives = conway.alives;
        const cells = conway.cells;
        const cell = engine.eraseCell(x, y);

        if (!cell) return;

        alives.delete(cell);
        cells.delete(cell);
        cells.add(new PhantomCell(x, y));

        const base = conwayGenerator.createBase(conway.alives);
        conwaySetBase(base);  
    }

    clear() {
        conway.alives.forEach(cell => this.killCell(cell.x, cell.y));
    }
}

export const conwayController = new ConwayController();