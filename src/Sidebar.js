import React from 'react';
import {Link} from "react-router-dom"
import "./css/Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h3 className="sidebar-logo" >Logs</h3>
            <ul className="sidebar-links">
                <Link to="/bullet-journal/daily"><li>Daily</li></Link>
                <Link to="/bullet-journal/monthly"><li>Monthly</li></Link>
                <Link to="/bullet-journal/future"><li>Future</li></Link>
            </ul>
        </div>
    );
};

export default Sidebar;