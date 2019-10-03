import React from "react";
import {getFutureLocalStorage as getFuture} from "./local-storage.js";
import "./css/Nav.css";

const Nav = () => {
    const saveClickHandler = () => {
        // const data= require("./db.json");
        // console.log(data);
        const futureData = getFuture();
    }

    const loadFile = (event) => {
        //const inputFile = document.getElementsByClassName("inputFile").files[0];
        const file = event.target.files[0];

        let reader = new FileReader();
        //Get text from a file and parses as JSON
        reader.onload = function(file) {
            console.log(JSON.parse(file.target.result));
        }
        //Triggers the onload property
        reader.readAsText(file);
        
    }
    return (
        <nav className="navbar">
            <button className="navbar__save" onClick={saveClickHandler}type="button">Save</button>
            <input className="inputFile" type="file" onChange={(event) => loadFile(event)}></input>
        </nav>
    );
}

export default Nav;