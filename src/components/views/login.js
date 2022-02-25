import React from "react";
import './main.css';



    function Login({check}) {
        return (  
        <div className="content">
            
            <h1>Please login to see emails</h1>
            <p className="error"></p>
            <div className='email_login'>
            <label>username:</label>
            <input type="text" id="username" name="username" placeholder="ironman"/>
            <label>Password:</label>
            <input type="password" id="password" name="password" placeholder="*******"/> 
            <button onClick={check}>Add</button>
            </div>

        </div>
        )
    }

// }

export default Login;