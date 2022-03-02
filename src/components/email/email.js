import React from "react";
import './email.css';
import { NavLink } from 'react-router-dom';




    function Email({add}) {
        return (
            <div className='email_sign_up'>
            <div className="first">
            <label>First Name:</label>
            <input type="text" id="fname" name="fname" placeholder="First Name"/>
            </div>
            <div className="last">
            <label>Last Name:</label>
            <input type="text" id="lname" name="lname" placeholder="Last name"/>
            </div>
            <div className="email_form">
            <label>Email Address:</label>
            <input type="text" id="email" name="email" placeholder="email"/>
            </div>
            <div className="add">
            <button onClick={add}>Add</button><br/>
            <NavLink to="/login" className='list' activeClassName='is-active'>Email List</NavLink>
            </div>
             </div>
        )
    }






export default Email;