// Q.1- can you describe a challenging feature you implemented using react and how you overcame the challenge associated with it?


// Answer: "In a recent project, I tackled the implementation of a real-time collaboration feature in a document editing application using React.
// The main challenge was ensuring seamless updates across multiple users.
// I addressed this by implementing a WebSocket-based communication system, utilizing Redux for state management, and incorporating Immutable.js for data immutability.
// Through rigorous testing and optimization, we successfully delivered a feature that significantly enhanced the collaborative editing experience, resulting in increased user engagement."


// Certainly! Below is a concise response for implementing "Add to Cart" and "Remove from Cart" using Redux Toolkit, as well as incorporating a "Dark and Light Mode" feature:

// "In a recent project, I implemented the 'Add to Cart' and 'Remove from Cart' functionality using Redux Toolkit.
// Leveraging the simplicity of Redux Toolkit's `createSlice` and `createAsyncThunk`, I managed the state of the shopping cart efficiently.
// The actions dispatched by these slices triggered updates to the Redux store, ensuring a consistent and predictable state throughout the application.

// For the 'Dark and Light Mode' feature, I extended the Redux Toolkit setup to include a slice responsible for managing the application's theme.
// Toggling between dark and light modes was achieved by dispatching actions that updated the theme state in the Redux store.
// The React components were then styled conditionally based on the selected theme, providing a seamless and visually appealing user experience.


// Overall, Redux Toolkit streamlined state management, and the use of slices made code organization more modular and maintainable. These features were successfully integrated into the application, providing users with an intuitive shopping experience and the option to customize their visual preferences."






// Q.2- can you tell me about specific instance where you have to otimize NodeJS backend performance for high traffic and what strategies and tools you used to achieve that?















// Q. since you mention aws service deployment can you walk me through your exp with aws particularly which services you have used and how you implemented it for deployment and scaling purpose?


// Q. since you work with the sql and nosql database


































































// JavaScript Promises: all, allSettled, race

// Ever wondered how to efficiently handle multiple asynchronous operations in JavaScript? Here are three powerful Promise methods

// Promise.all:
// Waits for all promises to complete successfully or for any one to be rejected.

// Promise.allSettled:
// Awaits the outcome of all promises, whether they are fulfilled or rejected.

// Promise.race:
// Takes action as soon as the first promise settles, whether it succeeds or fails.

// These concepts are often explored in interviews to assess your understanding of asynchronous JavaScript.






// Promise.all

const promises1 = [
  new Promise( resolve => setTimeout(resolve, 1000, 'Promise 1 resolved')),
  new Promise( resolve => setTimeout(resolve, 500, 'Promise 2 resolved')),
  new Promise( resolve => setTimeout(resolve, 1500, 'Promise 3 resolved')),
]

Promise.all(promises1).then(value => console.log('all promises resolved successsfully', value)).catch(error => console.log('atleast one promise got rejecyed', error));





// Promise.allSettled

const promises2 = [
  new Promise( resolve => setTimeout(resolve, 1000, 'Promise 1 resolved')),
  new Promise( (resolve, reject) => setTimeout(reject, 500, 'Promise 2 resolved')),
  new Promise( resolve => setTimeout(resolve, 1500, 'Promise 3 resolved')),
]

Promise.allSettled(promises2).then(value => console.log('all promises settled', value));






// Promise.race

const promises3 = [
  new Promise( resolve => setTimeout(resolve, 1000, 'Promise 1 resolved')),
  new Promise( (resolve, reject) => setTimeout(reject, 500, 'Promise 2 resolved')),
  new Promise( resolve => setTimeout(resolve, 1500, 'Promise 3 resolved')),
]

Promise.race(promises3).then(value => console.log('the first promise settled', value)).catch(error => console.log('an error occured', error));




// nodejs 100 question https://github.com/codewithgauri/100-Node-Important-Interview-questions