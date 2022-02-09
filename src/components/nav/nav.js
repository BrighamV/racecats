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
                            <a className='nav-item'  href="https://racecats.org/shop/">Merch</a>
                        </li>
                        <li><NavLink to="/contact" className='nav-item' >Contact Us</NavLink></li>
                    </ul>
                </nav>
            </div>
        // <div className='navbar'>
        //     <nav className='nav_list'>
        //         <Link to="/">  Home </Link>
        //         <a className='teams'>Teams</a>
        //         <div className="sub_nav">
        //             <a href="template.html"> Davis County </a>
        //             <a href="template.html"> BoxElder county </a>
        //             <a href="template.html"> Wow </a>
        //         </div>
        //         <a href="template.html"> Race Results </a>
        //         <a href="template.html"> Merch </a>
        //         <Link to="/contact">Contact Us</Link>
        //     </nav>
        // </div>
        )
    }



};

export default Nav;