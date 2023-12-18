// // let p1 = new Promise( (resolve, reject) => {
// //     let a = 11
// //     setTimeout( ()=> {
// //         if(a % 2 === 0){
// //              resole("data fetched") 
// //         } else {
// //             reject("something went wrong")
// //         }
// //     }, 2000)
// // });


// // p1.then(data => {
// //     console.log(data)
// // }).catch(err => {
// //     console.log(err)
// // })



function a(){
    let c=10;
    function b(){
        console.log(c)
    }
    c=12
    return b;
}
 
const d=a()
d()



// // let total = peopleArr.reduce((acc, curr) => {
// //     return acc + curr.age
// // }, 0)

//  //   {​​   10: ["A", "D"],   14: ["C"],   17: ["B"] }​​

// //console.log(total);

// let peopleArr = [
//   {name: 'A', age: 10},
//   {name: 'B', age: 17},
//   {name: 'C', age: 14},
//   {name: 'D', age: 10},
// ];

// const result = peopleArr.reduce((accumulator, person) => {
//   const { age, name } = person;
  
//   if (accumulator[age]) {
//       accumulator[age].push(name);
//   } else {
//       accumulator[age] = [name];
//   }

//   return accumulator;
// }, {});

// console.log(result);


// by using forEach

// let groupByAge = {};
// peopleArr.forEach(e => {
//     let {name, age} = e;
// if(groupByAge[age]){
//         groupByAge[age].push(name)

// } else {
//     groupByAge[age] = [name]
// }
 
// })


let peopleArr = [
    {name: 'A', age: 10},
    {name: 'B', age: 17},
    {name: 'C', age: 14},
    {name: 'D', age: 10},
]



// let app = ((req, res, next) => {
    
// })


// app.get('/', app,  (req, res) => {
    
// })

// app.use((req, res, next) => {
//     if(!req.params.id){
//         return res.staus(401).send({message: "Unauthorised User"})
//     }
    
    
//     next();
// })




var length = 4;
function callback() {
  console.log(this.length);
}  // What is logged?
  
  
  const object = {
  length: 5,
  method() {
    arguments[0]();
  }
};
 
object.method(callback, 1, 2); 



let arr=[3,4,6,8,5,3,4,5,2,8]   
let sum =8;
// paired should be unique
// [[3,5], [4,4], [6,2]]
let result = [];
for(let i = 0; i < arr.length-1; i++){
    for(let j = 1; j < arr.length; j++){
        if(arr[i] + arr[j] === sum){
            result.push([arr[i], arr[j]])
        }
    }
}
console.log(result)
// correct answer
// If you want to ensure unique pairs, you can use a different approach.
// One way to achieve this is by sorting the array first and then using two pointers to find pairs with the target sum.
// Here's an updated version of the code:

// function findUniquePairsWithSum(arr, targetSum) {
//     const result = [];
//     arr.sort((a, b) => a - b);

//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         const currentSum = arr[left] + arr[right];

//         if (currentSum === targetSum) {
//             result.push([arr[left], arr[right]]);
//             left++;
//             right--;

//             // Skip duplicates
//             while (left < right && arr[left] === arr[left - 1]) {
//                 left++;
//             }
//             while (left < right && arr[right] === arr[right + 1]) {
//                 right--;
//             }
//         } else if (currentSum < targetSum) {
//             left++;
//         } else {
//             right--;
//         }
//     }

//     return result;
// }

// const arr = [3, 4, 6, 8, 5, 3, 4, 5, 2, 8];
// const sum = 8;

// const pairs = findUniquePairsWithSum(arr, sum);
// console.log(pairs);



// The time complexity of the updated code, which uses a two-pointer approach after sorting the array, is O(n log n + n), where n is the length of the array. The dominant factor is the sorting operation, which has a time complexity of O(n log n). After sorting, the two-pointer approach takes linear time (O(n)) to find pairs with the target sum.

// Therefore, the overall time complexity is O(n log n) due to the sorting operation. The space complexity is O(1) because the algorithm uses a constant amount of extra space regardless of the input size (it modifies the array in place).








// To achieve a linear time complexity (O(n)), you can use a hash set to keep track of the elements as you iterate through the array
// Certainly! The approach uses two sets, seenNumbers to keep track of the numbers encountered so far and uniquePairs to ensure that each unique pair is considered only once.

// Here's a step-by-step explanation of the updated approach:

// Initialization:

// result: An array to store the unique pairs.
// seenNumbers: A set to keep track of numbers encountered so far.
// uniquePairs: A set to keep track of unique pairs as strings.
// Iteration:

// For each element num in the array:
// Calculate the complement as the difference between the targetSum and num.
// Check for Complement:

// If seenNumbers contains the complement, it means a pair is found.
// Create a sorted pair [Math.min(num, complement), Math.max(num, complement)] to ensure the order is consistent.
// Convert the pair to a string (pairString) to check for uniqueness.
// Avoid Duplicate Pairs:

// If the pairString is not in uniquePairs, add the pair to the result array.
// Add the pairString to uniquePairs to track the uniqueness of pairs.
// Update seenNumbers:

// Add the current num to the seenNumbers set.
// Final Result:

//The result array contains unique pairs that sum up to the target sum.
//This approach ensures that each pair is represented in a consistent order (ascending) and avoids duplicate pairs by using a set to track unique pairs. The time complexity of this solution is O(n), where n is the length of the array, as it iterates through the array once. The space complexity is also O(n) due to the sets used.

// function findUniquePairsWithSum(arr, targetSum) {
//     const result = [];
//     const seenNumbers = new Set();
//     const uniquePairs = new Set();

//     for (const num of arr) {
//         const complement = targetSum - num;

//         if (seenNumbers.has(complement)) {
//             const pair = [Math.min(num, complement), Math.max(num, complement)];
//             const pairString = pair.join(',');

//             if (!uniquePairs.has(pairString)) {
//                 result.push(pair);
//                 uniquePairs.add(pairString);
//             }
//         }

//         seenNumbers.add(num);
//     }

//     return result;
// }

// const arr = [3, 4, 6, 8, 5, 3, 4, 5, 2, 8];
// const sum = 8;

// const pairs = findUniquePairsWithSum(arr, sum);
// console.log(pairs);


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  



































