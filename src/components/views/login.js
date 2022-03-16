import React from "react";
import './main.css';



    function Login({check}) {
        return (  
        <div className="content">
            <h1>Please login to see emails</h1>
            <p className="error"></p>
            <div className='email_login'>
            <label><b>Username:</b></label><br/>
            <input type="text" id="username" name="username" placeholder="ironman"/><br/><br/>
            <label><b>Password:</b></label><br/>
            <input type="password" id="password" name="password" placeholder="*******"/> <br/><br/>
            <button onClick={check}>Login</button>
            </div>
        
        </div>
        )
    }

// }

export default Login;