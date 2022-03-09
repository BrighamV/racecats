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

                <div className="herriman"><NavLink to="./Herriman" className="daviss">Herriman</NavLink></div>
                <div className="parkCity"><NavLink to="./parkCity" className="daviss">Park City</NavLink></div>
                <div className="alpine"><NavLink to="./alpine" className="daviss">Alpine/Highland</NavLink></div>
                <div className="Tooele"><NavLink to="./Tooele" className="daviss">Tooele</NavLink></div>
            </div>
            </div>
           
            
       
        </div>
        )
    }




};

export default Teams;

<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1W8441bf-2PO7ihSoSBoP9k2ANUpU_sjE" width="640" height="480"></iframe>