import React from "react";
import './nav.css';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component{

    render() {
        return (

            <div>
                <nav className='navbar'>
                    <ul>
                        <li><NavLink to="/" className='nav-item' >Home</NavLink></li>
                        <li><NavLink to="/teams" className='nav-item' >Teams</NavLink></li>
                        <li><NavLink to="/results" className='nav-item' >Race Results</NavLink></li>
                        <li>
                            <a className='nav-item'  href="https://racecats.org">Merch</a>
                        </li>
                        <li><NavLink to="/contact" className='nav-item' >Contact Us</NavLink></li>
                    </ul>
                </nav>
            </div>
       
        )
    }



};

export default Nav;