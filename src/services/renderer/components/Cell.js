import { Container, Graphics, Sprite, Texture } from "pixi.js";

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

    }

    get x() {
        return this.position.x / this.width;
    }
    set x(value) {
        this.position.x = value * this.width;
    }
    get y() {
        return this.position.y / this.height;
    }
    set y(value) {
        this.position.y = value * this.height;
    }
}

export default Cell;