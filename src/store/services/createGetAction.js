import { store } from "../store.js";

export function createGetAction(select) {
    return function (callback, thisArg) {
        // const uncallback = rest.find(arg => typeof arg === "function");
        // const thisArg = rest.find(arg => typeof arg === "object");

        let currentState;

        function handleChange() {
            const nextState = select(store.getState());

            if (nextState !== currentState) {
                currentState = nextState;
                if (typeof callback === "function") callback.call(thisArg, currentState);
            }
        }

        const unsubscribe = store.subscribe(handleChange);

        if (typeof uncallback === "function") uncallback(unsubscribe);
        handleChange();

        return currentState;
    }
}
