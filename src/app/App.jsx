import React from "react";
import Stage from "./components/Stage.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import ThemeManager from "../services/ThemeManager.js";

function App(...props) {
    ThemeManager.activate("light");

    return (
        <div>
            <Topbar />
            <Stage />
            <Sidebar />
        </div>
        
    );
}

export default App;