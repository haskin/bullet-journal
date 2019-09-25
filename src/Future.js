import React, {useState, useEffect} from "react"
import {getFutureLocalStorage as getFuture, 
        setFutureLocalStorage as setFuture, 
        getFutureLocalStorageBullets as getBullets
        } from "./local-storage.js"
import "./css/Future.css"

const Month = ({month}) => {
    const [input, setInput] = useState('');
    const [bullets, setBullets] = useState(month.bullets);
    const [symbol, setSymbol] = useState('.');

    const inputChangeHandler = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }

    const submitTaskHandler = (e) => {
        e.preventDefault();
        const newBullet = { 
            symbol:symbol,
            content: input
        }
        setFuture(month.id, newBullet);
        const newBullets = getBullets(month.id);
        setBullets(newBullets);
    }

    const symbolChangeHandler = (e) => {
        setSymbol(e.target.value);   
    }
    return (
        <>
            <h3>{month.name}</h3>
            {bullets.map((bullet, index) => <p key={index}>{bullet.symbol}{"   "}{bullet.content}</p>)}
            <form className="month-container-form">
                <input type="text" onChange={inputChangeHandler}></input>          
                <select onChange={symbolChangeHandler}>
                <option value=".">.</option>
                    <option value="-">-</option>
                    <option value="o">o</option>
                </select>
                <button type="submit" onClick={submitTaskHandler}>submit</button>
            </form>
        </>
    );
};

const Future = () => {
    const months = getFuture();
    return (
        <div className="future-container">
            {months.map(month => <div className="month-container">
                <Month month={month}/>
            </div>)}
        </div>
    );
};

export default Future

