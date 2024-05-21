// const express = require('express');
// const app = express();
// const multer = require('multer');
// const fs = require('fs');


// const PORT = 3000;
// // Read the file line by line
// fs.readFile('city.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
    
//     // Split the data into lines
//     const lines = data.trim().split('\n');

//     // Create an object to store min and max temperatures for each city
//     const cityTemperatures = {};

//     // Process each line
//     lines.forEach(line => {
//         // Split the line into city and temperature
//         const [city, tempStr] = line.split(';');
//         const temperature = parseFloat(tempStr);
//         console.log("checking city and temrature", temperature);


//         // Update min and max temperatures for the city
//         if (!cityTemperatures[city]) {
//             cityTemperatures[city] = { min: temperature, max: temperature };
//         } else {
//             cityTemperatures[city].min = Math.min(cityTemperatures[city].min, temperature);
//             cityTemperatures[city].max = Math.max(cityTemperatures[city].max, temperature);
//         }
//     });

//     // Print the results
//     Object.entries(cityTemperatures).forEach(([city, { min, max }]) => {
//         console.log(`${city} | min = ${min} | max = ${max}`);
//     });
// });


// app.get('/', (req, res) => {
//     res.send("Hello world")
// })
// C:\Users\hp\Desktop\interview\fincobox\uploads
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './uploads/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     },
// })

// const upload = multer({storage: storage})


// app.post('/upload', upload.single('file'), (req, res) =>{
//     res.send('File uploaded Successsfuly')
// })


// app.listen(PORT, () => {
//     console.log(`server is running ${PORT}`)
// })


// //Write a SQL query to retrieve the average salary of all employees

// SELECT AVG(salary) AS average_salary FROM EMPLOYEE;

// // Write a SQL query to find the department with the highest average salary.

// SELECT department_id, AVG(salary) as average_salry FROM EMPLOYEE 


// department_id ORDER BY (AVG(salary) DESC LIMIT 1;

// shubhangini
// 15:45
// console.log("first");
// setTimeout(() => {
//     console.log("second");
// }, 0);
// console.log("third");


// console.log("first");
// setInterval(() => {
//     console.log("second");
// }, 1000);
// console.log("third");
// first, third, second, socond...




// var rotate = function(matrix) {
//     const n = matrix .length;
//     for (let y= n-1; y>=0; y--){
//      const target = matrix[y]
 
//      for(let x = n-1; x>= 0; x--){
//          target.push(matrix[x][y]);
//      }
//     } 
 
 
//     for(let i =0; i < n; i++){
//      matrix[i].splice(0, n)
//     }
//     return matrix;
//  };






const { ApolloServer, gql } = require('apollo-server');

// Define schema
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!): User
  }
`;

// Define resolvers
const resolvers = {
  Query: {
    user: (_, { id }) => {
      // Fetch user by ID
      return { id, name: 'John Doe' };
    }
  },
  Mutation: {
    createUser: (_, { name }) => {
      // Create a new user
      return { id: '1', name };
    }
  }
};

// Create Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });
//console.log(server);

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
