import React from "react";
import './main.css';

// class EmailList extends React.Component{

    //  show()  {

    //      document.getElementById("copy").innerHTML = "worked";
    //      console.log("made it to show");
    //     console.log("made it to add");
    //     let fname = document.getElementById("fname").value;
    //     let lname = document.getElementById("lname").value;
    //     let email = document.getElementById("email").value;
    //     console.log(fname);
    //     console.log(lname);
    //     console.log(email);
    //     const db = firebase.firestore();
    //     // db.collection("Athlete").doc().set()
    //     db.collection('Athlete').add({         // add adds to the database
    //         fname: fname,
    //         lname: lname,
    //         email: email
    //     });
    // }

    function EmailList({show}) {
        return (  
        <div className="content">
            
            <h1>Race Cats Emails</h1>
            <div className="main-content-border">
                <p className="main-content"></p>
                <div id="test"></div>
            </div>
            {show()}
        </div>
        )
    }

// }

export default EmailList;