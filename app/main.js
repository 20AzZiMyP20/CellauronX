(()=>{"use strict";const{app:e,BrowserWindow:i,ipcMain:n}=require("electron"),o=require("path");e.on("ready",(function(){const e=new i({width:800,height:600,minWidth:400,minHeight:300,frame:!1,acceptFirstMouse:!0,useContentSize:!0,center:!0,webPreferences:{preload:o.resolve(__dirname,"./preload.js"),nodeIntegration:!0,contextIsolation:!0,devTools:!1}});n.on("collapse",(()=>e.isMinimized()?e.restore():e.minimize())),n.on("expand",(()=>e.isMaximized()?e.restore():e.maximize())),n.on("close",(()=>e.close())),e.loadFile("./index.html")}))})();