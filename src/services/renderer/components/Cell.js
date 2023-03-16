import { Sprite, Texture } from "pixi.js";
import { cellGetSize, cellGetColor } from "../../../store/actions/cellAction.js";

class Cell extends Sprite{
    static key({x, y}) {
        return "" + x + y;
    }

    constructor({x, y, width, height, color, texture}) {
        super(texture || Texture.WHITE);

        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.tint = color;

        let prevX = x;
        let prevY = y;

        cellGetColor(color => this.tint = color);
        cellGetSize(size => {
            prevX = this.x;
            prevY = this.y;

            this.width = size; 
            this.height = size;

            this.x = prevX;
            this.y = prevY;
        });

    }

    setColor(color) {
        this.tint = color;
    }

    getColor() {
        this.tint = color;
    }
    
    get x() {
        return Math.round(this.position.x / this.width);
    }
    set x(value) {
        this.position.x = value * this.width;
    }
    get y() {
        return Math.round(this.position.y / this.height);
    }
    set y(value) {
        this.position.y = value * this.height;
    }
}

export default Cell;