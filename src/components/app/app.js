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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
//     const [fname, setfname] = useState("");
//     const [lname, setlname] = useState("");
//     const [email, setemail] = useState("");
//     const [emailList, setEmailList] = useState([]);

// //     useEffect(()=> {
// //         Axios.get('http://localhost:3001/api/get').then((response) => {
// //             console.log(response.data);
// //         });
// //     }), [];

//     // const submitEmail = () => {
//     //     Axios.post('http://localhost:3001/api/insert', {fname: fname, lname: lname, email: email}).then(()=> {
//     //         // alert("sussesful insert");
//     //         setEmailList(response.data)
//     //     });
//     // };

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
                    </Switch>
                </div>
                <div className='email_sign_up'>
                    {/* Sign up for our emails!<br /><br />
                    <label>First Name:</label>
                    <input type="text" name="fname" onChange={(e)=>{setfname(e.target.value)}} />
                    <label>Last Name:</label>
                    <input type="text" name="lname" onChange={(e)=>{setlname(e.target.value)}} />
                    <label>Email Address:</label>
                    <input type="text" name="email" onChange={(e)=>{setemail(e.target.value)}} /> */}
                    {/* <button onClick={submitEmail}>Add</button> */}

                    {/* use linode it is cheap express firebase */}
{/* 
                    {emailList.map((val)=> {
                        return (

                         <h1>
                             First Name: {val.fname} | Last Name: {val.lname} | Email: {val.email}
                             </h1>
                        );
                    })} */}
                </div>
                < Footer />
            </div>
        </Router>
    )
}

export default App;