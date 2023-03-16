class BasicRepository {
    get(key) {
        const item = localStorage.getItem(key);
        return JSON.parse(item);
    }

    set(key, value) {
        const item = JSON.stringify(value);
        localStorage.setItem(key, item);
    }

    remove(key) {
        localStorage.removeItem(key);
    }

    has(key) {
        return localStorage.getItem(key) ? true : false;
    }
}

export const basicRepo = new BasicRepository();