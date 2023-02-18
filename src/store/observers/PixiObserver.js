import { store } from "../pixi.js";

class PixiObserver {
    static subscribe(select, onchange, thisArg) {
        let currentState;

        const handler = function () {
            const nextState = select(store.getState());
            
            if (nextState !== currentState) {
                currentState = nextState;
                thisArg ? onchange.call(thisArg, currentState) : onchange(currentState);
            }
        };

        handler();

        return store.subscribe(handler);
    }
}

export default PixiObserver;

