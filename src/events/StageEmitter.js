import EventEmitter from "eventemitter3";


const eventEmitter = new EventEmitter();

export class StageEmitter {
    static on(...args) {
        return eventEmitter.on(...args);
    }

    static emit(...args) {
        return eventEmitter.emit(...args);
    }
}