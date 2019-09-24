import React from 'react';
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h3 className="sidebar-logo" >Logs</h3>
            <ul className="sidebar-links">
                <li>Future</li>
                <li>Monthly</li>
            </ul>
        </div>
    );
};

export default Sidebar;