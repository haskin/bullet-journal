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
        <button className="monthlyCalendar__deleteButton" type="button" onClick={deleteBulletHandler}>Delete</button>
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
            <button type="submit" onClick={submitTaskHandler}>Submit</button>
        </form>
    );
};
function storageChangeMonthyCalendar() {
    
};

// window.checkCookie=function(){
//     this.console.log("this is a test in cookie");
//    };
var testMonth;
const MonthlyCalendarPage = ({monthIndex}) => {
    testMonth = monthIndex;
    const [input, setInput] = useState('');
    //Gets month from local storage
    const month = getMonthly()[monthIndex];
    //Creates edit switchs based on the month size
    const emptySwitch = new Array(month.length).fill(false);
    const [editSwitch, setEditSwitch] = useState(emptySwitch);
     function local(){
        // month = getMonthly()[monthIndex];
        console.log("in monthly calender storage");
    };
    const [bullets, setBullets] = useState(month.days);
    

    // const [bullets, setBullets] = useState(getMonthly()[monthIndex].days);
    const editButtonClickHandler = (index) => {
        const newEditSwitchs = [...editSwitch];
        newEditSwitchs[index] = !newEditSwitchs[index];
        return () => setEditSwitch(newEditSwitchs);
    };
    return (
        <div className="monthlyCalendar">
            <h1 className="monthlyCalender__title monthlyHeader">{month.name}</h1>
    {bullets.map( (bullet,index) => (<div className ="monthlyCalender__bulletsContainer">
                                        
                                            <span className="monthlyCalendar__days">{index+1}</span>
                                            <span className="globalContent">{bullet}</span>
                                            
                                        
                                        {/* <!--Delete goes first for float-right positioning--> */}
                                        <DeleteCalendarBullet monthIndex={monthIndex} dayIndex={index} setBullets={setBullets}/>
                                        <EditCalendarBullet editSwitch={editSwitch[index]} input={input} changeVisibility={editButtonClickHandler} monthIndex={monthIndex} dayIndex={index} setInput={setInput} bullets={bullets} setBullets = {setBullets}/>
                                        <button className="monthlyCalendar__editButton" type="button" onClick={editButtonClickHandler(index)}>Edit</button>
                                        
                                    </div>
                                    )  
                )
    }
        </div>
    );
}

console.log("test month ", testMonth);

export default MonthlyCalendarPage;
// export {localStorageChange};