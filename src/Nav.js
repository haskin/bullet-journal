import React from "react";
// import streamSaver from 'streamsaver';
import {WritableStream} from "web-streams-polyfill/ponyfill";

import streamSaver from "./StreamSaver.js"
import "./css/Nav.css";
import {
        exportLocalStorage, 
        importLocalStorage} 
        from "./local-storage.js";

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

function new_script_too(src){
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
// document.body.appendChild(test);

const Nav = () => {
  window.addEventListener("storage", function(event) {
    console.log("storage change");
  });
    const saveClickHandler = () => { 
        // const data= require("./db.json");
        // console.log(data);
        //const futureData = getFuture();
        // const blob = new Blob(["This is text in a blob"]);
        // // streamSaver.WritableStream = streamSaver.WritableStream
        // const fileStream = streamSaver.createWriteStream('sample.txt', {
        //     size: blob.size // Makes the procentage visiable in the download
        //   })
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
        const ss = streamSaver.streamSaver();
        // const blob = new Blob(['StreamSaver is awesome'])
        const newJsonFile = exportLocalStorage();
        const blob = new Blob([newJsonFile]);
        const fileStream = ss.createWriteStream('sample.json', {
          size: newJsonFile.size // Makes the procentage visiable in the download
        });
        // One quick alternetive way if you don't want the hole blob.js thing:
        // const readableStream = new Response(
        //   Blob || String || ArrayBuffer || ArrayBufferView
        // ).body
        const readableStream = blob.stream()
        // more optimized pipe version
        // (Safari may have pipeTo but it's useless without the WritableStream)
        if (window.WritableStream && readableStream.pipeTo) {
          return readableStream.pipeTo(fileStream)
            .then(() => console.log('done writing'))
        }
        // Write (pipe) manually
        window.writer = fileStream.getWriter()
        const reader = readableStream.getReader()
        const pump = () => reader.read()
          .then(res => res.done
            ? window.writer.close()
            : window.writer.write(res.value).then(pump))
        pump()
    }

    const loadFile = (event) => {
        //const inputFile = document.getElementsByClassName("inputFile").files[0];
        const file = event.target.files[0];

        let reader = new FileReader();
        //Get text from a file and parses as JSON
        reader.onload = function(file) {
            // console.log(JSON.parse(file.target.result));
            importLocalStorage((file.target.result));
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