import EventEmitter from "eventemitter3";


const eventEmitter = new EventEmitter();

export class EngineEmitter {
    static on(...args) {
        return eventEmitter.on(...args);
    }

    static emit(...args) {
        return eventEmitter.emit(...args);
    }
}