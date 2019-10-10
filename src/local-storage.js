// Keys ***********************
const MONTHLY_KEY = "monthly";
const FUTURE_KEY = "future";
// Keys ***********************

const setLocalStorage = (key, data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
};
const getLocalStorage = (key) => {
    return JSON.parse(window.localStorage.getItem(key));
}
/******************* Setters ********************/
/***** Set Monthly Log *****/
//Sets the day data in the monthly local storage
// const setMonthlyLocalStorage = (monthIndex, data) => {
//     const monthly = getMonthlyLocalStorage(MONTHLY_KEY);
//     const month = monthly[monthIndex];
//     if (month.id === monthIndex){
//         month = data
//         setLocalStorage(MONTHLY_KEY, monthly);
//     }
// }
const setMonthlyCalendarLocalStorage = (monthIndex, dayIndex, data) => {
    const monthly = getMonthlyLocalStorage(MONTHLY_KEY);
    const month = monthly[monthIndex];
    if (month.id === monthIndex){
        month.days[dayIndex] = data;        
        monthly[monthIndex] = month;
        setLocalStorage(MONTHLY_KEY, monthly);
    }
};
//Sets the task data in the monthly local storage
const setMonthlyTaskLocalStorage = (monthIndex, task, deleteIndex=null) => {
    console.log("month index ", monthIndex);
    console.log("task", task);
    console.log(deleteIndex);
    const monthly = getMonthlyLocalStorage(MONTHLY_KEY);
    const month = monthly[monthIndex];
    if (month.id === monthIndex){
        //Deleting a task
        if(task === null && deleteIndex !== null){
            console.log(month.tasks);
            month.tasks = month.tasks.slice(0,deleteIndex)
                          .concat(month.tasks.slice(deleteIndex+1));
            console.log(month.tasks);
            monthly[monthIndex] = month;
            setLocalStorage(MONTHLY_KEY, monthly);
        }
        //Inserting a task    
        else{
            console.log("in insert");
            month.tasks.push(task);        
            monthly[monthIndex] = month;
            setLocalStorage(MONTHLY_KEY, monthly);
        }
    }
};

const setDefaultMonthly = () => {
    const defaultMonthly = [
        {
            "id":0,
            "name": "January",
            "days": new Array(30),
            "tasks": []
        },
        {
            "id": 1,
            "name": "February",
            "days": new Array(29),
            "tasks":[]
        },
        {
            "id": 2,
            "name": "March",
            "days": new Array(31),
            "tasks":[]
        },
        {
            "id": 3,
            "name": "April",
            "days": new Array(30),
            "tasks":[]
        },
        {
            "id": 4,
            "name": "May",
            "days": new Array(31),
            "tasks":[]
        },
        {
            "id": 5,
            "name": "June",
            "days": new Array(30),
            "tasks":[]
        },
        {
            "id": 6,
            "name": "July",
            "days": new Array(31),
            "tasks":[]
        },
        {
            "id": 7,
            "name": "August",
            "days": new Array(31),
            "tasks":[]
        },
        {
            "id": 8,
            "name": "September",
            "days": new Array(30),
            "tasks":[]
        },
        {
            "id": 9,
            "name": "October",
            "days": new Array(31),
            "tasks":[]
        },
        {
            "id": 10,
            "name": "November",
            "days": new Array(30),
            "tasks":[]
        },
        {
            "id": 11,
            "name": "December",
            "days": new Array(31),
            "tasks":[]
        }
    ]
    setLocalStorage(MONTHLY_KEY, defaultMonthly);
};

/***** Set Monthly Log *****/

/***** Set Future Log *****/
const setFutureLocalStorage = (id, newBullet) => {
    const future = getLocalStorage(FUTURE_KEY);
    const month = future[id];
    if (month.id === id){
        month.bullets.push(newBullet)
        future[id] = month;
        setLocalStorage(FUTURE_KEY, future);
    }
}
const setDefaultFuture = () => {
    const defaultFuture = [
        {
            "id": 0,
            "name": "January",
            "bullets":[]
        },
        {
            "id": 1,
            "name": "February",
            "bullets":[]
        },
        {
            "id": 2,
            "name": "March",
            "bullets":[]
        },
        {
            "id": 3,
            "name": "April",
            "bullets":[]
        },
        {
            "id": 4,
            "name": "May",
            "bullets":[]
        },
        {
            "id": 5,
            "name": "June",
            "bullets":[]
        },
        {
            "id": 6,
            "name": "July",
            "bullets":[]
        },
        {
            "id": 7,
            "name": "August",
            "bullets":[]
        },
        {
            "id": 8,
            "name": "September",
            "bullets":[]
        },
        {
            "id": 9,
            "name": "October",
            "bullets":[]
        },
        {
            "id": 10,
            "name": "November",
            "bullets":[]
        },
        {
            "id": 11,
            "name": "December",
            "bullets":[]
        }
    ]
    setLocalStorage(FUTURE_KEY, defaultFuture);
};
/***** Future Log *****/

const setDefaultLocalStorage = () => {
    setDefaultFuture();
    setDefaultMonthly();
};
/******************* Getters ********************/

/***** Future Log *****/
const getMonthlyLocalStorage = () => {
    return getLocalStorage(MONTHLY_KEY);
};
const getFutureLocalStorage = () => {
    return getLocalStorage(FUTURE_KEY);
}

const getFutureLocalStorageBullets = (id) => {
    return getLocalStorage(FUTURE_KEY)[id].bullets;
}
/***** Future Log *****/


export default function localStorage() {
    setDefaultLocalStorage();
}

export {getFutureLocalStorage, setFutureLocalStorage, getFutureLocalStorageBullets};
export {getMonthlyLocalStorage, setMonthlyCalendarLocalStorage, setMonthlyTaskLocalStorage};