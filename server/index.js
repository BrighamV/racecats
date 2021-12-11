// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require ("cors");
// const app = express();
// const mysql = require('mysql');

// const db = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "Password",
//     database: "racecats",
// });
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({extended: true}));

// app.get('/api/get', (re, res)=> {
//     const sqlSelect = "SELECT  * FROM email_list";
//     db.query(sqlSelect, (err, result)=> {
//         res.send(result);
//     });
// })

// // app.get("/", (req, res) => {

// //     const sqlInsert = "INSERT INTO email_list (fname, lname, email) VALUES ('b', 'v', 'guy@dude.com');";
// //     db.query(sqlInsert, (err, result)=> {
// //         res.send("hello ");
// //     });
// // });

// app.post('/api/insert', (req, res) =>{

//     const fname = req.body.fname
//     const lname = req.body.lname
//     const email = req.body.email

//     const sqlInsert = "INSERT INTO email_list (fname, lname, email) VALUES (?,?)"
//     db.query(sqlInsert, [fname, lname, email], (err, result)=> {
//         console.log(result);
//     });
// });

// app.listen(3001, ()=> {
//     console.log("running on port 3001");
// });