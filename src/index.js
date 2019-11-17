import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar.js";
import Nav from "./Nav.js"
import Daily from "./Daily.js"
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
                    <Nav />
                    <Route path="/bullet-journal/daily" component={Daily}/>           
                    {/* <Daily /> */}
                    {/* <Monthly/> */}
                    <Route path="/bullet-journal/monthly" component={Monthly}/>
                    {/* <Future /> */}
                    <Route path="/bullet-journal/future" component={Future}/>
                   
                </div>
            </div>
        </Router>
    );
};

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, document.body);

// <div>

// </div>