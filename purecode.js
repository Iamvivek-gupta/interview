// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


// async function check(req, res) {  
//     try {    
//         const a = await someOtherFunction();    
//         const b = await somethingElseFunction();    
//         res.send("result")
//     } catch (error) {    
//         res.send(error.stack);  
        
//     }
    
// }


let someOtherFunction = new Promise("some value1");
let somethingElseFunction = new Promise("some value2");
function check(req, res) {
    someOtherFunction.then(data => {
        console.log(data);
        somethingElseFunction.then(data2 => {
            console.log(data2)
            res.send("result")
        }).catch(err2 => {
            console.log(err2)
            res.send(err2.satck)
        })
    }).catch(err => {
        console.log(err)
        res.send(err.satck)
    })
}


// SQL and NOSQL db difference vertical and horizontal scaling
// their is parent and child component when parent component render child component also render? if yes How we can stop reder child component



// their is one component and one function when on componetndidunmount hoe we can invoke the function.

// when we pass the parameter to next() what will happend to other middlewar?












const express = require('express');
const app = express();
const { save } = require('./db.js');

app.use(express.json());

app.post('/users', (req, res) => {
  const { name, age } = req.body;
  console.log("cjbhghjjh", req.body);

  // Check if name or age is missing
  if (!name || !age) {
    return res.sendStatus(400).json({ error: 'Name and age are required' });
  }

  // Check if name is longer than 32 characters
  if (name.length > 32) {
    return res.sendStatus(400).json({ error: 'Name should be at most 32 characters long' });
  }

  // Check if age is not a number or less than 16
  if (!isNaN(age)) {
    return res.sendStatus(400).json({ error: 'Age should be a number' });
  }

  if (parseInt(age) < 16) {
    return res.sendStatus(400).json({ error: 'Age should be 16 or older' });
  }


  // Call the save function and return the result with a 201 status code
  const savedUser = save({name, age: parseInt(age)});
  console.log("checking saved user", savedUser)
  return res.sendStatus(201).json;
});

app.post('*', (req, res) => {
    return res.sendStatus(500);
});


// do not change this export
module.exports = app;






//

function solution(S, A) {
    const graph = buildGraph(S, A);
    let maxLength = 0;
  
    function dfs(node, parent, count) {
      let currentCount = count;
  
      for (const child of graph[node]) {
        if (child !== parent) {
          if (S[node] !== S[child]) {
            currentCount = Math.max(currentCount, dfs(child, node, count + 1));
          } else {
            currentCount = Math.max(currentCount, dfs(child, node, 1));
          }
        }
      }
  
      return currentCount;
    }
  
    for (let i = 0; i < S.length; i++) {
      maxLength = Math.max(maxLength, dfs(i, -1, 1));
    }
  
    return maxLength;
  }
  
  function buildGraph(S, A) {
    const graph = Array.from({ length: S.length }, () => []);
  
    for (let i = 0; i < A.length; i++) {
      if (A[i] !== -1) {
        graph[i].push(A[i]);
        graph[A[i]].push(i);
      }
    }
  
    return graph;
  }
  
  // Examples
  console.log(solution("ab", [-1, 0])); // Output: 2
  console.log(solution("abbab", [-1, 0, 0, 0, 2])); // Output: 3
  console.log(solution("abab", [-1, 2, 0, 1])); // Output: 2
  