import React, {useState} from "react"
import MonthlyCalendarPage from "./MonthlyCalendarPage";
import MonthlyTaskPage from "./MonthlyTaskPage";
import './css/Monthly.css'



/* 
  Note : February has 29 days only on leaps years. 
*/
const monthlyCalendar = [
    {
        name:"January",
        month:1,
        dayAmount:31
    },
    {
        name:"February",
        month:2,
        dayAmount:29
    },
    {
        name:"March",
        month:3,
        dayAmount:31
    },
    {
        name:"April",
        month:4,
        dayAmount:30
    },
    {
        name:"May",
        month:5,
        dayAmount:31
    },
    {
        name:"June",
        month:6,
        dayAmount:30
    },
    {
        name:"July",
        month:7,
        dayAmount:31
    },
    {
        name:"August",
        month:8,
        dayAmount:31
    },
    {
        name:"September",
        month:9,
        dayAmount:30
    },
    {
        name:"October",
        month:10,
        dayAmount:31
    },
    {
        name:"November",
        month:11,
        dayAmount:30
    },
    {
        name:"December",
        month:12,
        dayAmount:31
    },
]

const Monthly = () => {

    const today = new Date();
    // const month = monthlyCalendar[today.getMonth()];
    const monthIndex = today.getMonth();
    return (
        <div className="monthlyCalendarBody">
            <MonthlyCalendarPage class="monthlyCalendarBody__calendar" monthIndex={monthIndex}/>
            <MonthlyTaskPage/>
        </div>
    ) 
};

export default Monthly; 