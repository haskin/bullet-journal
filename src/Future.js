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

    const deleteClickHandler = (index) => {
        return () => {
            setFuture(month.id, null, index);
            const newBullets = getBullets(month.id);
            setBullets(newBullets);
        }
    }
    return (
        <>
            <h2 className="monthContainer__header">{month.name}</h2>
            <form className="month-container-form">
                <select onChange={symbolChangeHandler}>
                    <option value=".">.</option>
                    <option value="-">-</option>
                    <option value="o">o</option>
                </select>
                <input type="text" onChange={inputChangeHandler}></input>          
                <button type="submit" onClick={submitTaskHandler}>submit</button>
            </form>
            {bullets.map((bullet, index) =>
                <div className="dayContainer__bulletContainer">
                    <li key={index} className="bulletContainer__bullet"><span className="globalSymbol">{bullet.symbol}</span><span className="globalContent">{bullet.content}</span></li>
                    <button className="bulletContainer__delete" onClick={deleteClickHandler(index)} type="button">Delete</button>
                </div>
            )} 
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

