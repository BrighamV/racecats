import React from "react";
import './header.css';
import { NavLink } from 'react-router-dom';


class Header extends React.Component{

    render() {
        return (
        <div className='header'>
          <div className='contain'>
            <div className='logo'></div>
          </div>
            <p className="slogan">HAVE FUN, WORK HARD, DREAM BIG...</p>
        </div>
        )
    }




};

export default Header;