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
const Daily = () => {
    const yearSize = 366;
    const dailyBullets = new Array(yearSize);
    const [bullets, setBullets] = useState(dailyBullets);

    const currentDate = new Date();
    const yesterday = new DayElement(new Date(currentDate.valueOf() 
                                    - 86400000)); // that is: 24 * 60 * 60 * 1000)
    const today = new DayElement(currentDate);
    const tomorrow = new DayElement(new Date(currentDate.valueOf() 
                                    + 86400000));
    const afterTomorrow = new DayElement(new Date(currentDate.valueOf() 
                                        + 86400000 * 2));
    console.log(afterTomorrow );
    return (
        <div className="dailyBody">
            <div className="dailyBody__yesterday dayContainer">
                <pre><h2>{yesterday.month}.{yesterday.day} {yesterday.name}</h2>
                </pre>
            </div>
            <div className="dailyBody__today dayContainer">
                <pre><h2>{today.month}.{today.day} {today.name}</h2></pre>
            </div>
            <div className="dailyBody__tomorrow dayContainer">
                <pre><h2>{tomorrow.month}.{tomorrow.day} {tomorrow.name}</h2></pre>
            </div>
            <div className="dailyBody__afterTomorrow dayContainer">
                <pre><h2>{afterTomorrow.month}.{afterTomorrow.day} {afterTomorrow.name}</h2></pre>
            </div>
        </div>
    )
};

export default Daily;