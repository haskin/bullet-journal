import React, {useState} from "react";

const MonthlyTaskPage = () => {
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
        setBullets(bullets.concat(newBullet));
        resetInputValue();
    }

    const symbolChangeHandler = (e) => {
        setSymbol(e.target.value);
    }

    const deleteBulletHandler = (deleteIndex) => {
        const newBullets = bullets.filter((bullet,index) => index != deleteIndex);
        return () => {
                setBullets(newBullets);
                setInput(''); 
        }
    }
    return (
        <div className="monthlyTask">
            <h1 className="monthlyHeader">Tasks</h1>
            <div className="monthlyTaskAdd">
                <input className="monthlyTaskAdd__input" onChange={inputChangeHandler} type="text"/>
                <select onChange={symbolChangeHandler}>
                <option value=".">.</option>
                    <option value="-">-</option>
                    <option value="o">o</option>
                </select>
                <button className="monthlyTaskAdd__button" onClick={addTaskHandler} type="button">Add A Task</button>
            </div>
            {bullets.map((bullet,index) => ( <div className="monthlyTaskTasks">
                                                <li className="monthlyTaskTasks__bullet" key={index}>{bullet.symbol}{bullet.content}</li>
                                                <button className="monthlyTaskTasks__deleteButton" onClick={deleteBulletHandler(index)} type="click">Delete</button>
                                            </div>
                                            )
                                            
                        )
            }
        </div>
    );
}

export default MonthlyTaskPage;