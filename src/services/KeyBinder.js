import { basicRepo } from "./BasicRepository.js";

class KeyBinder {
    constructor() {
        this.actions = new Map();
        this.binds = new Map();
    }

    setAction(name, elem, action) {
        this.actions.set(name, [elem, action]);
    }

    bindAction(name, keycode, preventDefault = false) {
        const [elem, action] = this.actions.get(name);

        if (basicRepo.has(name)) {
            keycode = basicRepo.get(name);
        }

        const bind = (event) => {
            if (event.code !== keycode) return;
            if (preventDefault) event.preventDefault();
            action(event);
        };

        const options = {};

        elem.addEventListener("keydown", bind, options);

        this.binds.set(name, [elem, bind, options]);

        basicRepo.set(name, keycode);
    }

    unbindAction(name) {
        const [elem, bind, options] = this.binds.get(name);
        elem.removeEventListener("keydown", bind, options);

        if (basicRepo.has(name)) {
            basicRepo.remove(name);
        }
    }
}

export const keyBinder = new KeyBinder();