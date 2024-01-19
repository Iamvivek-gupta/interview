
// console.log("Welcome to Programiz!");

// const arr = [{a:1, b:2}, {a:2, c:3}];
// // [1,2]//

// let b = arr.map(e => e.a);
// // [2, undefined]
// console.log(b)


// //{a: 3, b:2, c:3}
// const arrc = [{a: 1, b: 2}, {a: 2, c: 3}];

// const merged = arrc.reduce((result, current) => {
//   for (let key in current) {
//     if (result.hasOwnProperty(key)) {
//       result[key] += current[key];
//     } else {
//       result[key] = current[key];
//     }
//   }
//   return result;
// }, {});

// console.log(merged);






//b1, b2, b3, b4

// batchRequestCompleted = false;
// b1 request completed , 

//for(async let i = 0; i < batch.length; i++){
//   await batch[0]; 
// }



// This coding challenge contains the following:
// Given the size of the input array, followed by a series of integers, and finally the target, convert the series to an array and return the **indices** of the two numbers such that they add up to the target.
// You may assume that each input would have ***exactly*** one solution, and you may not use the *same* element twice.
// If the input does not have a solution, you will return -1.

// **Example:**

// Input:

// 4

// 2 7 11 15

// 9

// Output:

// 0 1



// Explanation:

// nums\[**0**\] + nums\[**1**\] = 2 + 7 = 9


// *Hints*

// Level 1: Use double nested for loops. The first loop checks every
// element value arr\[i\] and computes the remainder required to sum it to
// meet the target (remainder = arr\[i\] - target). The second nested loop
// searches for that remainder.

// Level 2: Use Hashmap, 2 linear loops. The first loop checks every
// element value in the array and stores it as a key in a hashmap, the
// value being the element position. The second loops checks every element
// in the array again, only this time, it computes the remainder required
// to sum it to meet the target and checks the hashmap whether the key
// exists and retrieves the value if it does.

// Level 3: Use Hashmap, 1 linear loop. Check every element value in the
// array and store it as a key in a hashmap, the value being the element
// position. As you loop through the array, for every element, compute the
// remainder required to sum it to meet the target and check the hashmap
// whether the key exists and retrieve the value if it does. 













// javascript
function flattenObject(obj, parentKey = '') {
  let result = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof obj[key] === 'object' && obj[key] !== null) {
        // Recursively flatten nested objects
        const flattened = flattenObject(obj[key], newKey);
        result = { ...result, ...flattened };
      } else {
        // Add non-object properties to the result
        result[newKey] = obj[key];
      }
    }
  }

  return result;
}

// Example usage:
const nestedObject = {
  user: {
    name: 'John',
    address: {
      street: '123 Main St',
      city: 'New York',
    },
  },
  age: 30,
};

const flattenedObject = flattenObject(nestedObject);

console.log(flattenedObject);










function sam() {

  let a = b = 5;

}

sam();

console.log(typeof a); 

console.log(typeof b);


