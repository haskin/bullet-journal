import React from "react";
import streamSaver from 'streamsaver'
import {getFutureLocalStorage as getFuture} from "./local-storage.js";
import "./css/Nav.css";

function new_script(src) {
    console.log(src);
    return new Promise(function(resolve, reject){
      var script = document.createElement('script');
      script.src = src;
      script.addEventListener('load', function () {
        resolve();
      });
      script.addEventListener('error', function (e) {
        reject(e);
      });
      document.body.appendChild(script);
    })
  };
  // Promise Interface can ensure load the script only once.
//   var my_script = new_script('./dummie.js');
new_script("https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js");
new_script("https://cdn.jsdelivr.net/npm/web-streams-polyfill@2.0.2/dist/ponyfill.min.js")
const Nav = () => {
    
    const saveClickHandler = () => {
        // const data= require("./db.json");
        // console.log(data);
        //const futureData = getFuture();
        const blob = new Blob(["This is text in a blob"]);
        streamSaver.WritableStream = streamSaver.WritableStream
        const fileStream = streamSaver.createWriteStream('sample.txt', {
            size: blob.size // Makes the procentage visiable in the download
          })
          // One quick alternetive way if you don't want the hole blob.js thing:
          // const readableStream = new Response(
          //   Blob || String || ArrayBuffer || ArrayBufferView
          // ).body
        //   const readableStream = blob.stream()
          // more optimized pipe version
          // (Safari may have pipeTo but it's useless without the WritableStream)
        //   if (window.WritableStream && readableStream.pipeTo) {
        //     return readableStream.pipeTo(fileStream)
        //       .then(() => console.log('done writing'))
        //   }  
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
        reader.readAsText(file, {
            "type": "application/json"
        });
    }
    return (
        <nav className="navbar">
            <button className="navbar__save" onClick={saveClickHandler}type="button">Save</button>
            <input className="inputFile" type="file" onChange={(event) => loadFile(event)}></input>
        </nav>
    );
}

export default Nav;