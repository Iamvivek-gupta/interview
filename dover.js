// let express = require('express');
// const { get } = require('http');
// let mongoose = require('mongoose');
// let app = express();


// let PORT  = 8000 || process.env.PORT;
// mongoose.connect(`mongodb://localhost:27017`).then( data => {
//     console.log(` database connection succefull`)
// }).catch(err => {
//     console.log(`database connection succefull ${err}`)
// })


// app.get('/sendB2BNotificatons', (req, res) => {
//     res.send('hello world')
// })



// app.listen(PORT, () => {
//     console.log(`server is running on PORT ${PORT}`)
// })



// // to store employee info we haave to create POST API

// // URL: localhost:8000/createEmployee
// // Method: Post

// // REQ: {
// //     name,
// //     age,
// //     joiningdate

// // }

// // Response: {
// //     Status: 201,
// //     Message: 'successfully store'
// // }



// // // to retrieve the employee information

// // URL: localhost:8000/getEmployeeDetails/id

// // METHOD: get


// // Response: {

// // }


// let a = [1,2,3,4];
// let map = a.map( e => e * 2);
// //console.log(map)

// let filter = a.filter( e => e > 2);

// let employeeDetails = [
//     {
//         name: "vivek",
//         salary: 102000,
//         joiningDate: '28-02-2023'
//     },
//     {
//         name: "akshay",
//         salary: 3000,
//         joiningDate: '28-02-2023'
//     },
//     {
//         name: "vivek",
//         salary: 92000,
//         joiningDate: '27-02-2023'
//     }
// ]
// let date = '28-02-2023';
// let salary = 92000;
// let result = employeeDetails.filter( e => e.name === "vivek").sort( (a, b) => b - a);
// console.log("result checking", result);

// let URL = require('url').URL;
// const myURL = new URL('https://example.org:8888');
// console.log(myURL);
// myURL.port = '443';
// console.log(myURL.port);


// // import express from 'express';
// let express = require('express');
// // import fs from 'fs';
// let fs = require('fs');


// const app = express();
// const fsPromises = fs.promises;

// app.get('/download', (req, res, next) => {
//     fsPromises.readFile('./file-not-exist.txt')
//     .then(data => res.send(data))
//     .catch(err => next(err));
// })


// app.use( (err, req, res, next) => {
//     console.log('Error Middleware -one');
//     next(err)
// })

// app.use( (err, req, res, next) => {
//     console.log('Error Middleware -two');
//     res.status(500);
//     res.send('Internal server Error')
// })

// app.use( (err, req, res, next) => {
//     console.log('Error Middleware -three');
// })

// app.listen(3000)


let http = require('http');


const calculate = () => {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum += 1;
    }
    return sum;
};

const server = http.createServer();


server.on("request", (req, res) => {
    console.log('request checing', req.url);
    if (req.url === "/api/v1/calculate") {
        const sum = calculate();
        return res.end(`Sum is ${sum}`);
    } else {
        res.end('ok')
    }
})


server.listen(3000)





































