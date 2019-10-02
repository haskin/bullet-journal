import React from "react";
import "./css/Nav.css";

const Nav = () => {
    const saveClickHandler = () => {
        console.log("in save");
    }
    return (
        <nav className="navbar">
            <button className="navbar__save" onClick={saveClickHandler}type="button">Save</button>
        </nav>
    );
}

export default Nav;