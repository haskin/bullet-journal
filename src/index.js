import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Sidebar from "./Sidebar.js";
import Future from "./Future.js";
import Monthly from "./Monthly.js";


const App = () => {
    return (
        <div className="app-container">
            <Sidebar />
            <div className="main-body">
                {/* <Future /> */}
                
                 <Monthly/>
            </div>
        </div>
    );
};

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, document.body);

// <div>

// </div>