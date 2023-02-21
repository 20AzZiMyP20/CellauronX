import { store } from "../store.js"

export function createSetAction(action) {
    if (typeof action === "function") action = action();

    return function(payload) {
        action.payload = payload;
        
        store.dispatch(action)
    }
}