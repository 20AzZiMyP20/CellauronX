class KeyBinder {
    constructor() {
        this.actions = new Map();
        this.binds = new Map();
    }

    setAction(name, elem, action) {
        this.actions.set(name, [elem, action]);
    }

    bindAction(name, keycode, preventDefault = true) {
        const [elem, action] = this.actions.get(name);

        const bind = (event) => {
            if (event.code !== keycode) return;
            if (preventDefault) event.preventDefault();
            action(event);
        };

        const options = {};

        elem.addEventListener("keydown", bind, options);

        this.binds.set(name, [elem, bind, options]);
    }

    unbindAction(name) {
        const [elem, bind, options] = this.binds.get(name);
        elem.removeEventListener("keydown", bind, options);

    }
}

export const keyBinder = new KeyBinder();