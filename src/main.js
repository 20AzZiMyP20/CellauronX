const { app, BrowserWindow } = require("electron");

const createWindow = function () {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: "./preload.js",
            nodeIntegration: true,
        },
    });

    window.loadFile("./index.html");
};

app.on("ready", createWindow);