import React, {useState, useEffect} from "react"
import "./css/Future.css"

const months = [{name:"January",bullets:[]},
{name:"February",bullets:[]},
{name:"March",bullets:[]},
{name:"April",bullets:[]},
{name:"May",bullets:[]},
{name:"June",bullets:[]},
{name:"July",bullets:[]},
{name:"August",bullets:[]},
{name:"September",bullets:[]},
{name:"October",bullets:[]},
{name:"November",bullets:[]},
{name:"December",bullets:[]},
]



const Month = ({month}) => {
    const [input, setInput] = useState('');
    const [bullets, setBullets] = useState([]);
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
        setBullets(bullets.concat(newBullet));
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
    return (
        <div className="future-container">
            {months.map(month => <div className="month-container">
                <Month month={month}/>
            </div>)}
        </div>
    );
};

export default Future

