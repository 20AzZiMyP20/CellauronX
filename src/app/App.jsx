import React from "react";
import Stage from "./components/Stage.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";

function App(...props) {
    return (
        <div>
            <Topbar />
            <Stage />
            <Sidebar />
        </div>
        
    );
}

export default App;