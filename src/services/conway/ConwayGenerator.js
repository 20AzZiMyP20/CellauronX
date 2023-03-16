import { conwayController } from "./ConwayController.js";

class ConwayGenerator {
    generateBySeed(seed) {

    }

    generateByBase(base) {
        const cells = JSON.parse(atob(base));

        conwayController.clear();
        cells.forEach(cell => conwayController.birthCell(cell.x, cell.y));
    }

    createBase(cells) {
        const base = [];

        cells.forEach(cell => base.push({x: cell.x, y: cell.y}));

        return btoa(JSON.stringify(base));
    }
}

export const conwayGenerator = new ConwayGenerator();