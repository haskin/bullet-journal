import React, {useState} from "react";
import {getMonthlyLocalStorage as getMonthly,
        setMonthlyCalendarLocalStorage as setMonthlyCalendar} 
        from "./local-storage.js"

const DeleteCalendarBullet = ({monthIndex, dayIndex, setBullets}) => {
    const deleteBulletHandler = (e) => {
        //Sets the current day content to null in local storage
        setMonthlyCalendar(monthIndex, dayIndex, null);
        setBullets(getMonthly()[monthIndex].days);
    }
    return(
        <button type="button" onClick={deleteBulletHandler}>delete</button>
    );
}

const EditCalendarBullet = ({editSwitch, changeVisibility, monthIndex, dayIndex, input, setInput, bullets, setBullets}) => {
    
    const inputChangeHandler = (e) => {
        setInput(e.target.value);
    }

    const submitTaskHandler = (e) => {
        e.preventDefault();
        //Get the monthly day array from local storage
        // const newBullets = getMonthly()[monthIndex].days;
        // newBullets[dayIndex] = input;
        //Sets the new data for the day in local storage
        setMonthlyCalendar(monthIndex, dayIndex, input); 
        changeVisibility(dayIndex)();
        //Retrieve the new data and set it to the bullets
        setBullets(getMonthly()[monthIndex].days);
    }
    const visibilityState = editSwitch ? "visible" : "hidden"; 
    // console.log(index, visibilityState);
    return (
        <form className="editCalenderBullet" style={{visibility: visibilityState}}>
            <input type="text" onChange={inputChangeHandler}></input>          
            <button type="submit" onClick={submitTaskHandler}>submit</button>
        </form>
    );
};

const MonthlyCalendarPage = ({monthIndex}) => {
    const [input, setInput] = useState('');
    //Gets month from local storage
    const month = getMonthly()[monthIndex];
    //Creates edit switchs based on the month size
    const emptySwitch = new Array(month.length).fill(false);
    const [editSwitch, setEditSwitch] = useState(emptySwitch);
    
    const [bullets, setBullets] = useState(month.days);
    
    const editButtonClickHandler = (index) => {
        const newEditSwitchs = [...editSwitch];
        newEditSwitchs[index] = !newEditSwitchs[index];
        return () => setEditSwitch(newEditSwitchs);
    };
    return (
        <div className="monthlyCalendar">
            <h1 className="monthlyCalender__title monthlyHeader">{month.name}</h1>
    {bullets.map( (bullet,index) => (<div>
                                        <span>{index+1}</span>
                                        <span>{bullet}</span>
                                        <EditCalendarBullet editSwitch={editSwitch[index]} input={input} changeVisibility={editButtonClickHandler} monthIndex={monthIndex} dayIndex={index} setInput={setInput} bullets={bullets} setBullets = {setBullets}/>
                                        <button className="monthlyCalendar__editButton" type="button" onClick={editButtonClickHandler(index)}>Edit</button>
                                        <DeleteCalendarBullet monthIndex={monthIndex} dayIndex={index} setBullets={setBullets}/>
                                    </div>
                                    )  
                )
    }
        </div>
    );
}

export default MonthlyCalendarPage;