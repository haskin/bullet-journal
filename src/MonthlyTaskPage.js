import React, {useState} from "react";
import {getMonthlyLocalStorage as getMonthly,
        setMonthlyTaskLocalStorage as setMonthlyTask} 
        from "./local-storage.js"

const MonthlyTaskPage = ({monthIndex}) => {
    const [input, setInput] = useState('');
    const [symbol, setSymbol] = useState('.');
    const [bullets, setBullets] = useState([]);
    
    //Changes the input box text to a blank string
    const resetInputValue = () => {
        document.getElementsByClassName("monthlyTaskAdd__input")[0].value = "";  
    }

    const inputChangeHandler = (e) => {
        setInput(e.target.value);
    }

    const addTaskHandler = (e) => {
        const newBullet = { 
            symbol:symbol,
            content: input
        }
        console.log("in add task");
        const noDeleteIndex = true;
        setMonthlyTask(monthIndex, newBullet);
        setBullets(getMonthly()[monthIndex].tasks);
        resetInputValue();
    }

    const symbolChangeHandler = (e) => {
        setSymbol(e.target.value);
    }

    const deleteBulletHandler = (deleteIndex) => {
        return () => {
                setMonthlyTask(monthIndex, null, deleteIndex);
                setBullets(getMonthly()[monthIndex].tasks);
                setInput(''); 
        }
    }
    return (
        <div className="monthlyTask">
            <h1 className="monthlyHeader">Tasks</h1>
            <div className="monthlyTaskAdd">
                <select onChange={symbolChangeHandler}>
                <option value=".">.</option>
                    <option value="-">-</option>
                    <option value="o">o</option>
                </select>
                <input className="monthlyTaskAdd__input" onChange={inputChangeHandler} type="text"/>
                <button className="monthlyTaskAdd__button" onClick={addTaskHandler} type="button">Add</button>
            </div>
            {bullets.map((bullet,index) => ( <div className="monthlyTaskTasks">
                                                <li className="monthlyTaskTasks__bullet" key={index}><span className="globalSymbol">{bullet.symbol}</span><span className="globalContent">{bullet.content}</span></li>
                                                <button className="monthlyTaskTasks__deleteButton" onClick={deleteBulletHandler(index)} type="click">Delete</button>
                                            </div>
                                            )
                                            
                        )
            }
        </div>
    );
}

export default MonthlyTaskPage;