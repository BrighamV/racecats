import React from "react";
import './main.css';
import { NavLink } from 'react-router-dom';


class Teams extends React.Component{

    render() {
        return (
        <div className="content">
            <h1>Welcome to Race Cats</h1>
            <div className="main-content-border">
                <p className="main-content"> Teams are set up by Geographical Location. Click on your team to find more information
                                            About your events and coaches!</p>
                <div className="team-select">
                {/* <div className="davis">Davis County</div> */}
                <div className="davis"><NavLink to="./davis" className="daviss">Davis County</NavLink></div>

                <div className="harriman"><NavLink to="./Harriman" className="daviss">Harriman</NavLink></div>
                <div className="canyons"><NavLink to="./canyons" className="daviss">canyons</NavLink></div>
                <div className="alpine"><NavLink to="./alpine" className="daviss">Alpine</NavLink></div>
                <div className="midway"><NavLink to="./midway" className="daviss">Midway</NavLink></div>
            </div>
            </div>
           
            
       
        </div>
        )
    }




};

export default Teams;

<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1W8441bf-2PO7ihSoSBoP9k2ANUpU_sjE" width="640" height="480"></iframe>