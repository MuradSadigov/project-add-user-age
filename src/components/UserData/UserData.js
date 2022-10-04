import React from "react";
import "./UserData.css";



const UserData = props => 
{
    const deleteHandler = () =>
    {
        props.DeleteItem(props.id);
    }

    return (
        <div className="UserData">
            <div className="UserData-Name">User-Name: {props['User-Name']}</div>
            <div className="UserData-Age">User-Age: {props['User-Age']}</div>
            <button className="UserData-Delete" onClick={deleteHandler}>Delete Item</button>
        </div>
        );      
}

export default UserData;
