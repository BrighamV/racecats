import './app.css';
import Header from '../header/header.js';
import Nav from '../nav/nav.js';
import Email from '../email/email';
import Footer from '../footer/footer';
import Home from '../views/home';
import Contact from '../views/contact';
import Teams from '../views/teams';
import Davis from '../views/davis';
import Herriman from '../views/herriman';
import Alpine from '../views/alpine';
import ParkCity from '../views/parkCity';
import Tooele from '../views/Tooele';
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
   
  // This is what builds the email list. It takes the data from firestore and puts it onto the page

   const display = (doc) => {
        const db = firebase.firestore();
        // console.log("made it to display");
        let display = document.getElementById("test");


            // creating elements that will get inserted into our html
            let li = document.createElement('li');
            let fname = document.createElement('span');
            let lname = document.createElement('span');
            lname.className = "last-name";
            let email = document.createElement('span');
            email.className = "list-of-emails";
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

    // grabs each athlete to display onto the screen
    const show = () => {

        
        const db = firebase.firestore();
        db.collection('Athlete').get().then((snapshot) => {   //get grabs the data from the database
            snapshot.docs.forEach(doc => {
             display(doc);

                })
            })
    }

    // checks if the username and password are correct
    const check = () => {
        const db = firebase.firestore();

        console.log("made it to check");
        
        const usr = document.querySelector("#username").value;
        const pass = document.querySelector("#password").value;
        console.log(usr);
        db.collection('coach').get().then((snapshot) => {   //get grabs the data from the database
            snapshot.docs.forEach(doc => {
             console.log(doc.data().username);
             if (doc.data().username === usr && doc.data().password === pass) {
                 console.log("usr is same")
                 window.location = "racecats/#/emailList";
             } else {
                 console.log("usr is diff")
                 document.querySelector(".error").innerHTML = "Please enter a valid login";

             }

                })
            })

    }
    
    

    return(
        // Router is what redirects the page
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
                        <Route path="/herriman">
                            <Herriman />
                        </Route>
                        <Route path="/alpine">
                            <Alpine />
                        </Route>
                        <Route path="/parkCity">
                            <ParkCity />
                        </Route>
                        <Route path="/Tooele">
                            <Tooele />
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

                {/* < Email add={add}/> */}
                < Footer />
            </div>
        </Router>
        
    )
}
export default App;

// npm run deploy will update to gh-pages branch resulting in updating on web.