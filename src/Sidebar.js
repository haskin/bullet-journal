import React from 'react';
import {Link} from "react-router-dom"
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h3 className="sidebar-logo" >Logs</h3>
            <ul className="sidebar-links">
                <Link to="/future"><li>Future</li></Link>
                <Link to="/monthly"><li>Monthly</li></Link>
            </ul>
        </div>
    );
};

export default Sidebar;