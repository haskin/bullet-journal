import React, {useState} from "react";
import "./css/Daily.css";
//Converts the month to how days have passed before it
function monthToDaysPassed(month) {
    const dayAmountByMonth = [
        0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ]
    //Slice is non-inclusive so we need to add 1 to the end
    const daysPassed = dayAmountByMonth.slice(0, month + 1);
    return(daysPassed.reduce((acc, val) => acc + val,0));
}

function toDayOfTheWeek(day){
    const daysOfTheWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return daysOfTheWeek[day];
}


class DayElement {
    constructor(date){
        //Month is zero-indexed so we need to add 1
        this.month = date.getMonth() + 1;
        this.day = date.getDate();
        this.name = toDayOfTheWeek(date.getDay());
        /* -1 because it's 0 indexed
            e.g. Jan 1 is the 0 day in Jan */
        this.index = monthToDaysPassed(date.getMonth()) + 
                     (this.day  - 1);
        //this.bullets
    }
};

function createToday(date) {
    return new DayElement(date);
}

const AddBulletInput = ({index, bullets, setBullets}) => {
    const [input, setInput] = useState('');
    const [symbol, setSymbol] = useState('.');

    const inputChangeHandler = (e) => {
        setInput(e.target.value);
    }

    const symbolChangeHandler = (e) => {
        setSymbol(e.target.value);
    }

    const addBulletHandler = (e) => {
        const newBullet = { 
            symbol:symbol,
            content: input
        }
        const newBullets = [...bullets];
        newBullets[index].push(newBullet);
        // console.log(newBullets);
        // console.log(typeof newBullets[index]);
        setBullets(newBullets);
        // resetInputValue();
    }
    return(
        <div className="dailyBulletAdd">
                    <input className="dailyBulletAdd__input" onChange={inputChangeHandler} type="text"/>
                    <select onChange={symbolChangeHandler}>
                    <option value=".">.</option>
                        <option value="-">-</option>
                        <option value="o">o</option>
                    </select>
                    <button className="dailyBulletAdd__button" onClick={addBulletHandler} type="button">Add</button>
        </div>
    )
};
const Daily = () => {
    const yearSize = 366;
    const dailyBullets = new Array(yearSize);
    for(let i=0; i < yearSize; i++){
        dailyBullets[i] = new Array();
    }
    const [bullets, setBullets] = useState(dailyBullets);
    
    const currentDate = new Date();
    const yesterday = new DayElement(new Date(currentDate.valueOf() 
                                    - 86400000)); // that is: 24 * 60 * 60 * 1000)
    const today = new DayElement(currentDate);
    console.log(bullets[today.index]);
    const tomorrow = new DayElement(new Date(currentDate.valueOf() 
                                    + 86400000));
    const afterTomorrow = new DayElement(new Date(currentDate.valueOf() 
                                        + 86400000 * 2));

    const deleteClickHandler = (dayIndex, bulletIndex) => {
        // console.log(dayIndex);
        // console.log(bulletIndex);
        
        // const oldBullets = bullets[dayIndex];
        // const newBullets = oldBullets.slice(0, bulletIndex).concat(oldBullets.slice(bulletIndex + 1));
        // return () => setBullets(newBullets);
        const newBullets = [...bullets];
        const arr = newBullets[dayIndex];
        newBullets[dayIndex] = arr.slice(0, bulletIndex).concat(arr.slice(bulletIndex + 1));
        return () => setBullets(newBullets);

    }
    return (
        <div className="dailyBody">
            <div className="dailyBody__yesterday dayContainer">
                <pre><h2>{yesterday.month}.{yesterday.day} {yesterday.name}</h2>
                </pre>
                {bullets[yesterday.index]}

            </div>
            <div className="dailyBody__today dayContainer">
                <pre><h2>{today.month}.{today.day} {today.name}</h2></pre>
                <AddBulletInput index={today.index} bullets={bullets} setBullets={setBullets}/>
                {bullets[today.index].map( (bullet, index) => 
                    <div className="dayContainer__bulletContainer">
                        <li className="bulletContainer__bullet">{bullet.symbol}{bullet.content}</li>
                        <button className="bulletContainer__delete" onClick={deleteClickHandler(today.index, index)} type="button">Delete</button>
                    </div>
                )}
            </div>
            <div className="dailyBody__tomorrow dayContainer">
                <pre><h2>{tomorrow.month}.{tomorrow.day} {tomorrow.name}</h2></pre>
                {bullets[tomorrow.index]}
            </div>
            <div className="dailyBody__afterTomorrow dayContainer">
                <pre><h2>{afterTomorrow.month}.{afterTomorrow.day} {afterTomorrow.name}</h2></pre>
                {bullets[afterTomorrow.index]}
            </div>
        </div>
    )
};

export default Daily;