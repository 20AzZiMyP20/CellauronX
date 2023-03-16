import React from "react";
import Stage from "./components/Stage.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import ThemeManager from "../services/ThemeManager.js";
import { themeGetActivatedName } from "../store/actions/themeAction.js";

function App(...props) {
    const name = themeGetActivatedName();
    ThemeManager.activate(name);

    return (
        <div>
            <Topbar />
            <Stage />
            <Sidebar />
        </div>
        
    );
}

export default App;