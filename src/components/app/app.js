import './app.css';
import Header from '../header/header.js';
import Nav from '../nav/nav.js';
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
    const [athlete, setAthlete] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("athlete");

    function getAthlete() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            console.log("here in get athlete");
            console.log(items);
            setAthlete(items);
            setLoading(false);
        });
    }

    useEffect(() => {
        getAthlete();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
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
                <div className='email_sign_up'>
                    Sign up for our emails!<br /><br />
                    <label>First Name:</label>
                    <input type="text" name="fname" placeholder="First Name"/>
                    <label>Last Name:</label>
                    <input type="text" name="lname" placeholder="Last name"/> 
                    <label>Email Address:</label>
                    <input type="text" name="email" placeholder="email"/>
                    <NavLink to="/emailList" className='nav-item' activeClassName='is-active'>Email List</NavLink>

                </div>
                <div className='database'>
                    <h1>Athletes</h1>
                    <p>d{athlete}</p>
                    {athlete.map((person) => (

                        <div key={person.id}>
                            <h2> ..name goes here.{person.fname} {person.lname}</h2>
                            <p>{person.email}</p>

                        </div>
                    ))}

                </div>
                < Footer />
            </div>
        </Router>
    )
}

export default App;

// npm run deploy will update to gh-pages branch resulting in updating on web.