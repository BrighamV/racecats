import React from "react";
import './footer.css';

class Footer extends React.Component{

    render() {
        return (
        <div className='footer'>
            <div className="social">
                <a className='facebook' href="https://www.facebook.com/racecatstrackclub"></a>
                <a className='instagram' href="https://www.instagram.com/racecats/"></a>
            </div>
            <p className="copy"> 
            copyright 2021 - Race cats
            </p>
            <div className="run" ></div>
        </div>
        )
    }




};

export default Footer;