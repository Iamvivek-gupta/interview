// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Back-end Engineer Assessment</h1>`;

/* Assessment Introduction */

// Welcome to the first round of the live coding assessment. This assessment is to be completed within the duration of this call and will take place in a CodeSandbox environment.

// Note to Candidate:
// Please add appropriate TypeScript types to demonstrate your understanding of TypeScript.
// During this assessment, you are welcome to seek assistance from Google or StackOverflow. Please note, however, that the use of ChatGPT or any other AI-based tools is strictly prohibited.

/* Exercises */

// Exercise 1: Filter Even Numbers
// Description: Given an array of numbers, write a function that returns a new array containing only the even numbers.

function filterEvenNumbers(numbers:any) {
  // Your code here
  return numbers.filter(num => num % 2 === 0);
}

// Sample Data for Exercise 1
const sampleNumbers = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(sampleNumbers)); // Expected Output: [2, 4, 6]

// Exercise 2: Fetch Data
// Description: Write an async function that fetches data from the following endpoint:
// https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8. Use try/catch for error handling.
async function fetchData() {
  // Your code here
  let result = await fetch('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8');
  console.log("result checking", await result.json())
}
fetchData();
// Exercise 3: Validate Email
// Description: Write a function that validates whether a string is a valid email address.
function isValidEmail(email:string) {
  // Your code here
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Sample Data and Execution for Exercise 3
console.log(isValidEmail('example@test.com')); // Expected Output: true
console.log(isValidEmail('invalid-email')); // Expected Output: false

// Exercise 4: Convert to Camel Case
// Description: Write a function that converts a string to camelCase.
function toCamelCase(text:string) {
  // Your code here
  return text.replace(/[-_\s]([a-zA-Z])/g, function (match, group){
    return group.toUpperCase();
  })
}

// Sample Data and Execution for Exercise 4
console.log(toCamelCase('hello world')); // Expected Output: "helloWorld"
console.log(toCamelCase('This is a test string')); // Expected Output: "thisIsATestString"

// Exercise 5: Transform Users
// Description: Given an array of objects representing users with a name and age, write a function that returns a new array containing users who are 18 years or older, with their ages converted to a category ('young', 'adult', 'senior').
function transformUsers(users:any) {
  // Your code here
  // return users.map(user => {
  //   if(user.age <= 30){
  //     user.ageCategory = 'Young';
  //   } else if(user.age <= 50 ){
  //     user.ageCategory = 'Senior';
  //   } else {
  //     user.ageCategory = 'Adult'
  //   }
  //   return user;
  // })
  let result = users.filter(user => user.age == 18 || user.age > 18).map(user => {
    if(user.age <= 30){
      user.ageCategory = 'Young';
    } else if(user.age <= 50 ){
      user.ageCategory = 'Senior';
    } else {
      user.ageCategory = 'Adult'
    }
    return user;
  })
  return result.map(({age, ...rest}) => {
    return {...rest};
  })
}

// Sample Data for Exercise 5
const users = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 17 },
  { name: 'Carol', age: 35 },
  { name: 'Dave', age: 65 },
];

// Execution and Expected Output for Exercise 5
const transformedUsers = transformUsers(users);
console.log(transformedUsers);

// Expected Output:
// [
// { name: 'Alice', ageCategory: 'young' },
// { name: 'Carol', ageCategory: 'adult' },
// { name: 'Dave', ageCategory: 'senior' }
// ]

/* Assessment Conclusion
  
If you have successfully passed this assessment, an email will be sent to you by our HR with a take-home assignment and the duration by which it has to be completed.
  
Your take-home assignment will be evaluated, and Round 2 will be scheduled accordingly. 
  
Thank you for participating in this assessment, and we wish you the best of luck! */






















// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Back-end Engineer Assessment</h1>`;

/* Assessment Introduction */

// Welcome to the first round of the live coding assessment. This assessment is to be completed within the duration of this call and will take place in a CodeSandbox environment.

// Note to Candidate:
// Please add appropriate TypeScript types to demonstrate your understanding of TypeScript.
// During this assessment, you are welcome to seek assistance from Google or StackOverflow. Please note, however, that the use of ChatGPT or any other AI-based tools is strictly prohibited.

/* Exercises */

// Exercise 1: Filter Even Numbers
// Description: Given an array of numbers, write a function that returns a new array containing only the even numbers.

function filterEvenNumbers(numbers:any) {
  // Your code here
  return numbers.filter(num => num % 2 === 0);
}

// Sample Data for Exercise 1
const sampleNumbers = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(sampleNumbers)); // Expected Output: [2, 4, 6]

// Exercise 2: Fetch Data
// Description: Write an async function that fetches data from the following endpoint:
// https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8. Use try/catch for error handling.
async function fetchData() {
  // Your code here
  let result = await fetch('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8');
  console.log("result checking", await result.json())
}
fetchData();
// Exercise 3: Validate Email
// Description: Write a function that validates whether a string is a valid email address.
function isValidEmail(email:string) {
  // Your code here
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Sample Data and Execution for Exercise 3
console.log(isValidEmail('example@test.com')); // Expected Output: true
console.log(isValidEmail('invalid-email')); // Expected Output: false

// Exercise 4: Convert to Camel Case
// Description: Write a function that converts a string to camelCase.
function toCamelCase(text:string) {
  // Your code here
  return text.replace(/[-_\s]([a-zA-Z])/g, function (match, group){
    return group.toUpperCase();
  })
}

// Sample Data and Execution for Exercise 4
console.log(toCamelCase('hello world')); // Expected Output: "helloWorld"
console.log(toCamelCase('This is a test string')); // Expected Output: "thisIsATestString"

// Exercise 5: Transform Users
// Description: Given an array of objects representing users with a name and age, write a function that returns a new array containing users who are 18 years or older, with their ages converted to a category ('young', 'adult', 'senior').
function transformUsers(users:any) {
  // Your code here
  // return users.map(user => {
  //   if(user.age <= 30){
  //     user.ageCategory = 'Young';
  //   } else if(user.age <= 50 ){
  //     user.ageCategory = 'Senior';
  //   } else {
  //     user.ageCategory = 'Adult'
  //   }
  //   return user;
  // })
  let result = users.filter(user => user.age == 18 || user.age > 18).map(user => {
    if(user.age <= 30){
      user.ageCategory = 'Young';
    } else if(user.age <= 50 ){
      user.ageCategory = 'Senior';
    } else {
      user.ageCategory = 'Adult'
    }
    return user;
  })
  return result.map(({age, ...rest}) => {
    return {...rest};
  })
}

// Sample Data for Exercise 5
const users = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 17 },
  { name: 'Carol', age: 35 },
  { name: 'Dave', age: 65 },
];

// Execution and Expected Output for Exercise 5
const transformedUsers = transformUsers(users);
console.log(transformedUsers);

// Expected Output:
// [
// { name: 'Alice', ageCategory: 'young' },
// { name: 'Carol', ageCategory: 'adult' },
// { name: 'Dave', ageCategory: 'senior' }
// ]

/* Assessment Conclusion
  
If you have successfully passed this assessment, an email will be sent to you by our HR with a take-home assignment and the duration by which it has to be completed.
  
Your take-home assignment will be evaluated, and Round 2 will be scheduled accordingly. 
  
Thank you for participating in this assessment, and we wish you the best of luck! */
