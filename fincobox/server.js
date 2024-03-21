const express = require('express');
const app = express();
const multer = require('multer');
const fs = require('fs');


const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hello world")
})
// C:\Users\hp\Desktop\interview\fincobox\uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
})

const upload = multer({storage: storage})


app.post('/upload', upload.single('file'), (req, res) =>{
    res.send('File uploaded Successsfuly')
})


app.listen(PORT, () => {
    console.log(`server is running ${PORT}`)
})


//Write a SQL query to retrieve the average salary of all employees

SELECT AVG(salary) AS average_salary FROM EMPLOYEE;

// Write a SQL query to find the department with the highest average salary.

SELECT department_id, AVG(salary) as average_salry FROM EMPLOYEE 


department_id ORDER BY (AVG(salary) DESC LIMIT 1;

shubhangini
15:45
console.log("first");
setTimeout(() => {
    console.log("second");
}, 0);
console.log("third");


console.log("first");
setInterval(() => {
    console.log("second");
}, 1000);
console.log("third");
first, third, second, socond...




var rotate = function(matrix) {
    const n = matrix .length;
    for (let y= n-1; y>=0; y--){
     const target = matrix[y]
 
     for(let x = n-1; x>= 0; x--){
         target.push(matrix[x][y]);
     }
    } 
 
 
    for(let i =0; i < n; i++){
     matrix[i].splice(0, n)
    }
    return matrix;
 };