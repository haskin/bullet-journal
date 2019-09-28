// Keys ***********************
const FUTURE_KEY = "future"
// Keys ***********************

const setLocalStorage = (key, data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
};
const getLocalStorage = (key) => {
    return JSON.parse(window.localStorage.getItem(key));
}
/******************* Setters ********************/

/***** Future Log *****/
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
};
/******************* Getters ********************/

/***** Future Log *****/
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

export {getFutureLocalStorage, setFutureLocalStorage, getFutureLocalStorageBullets}