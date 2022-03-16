import React from "react";
import './footer.css';
import Email from '../email/email';
import firebase from '../app/firebase';



class Footer extends React.Component{

    render() {
        const add = () => {
            console.log("made it to add");
            let fname = document.getElementById("fname").value;
            let lname = document.getElementById("lname").value;
            let email = document.getElementById("email").value;
            // console.log(fname);
            // console.log(lname);
            // console.log(email);
            const db = firebase.firestore();
            // db.collection("Athlete").doc().set()
            db.collection('Athlete').add({         // add adds to the database
                fname: fname,
                lname: lname,
                email: email
            });
            document.getElementById("fname").value = "";
            document.getElementById("lname").value = "";
            document.getElementById("email").value = "";
            // window.location.reload();
        }
        return (
        <div className='footer'>
            <div className="social">
                <a className='facebook' href="https://www.facebook.com/racecatstrackclub"></a>
                <a className='instagram' href="https://www.instagram.com/racecats/"></a>
            </div>
           
            <div className="email" >
            < Email add={add}/>
            </div>
            <p className="copy"> 
            copyright 2021 - Race cats
            </p>
        </div>
        )
    }




};

export default Footer;