import React from "react";
import './email.css';
import { NavLink } from 'react-router-dom';




    function Email({add}) {
        return (
            <div className='email_sign_up'>
            Sign up for our emails!<br /><br />
            <label>First Name:</label>
            <input type="text" id="fname" name="fname" placeholder="First Name"/>
            <label>Last Name:</label>
            <input type="text" id="lname" name="lname" placeholder="Last name"/> 
            <label>Email Address:</label>
            <input type="text" id="email" name="email" placeholder="email"/>
            <button onClick={add}>Add</button>
            <NavLink to="/emailList" className='nav-item' activeClassName='is-active'>Email List</NavLink>
             </div>
        )
    }






export default Email;