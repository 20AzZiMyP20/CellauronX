import { store } from "../store.js";

export function createGetAction(select) {
    return function (callback, ...rest) {
        const uncallback = rest.find(arg => typeof arg === "function");
        const thisArg = rest.find(arg => typeof arg === "object");

        let currentState

        if (typeof callback !== "function") 
            return select(store.getState());

        function handleChange() {
            const nextState = select(store.getState());

            if (nextState === currentState) 
                return

            currentState = nextState;

            callback.call(thisArg, currentState);
        }

        const unsubscriber = store.subscribe(handleChange);
        handleChange()

        if (typeof uncallback === "function") {
            uncallback(unsubscriber);
        }

        return currentState;
    }
}
