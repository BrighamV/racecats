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
import { HashRouter as Router, Route, Switch } from 'react-router-dom';  //use browserRouter, hashrouter is for github pages
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import firebase from './firebase';



function App() {
   
    const add = () => {
        console.log("made it to add");
        let fname = document.getElementById("fname").value;
        let lname = document.getElementById("lname").value;
        let email = document.getElementById("email").value;
        console.log(fname);
        console.log(lname);
        console.log(email);
        const db = firebase.firestore();
        // db.collection("Athlete").doc().set()
        db.collection('Athlete').add({         // add adds to the database
            fname: fname,
            lname: lname,
            email: email
        });
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
                        <Route path="/emailList">
                            <EmailList />
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