import React, {useState} from "react";
import "./UserInput.css";
const UserInput = props =>
{
    const [userName, setName] = useState("");
    const [userAge, setAge] = useState("");


    const settingValues = () =>
    {
        setName("");
        setAge("");
    }

    const submitHandler = event =>
    {
        event.preventDefault();
        checkerValues(userName, userAge);
        if(!userName || !userAge || !checkerValues(userName, userAge))
        {
            settingValues();
            props.errorSetter(true);    
            return; 
        }
        props.getData({un: userName, ua: userAge, id: Math.random().toString()});
        settingValues();
    }

    const textChangeHandler = event =>
    {
        setName(event.target.value);
    }

    const numberChangeHandler = event =>
    {
        setAge(event.target.value);
    }

    const checkerValues = (name, age) =>
    {
        if(isNaN(name) !== true || parseInt(age) <= 0 )
        {
            return false;
        }
        return true;
    }


    return (
        <div className="UserInput">
            <form onSubmit={submitHandler}>
                <label>User {"-> (Name)"}</label>
                <input type="text" value={userName} maxLength="20" onChange={textChangeHandler}/>

                <label>User {"-> (Age)"}</label>
                <input type="number" value={userAge} onChange={numberChangeHandler} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default UserInput; 


