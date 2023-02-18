const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const createWindow = function () {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        useContentSize: true,
        center: true,
        webPreferences: {
            preload:  path.resolve(__dirname, "./preload.js"),
            nodeIntegration: true,
        },
    });

    window.on("will-resize", (event) => {
        const [ widthContent, heightContent ] = window.getContentSize();

        window.webContents.send("WINDOW_RESIZE", widthContent, heightContent);
    });

    window.on("maximize", (event) => {
        const [widthContent, heightContent] = window.getContentSize();
        console.log("fullscreened")

        window.webContents.send("WINDOW_RESIZE", widthContent, heightContent);
    });

    window.on("minimize", (event) => {
        const [widthContent, heightContent] = window.getContentSize();

        window.webContents.send("WINDOW_RESIZE", widthContent, heightContent);
    });

    window.loadFile("./index.html");
};

app.on("ready", createWindow);