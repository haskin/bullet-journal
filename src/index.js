import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar.js";
import Future from "./Future.js";
import Monthly from "./Monthly.js";


// import data from "./db.json";
import localStorage from "./local-storage.js";
localStorage();
const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Sidebar />
                <div className="main-body">
                    {/* <Future /> */}
                    <Route path="/future" component={Future}/>
                    {/* <Monthly/> */}
                    <Route path="/monthly" component={Monthly}/>
                </div>
            </div>
        </Router>
    );
};

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, document.body);

// <div>

// </div>