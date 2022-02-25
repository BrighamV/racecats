import './app.css';
import Header from '../header/header.js';
import Nav from '../nav/nav.js';
import Email from '../email/email';
import Footer from '../footer/footer';
import Home from '../views/home';
import Contact from '../views/contact';
import Teams from '../views/teams';
import Davis from '../views/davis';
import Harriman from '../views/harriman';
import Alpine from '../views/alpine';
import Canyons from '../views/canyons';
import Midway from '../views/midway';
import Results from '../views/results';
import EmailList from '../views/emailList';
import Login from '../views/login';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';  //use browserRouter, hashrouter is for github pages
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import { QuerySnapshot } from '@firebase/firestore';
import { render } from '@testing-library/react';



function App() {
   
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
    }

   const display = (doc) => {
        const db = firebase.firestore();
        // console.log("made it to display");
        let display = document.getElementById("test");


            // creating elements that will get inserted into our html
            let li = document.createElement('li');
            let fname = document.createElement('span');
            let lname = document.createElement('span');
            let email = document.createElement('span');
            let cross =document.createElement('button');


        
            // adding info to our elements by grabbing data from our database
            li.setAttribute('data-id', doc.id);
            fname.textContent = doc.data().fname;
            lname.textContent = doc.data().lname;
            email.textContent = doc.data().email;
            cross.textContent = ' delete ';


        
            // putting everything into a li
            li.appendChild(fname);
            li.appendChild(lname);
            li.appendChild(email);
            li.appendChild(cross);

        
            // put everything into our ul
            display.appendChild(li);

            //deleting data
            cross.addEventListener('click', (e) => {
                e.stopPropagation();
                let id = e.target.parentElement.getAttribute('data-id');
                db.collection('Athlete').doc(id).delete();
             })

             

    }

    const show = () => {

        // console.log("made it to show");
        
        const db = firebase.firestore();
        db.collection('Athlete').get().then((snapshot) => {   //get grabs the data from the database
            snapshot.docs.forEach(doc => {
                // console.log("in loop")
             display(doc);

                })
            })
    }

    const check = () => {
        const db = firebase.firestore();

        console.log("made it to check");
        
        const usr = document.querySelector("#username").value;
        const pass = document.querySelector("#password").value;
        console.log(usr);
        db.collection('coach').get().then((snapshot) => {   //get grabs the data from the database
            snapshot.docs.forEach(doc => {
                // console.log("in loop")
             console.log(doc.data().username);
             if (doc.data().username === usr && doc.data().password === pass) {
                 console.log("usr is same")
                 window.location = "/#/emailList";
             } else {
                 console.log("usr is diff")
                 document.querySelector(".error").innerHTML = "Please enter a valid login";

             }

                })
            })

    }
    
    

    return(
        <Router>
            <div className="app">
                < Header />
                < Nav />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/teams">
                            <Teams />
                        </Route>
                        <Route path="/davis">
                            <Davis />
                        </Route>
                        <Route path="/harriman">
                            <Harriman />
                        </Route>
                        <Route path="/alpine">
                            <Alpine />
                        </Route>
                        <Route path="/canyons">
                            <Canyons />
                        </Route>
                        <Route path="/midway">
                            <Midway />
                        </Route>
                        <Route path="/results">
                            <Results />
                        </Route> 
                        <Route path="/login">
                            <Login check={check}/>
                        </Route>
                        <Route path="/emailList">
                            <EmailList show={show}/>
                        </Route>
                    </Switch>
                </div>

                < Email add={add}/>
                < Footer />
            </div>
        </Router>
        
    )
}
export default App;

// npm run deploy will update to gh-pages branch resulting in updating on web.