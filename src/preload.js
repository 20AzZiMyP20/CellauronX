const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
    on: (...args) => ipcRenderer.on(...args),
});