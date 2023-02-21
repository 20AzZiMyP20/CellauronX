const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const start = function () {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 400,
        minHeight: 300,
        frame: false,
        acceptFirstMouse: true,
        useContentSize: true,
        center: true,
        webPreferences: {
            preload: path.resolve(__dirname, "./preload.js"),
            nodeIntegration: true,
            contextIsolation: true,
        },
    });

    ipcMain.on("collapse", () => window.isMinimized() ? window.restore() : window.minimize());
    ipcMain.on("expand", () => window.isMaximized() ? window.restore() : window.maximize());
    ipcMain.on("close", () => window.close());

    window.loadFile("./index.html");
};

app.on("ready", start);