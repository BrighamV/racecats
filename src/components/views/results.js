import React from "react";
import './main.css';

class Results extends React.Component{

    render() {
        return (

            <div className="content">
            <h1>Results</h1>
        
           
            <div className="main-content-border">
            <p className="main-content">These links will take you to see your race results.</p><br /><br />
                <a className="res" href="https://www.sportstats.us/display-results.xhtml?raceid=111763">Race Cats Championship</a><br /><br />
                <a className="res" href="http://www.runnercard.com/results3/meet?meetId=8c011f4d-ba16-47b3-97e9-3c4fddac4a82">USATF association meet</a><br /><br />
                <a className="res" href="https://www.milesplit.com/meets/400997-aau-national-cross-country-championships-2020/results#.Yaa0jC1h1QJ">AAU Nationals</a>
            </div>
            </div>
        )
    }



};

export default Results;