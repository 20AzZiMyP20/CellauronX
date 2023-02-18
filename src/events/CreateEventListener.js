class CreateEventListener {
    constructor() {
        this.listeners = new Set();     
    }

    add(...listeners) {
        listeners.forEach(listener => this.listeners.add(listener));
    }

    init(self, ...args) {
        for (const listener of this.listeners.values()) {
            listener.call(self, ...args);
        }
    } 
}

export default CreateEventListener;