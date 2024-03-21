console.log(1);
setTimeout( () =>{
    console.log(2);
})
Promise.resolve(3).then(console.log);

console.log(4);



// const user = {
//     hello: 'welcome to turing',
//     sayWelcome (){
//         console.log(this.hello);
//     }
// }

// //setTimeout(user.sayWelcome(), 1000)

// setTimeout( (user) => {

// }, 1000)

// // setTimeout(user.sayWelcome.bind(this), 1000)

// setTimeout(user.sayWelcome.bind(user), 1000) 





// const EventEmitter = require('events');
// let event =new EventEmitter();

// event.on('event1', function(){
//     console.log('event1 fired!');
//     setTimeout( function(){
//         event.emit('event2');
//     }, 1000);
// })


// event.on('event2', function(){
//     console.log('event2 fired!');
//     setTimeout( function(){
//         event.emit('event1');
//     }, 500);
// })


// event.on('event3', function(){
//     console.log('event3 fired!');
//     process.nextTick( function(){
//         event.emit('event1');
//     });
// })

// event.emit('event3');






// const fs = require('fs');
// const path = require('path');

// const directory = 'test';

// const deleteFiles = async () => {
//     for await (const file of fs.readdir(directory)) {
//         await fs.unlink(path.join(directory, file));
//     }
// }

// deleteFiles();

//what will be the output for above code?









// Which of the following applies to this code block?

// const http = require("http");
// const requestLogs = [];
// function requestListener(req, res) {

//     if (req.url = "/now") {
//         let resp = JSON.stringify({ now: new Date() });
//         requestlogs.push(JSON.parse(resp));
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.write(resp);

//         res.end();
//     } else {
//         res.end("Invalid request");
//     }

// }




var events = require('events');
var Logger = new events.EventEmitter();

Logger.writeLog = (message) => {
    console.log(message);
    Logger.emit('error', 'Error Occurred')
}


module.exports = Logger;



// technical interview questions

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.



// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]



// Example 2:


// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 

// Constraints:

// n == matrix.length == matrix[i].length
// 1 <= n <= 20
// -1000 <= matrix[i][j] <= 1000




function rotateImage(matrix) {
    // Transpose the matrix
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[0].length; j++) {
            // Swap matrix[i][j] with matrix[j][i]
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    
    // Reverse each row
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }

    return matrix;
}

// Example usage:
const image = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Original Image:");
console.log(image);

const rotatedImage = rotateImage(image);

console.log("Rotated Image:");
console.log(rotatedImage);

// oprimized for image rotation

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



// Certainly! Let's break down the code and understand its flow:

// 1. The function `rotate` takes a 2D matrix as input, representing an image.
// 2. It calculates the size of the matrix (assuming it's a square matrix) and stores it in the variable `n`.
// 3. It then iterates over each row of the matrix in reverse order (from bottom to top) using the loop `for (let y = n - 1; y >= 0; y--)`.
// 4. Inside this loop, it accesses the current row of the matrix and stores it in the variable `target`.
// 5. Within the inner loop `for (let x = n - 1; x >= 0; x--)`, it iterates over each column of the matrix (from right to left).
// 6. For each column, it retrieves the corresponding element from the original matrix (using the indices `[x][y]`) and appends it to the `target` row.
// 7. After completing this process for all rows and columns, the original matrix has been rotated by 90 degrees clockwise.
// 8. Finally, it removes the original elements from each row of the matrix, effectively clearing the matrix for the rotated elements.
// 9. The function then returns the modified matrix, which now represents the original image rotated by 90 degrees clockwise.

// Overall, this code efficiently rotates an image represented by a 2D matrix by 90 degrees clockwise.





// Classical inheritance and prototype inheritance are two different approaches to implementing inheritance in JavaScript. Here's a comparison between the two:

// 1. **Classical Inheritance:**
//    - In classical inheritance, classes are used to define blueprints for creating objects. 
//    - It relies on the concept of class hierarchies, where subclasses inherit properties and methods from their parent classes.
//    - Instances of classes are created using constructors, and inheritance is achieved through mechanisms like class extension and inheritance chains.
//    - In classical inheritance, inheritance relationships are established at the time of class definition.
//    - It is more rigid and less flexible compared to prototype inheritance.
//    - Classical inheritance is common in languages like Java, C++, and Python.

// 2. **Prototype Inheritance:**
//    - In prototype inheritance, objects inherit properties and methods directly from other objects, known as prototypes.
//    - Every object in JavaScript has an internal property called `[[Prototype]]` (also accessible via `__proto__` in browsers) that links it to another object, its prototype.
//    - When a property or method is accessed on an object, JavaScript first checks the object itself. If the property or method is not found, it looks up the prototype chain until it finds it or reaches the end of the chain (usually `Object.prototype`).
//    - Objects can inherit from multiple prototypes through a process called prototypal delegation.
//    - Prototype inheritance is more dynamic and flexible compared to classical inheritance, as objects can be modified and extended at runtime.
//    - JavaScript uses prototype inheritance as its primary mechanism for inheritance.

// In summary, classical inheritance relies on class-based hierarchies and is more rigid, while prototype inheritance is based on object delegation and is more dynamic and flexible. JavaScript primarily uses prototype inheritance, although ES6 introduced the `class` syntax to provide a more familiar syntax for developers coming from class-based languages.









// JavaScript supports special functions, often referred to as higher-order functions, because of its functional programming capabilities and its support for first-class functions. Here's why JavaScript supports special functions:

// 1. **First-Class Functions**: In JavaScript, functions are first-class citizens, which means they can be treated like any other variable. They can be assigned to variables, passed as arguments to other functions, and returned from other functions.

// 2. **Closures**: JavaScript supports closures, which are functions that have access to variables from their containing scope even after the parent function has finished executing. This allows for the creation of functions with persistent state.

// 3. **Functional Programming**: JavaScript supports functional programming paradigms, where functions are treated as the primary building blocks of programs. Higher-order functions enable the composition of functions, allowing for more expressive and concise code.

// 4. **Flexibility and Expressiveness**: Higher-order functions provide developers with a powerful tool for abstracting and encapsulating behavior. They enable code reuse, modularity, and the creation of elegant and concise solutions to complex problems.

// 5. **Asynchronous Programming**: Higher-order functions are commonly used in asynchronous programming in JavaScript, especially with features like callbacks, promises, and async/await. They allow developers to work with asynchronous operations in a more manageable and readable way.

// Overall, the support for special functions in JavaScript enhances its flexibility, expressiveness, and ability to handle complex programming tasks, making it a versatile and powerful language for a wide range of applications.

















// The given code defines a constructor function `Person` that takes two parameters: `firstName` and `lastName`. When invoked with the `new` keyword, it creates a new object with properties `firstName` and `lastName`.

// ```javascript
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// ```

// Then, an instance of the `Person` object is created with the values `"hallo"` for `firstName` and `"world"` for `lastName`.

// ```javascript
// person = new Person("hallo", "world");
// ```

// After that, a new method `getFullName` is added to the `person` object. This method returns the full name by concatenating the `firstName` and `lastName` properties of the object.

// ```javascript
// person.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }
// ```

// Finally, the `getFullName` method is called on the `person` object, and the result is logged to the console.

// ```javascript
// console.log(person.getFullName());
// ```

// The output will be:

// ```
// hallo world
// ```

// This demonstrates how to define objects and methods in JavaScript using constructor functions and prototype-based inheritance.

































