import React, {useState} from "react";

const DeleteCalendarBullet = ({index, bullets, setBullets}) => {
    const deleteBulletHandler = (e) => {
        const newBullets = [...bullets];
        newBullets[index] = new String();
        setBullets(newBullets);
    }
    return(
        <button type="button" onClick={deleteBulletHandler}>delete</button>
    );
}

const EditCalendarBullet = ({editSwitch, changeVisibility, index, input, setInput, bullets, setBullets}) => {
    
    const inputChangeHandler = (e) => {
        setInput(e.target.value);
    }

    const submitTaskHandler = (e) => {
        e.preventDefault();
        const newBullets = bullets;
        newBullets[index] = input;
        // console.log(changeVisibility);
        //This is a reference to function so it must be run after 
        changeVisibility(index)();
        setBullets(newBullets);
        
        // return () => setBullets(bullets.concat(newBullet));
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

const MonthlyCalendarPage = ({month}) => {
    const [input, setInput] = useState('');   
    // const [editSwitch, setEditSwitch] = useState(false);
    const emptySwitch = new Array(month.dayAmount);
    const emptyBullets = new Array(month.dayAmount);
    for(let i=0; i < emptyBullets.length; i++){
        emptySwitch[i] = false; 
        emptyBullets[i] = new String();

    }
    const [editSwitch, setEditSwitch] = useState(emptySwitch)
    // const [bullets, setBullets] = useState(new Array(month.dayAmount));
    const [bullets, setBullets] = useState(emptyBullets);
    
    //TODO!!!!!!!!!!!!!!!!!!!!!!!! Copy array instead of switching state directly
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
                                        <EditCalendarBullet editSwitch={editSwitch[index]} input={input} changeVisibility={editButtonClickHandler} index={index} setInput={setInput} bullets={bullets} setBullets = {setBullets}/>
                                        <button className="monthlyCalendar__editButton" type="button" onClick={editButtonClickHandler(index)}>Edit</button>
                                        <DeleteCalendarBullet index={index} bullets={bullets} setBullets={setBullets}/>
                                    </div>
                                    )  
                )
    }
        </div>
    );
}

export default MonthlyCalendarPage;