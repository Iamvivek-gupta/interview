// # 1 remove duplicates from the array
// const arr =  [ 1,5,3,5,8,6,3 ]
// //seen =



// # 2 flatten the array
// let arr = [ [1, 2], [3, 4, [ 5, [6, 7], 8] ], 9 ]
// output = [ 1,2,3,4,5,6,7,8,9]



// # 3 What will be the output ?

// const pro = () => {
//   return new Promise((resolve, reject)=> {
//     resolve('5')
//   })
// }

// setTimeout(() => {
//   console.log("1");
// }, 0);

// console.log("2");

// setTimeout(() => {
//   console.log("3");
// }, 1000);

// console.log("4");

// pro().then(data=>console.log(data))


// //2, 4, 5, 1, 3




// # 4

// const a = new Promise((r, e) => {
//   console.log('Race')
//   r('Hello')
// })

// console.log(‘Test1')

// setTimeout(() => {
//   a.
//   then((d) => console.log(d))
//   console.log(‘Test2')
// }, 0)  


// // test1, "Test2", "Race", "Hello"




// # 5
// const A = { z: 1, x: {y: 1} }; 
// const B = A; 
// B.z = 2; 
// console.log(A.z)


// # 6
// 1 Nodejs app - 1 instance of server
// API1 - sync - 15 secs
// API2 - 1 sec

// User1 -> API1 =>  ?
// after 3 secnds
// User2 -> API2 =>  ?



// # 7
// Get names of employees having the 3rd highest salary.


// SELECT Name FROM
// (Select name, salary, ROW_NUMBER() Over (Order By SALRY DESC) AS salary_rank from employee) AS ranked_salries where salary_rank = 3;








// // 1 remove duplicates from the array
// // const arr =  [ 1,5,3,5,8,6,3 ]
// // // seen = {1: true}
// // // result = []

// // let seen = {};
// // let result = [];

// // for (let num of arr) {
// //   if(!seen[num]){
// //     seen[num] = true;
// //     result.push(num);
// //   }
// // }

// // console.log(result)



// // # 2 flatten the array
// let arr = [ [1, 2], [3, 4, [ 5, [6, 7], 8] ], 9 ]
// // output = [ 1,2,3,4,5,6,7,8,9]

// function flattenArray(arr) {
//   let flatArray = [];

//   arr.forEach(element => {
//     if(Array.isArray(element)){
//       //console.log("",element);
//       flatArray.push(...flattenArray(element))
//     } else{
//       flatArray.push(element);
//     }
//   })


//   return flatArray;
// }


// const flattened = flattenArray(arr);
// console.log(flattened)




function differentWaysToCompute(expression){

    function computeHelper(expr){
        const result = [];

        for(let i = 0; i < expr.length; i++){
            const char = expr[i];
            if(char === "+" || char === "-" || char === "*"){
                let leftExpr = expr.slice(0, i);
                let rightExpr = expr.slice(i);


                let leftResult = computeHelper(leftExpr);
                let rightResult = computeHelper(rightExpr);


                for(left of leftResult){
                    for(right of rightResult){
                        if(char === "+"){
                            result.push(left + right);
                        } else if(char === "-"){
                            result.push(left - right);
                        } else if(char === "*"){
                            result.push(left * right);
                        }
                    }
                }

            }
        }

        if(result.length === 0){
            result.push(parseInt(expr));
        }


        return result;
    }


    return computeHelper(expression);
}



console.log(differentWaysToCompute("2-1-1"));






In the context of databases, ACID is an acronym that stands for Atomicity, Consistency, Isolation, and Durability. These four properties ensure that database transactions are processed reliably and accurately, even in the presence of errors, failures, or concurrent operations.

Here's what each property means:

1. Atomicity: Atomicity ensures that a transaction is treated as a single unit of work. Either all operations within the transaction are completed successfully, or none of them are. If any part of the transaction fails, the entire transaction is rolled back to its original state, ensuring that the database remains in a consistent state.

2. Consistency: Consistency ensures that the database remains in a valid state before and after a transaction. All data modifications must adhere to the database's integrity constraints, such as primary key constraints, foreign key constraints, and other business rules. Transactions preserve the integrity and validity of the data.

3. Isolation: Isolation ensures that the execution  of concurrent transactions does not interfere with each other. Each transaction operates as if it were the only transaction executing on the database. Isolation levels control the degree to which transactions are isolated from each other, preventing phenomena such as dirty reads, non-repeatable reads, and phantom reads.

4. Durability: Durability ensures that once a transaction is committed, its effects are permanently saved in the database, even in the event of a system failure or crash. Changes made by committed transactions must persist and cannot be lost due to hardware failures, power outages, or other catastrophic events.

Together, these ACID properties provide the foundation for reliable and robust database transactions, ensuring data integrity, concurrency control, and fault tolerance. They are essential for maintaining the consistency, reliability, and durability of data in modern database systems.






// To merge two arrays without using the sorting method, you can iterate through both arrays simultaneously and compare the elements at each index.
// Here's how you can do it in JavaScript:

```javascript
function mergeArrays(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    // Iterate through both arrays simultaneously
    while (i < arr1.length && j < arr2.length) {
        // Compare elements at current indices
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements from arr1
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    // Add remaining elements from arr2
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

// Test the function
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
console.log(mergeArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
```

// In this code:
// - We initialize an empty array `result` to store the merged array.
// - We use two pointers `i` and `j` to keep track of the current indices in `arr1` and `arr2` respectively.
// - We compare the elements at the current indices of `arr1` and `arr2`, and push the smaller element into the `result` array. We then increment the corresponding pointer.
// - After iterating through both arrays, we add any remaining elements from `arr1` or `arr2` to the `result` array.
// - Finally, we return the `result` array, which contains the merged elements in sorted order.
















// To achieve this, you can follow these steps in Node.js:

// 1. Read the file line by line.
// 2. Parse each line to extract the city name and temperature.
// 3. Keep track of the minimum and maximum temperature for each city.
// 4. Once you've processed all lines, print the results in the desired format.

// Here's a sample implementation:

```
javascript
const fs = require('fs');

// Read the file line by line
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
    // Split the data into lines
    const lines = data.trim().split('\n');

    // Create an object to store min and max temperatures for each city
    const cityTemperatures = {};

    // Process each line
    lines.forEach(line => {
        // Split the line into city and temperature
        const [city, tempStr] = line.split(';');
        const temperature = parseFloat(tempStr);

        // Update min and max temperatures for the city
        if (!cityTemperatures[city]) {
            cityTemperatures[city] = { min: temperature, max: temperature };
        } else {
            cityTemperatures[city].min = Math.min(cityTemperatures[city].min, temperature);
            cityTemperatures[city].max = Math.max(cityTemperatures[city].max, temperature);
        }
    });

    // Print the results
    Object.entries(cityTemperatures).forEach(([city, { min, max }]) => {
        console.log(`${city} | min = ${min} | max = ${max}`);
    });
});
```

// This script reads the file named `file.txt`, parses each line to extract the city name and temperature, calculates the minimum and maximum temperature for each city, and then prints the results in the desired format.












// Apologies for the oversight. Let me correct the function to make it case-sensitive:

```javascript
function canFormPalindrome(str) {
    const charCount = new Map();
    
    // Count the frequency of each character
    for (const char of str) {
        if (char !== ' ') {
            charCount.set(char, (charCount.get(char) || 0) + 1);
        }
    }
    
    let oddCount = 0;
    
    // Check if there is at most one character with odd frequency
    for (const count of charCount.values()) {
        if (count % 2 !== 0) {
            oddCount++;
        }
        if (oddCount > 1) {
            return false;
        }
    }
    
    return true;
}

// Test cases
console.log(canFormPalindrome("fbsF"));     // Output: false
console.log(canFormPalindrome("abba"));     // Output: true
console.log(canFormPalindrome("ABa"));      // Output: false
console.log(canFormPalindrome("abbabb"));   // Output: true
console.log(canFormPalindrome("abbcabb"));  // Output: true
console.log(canFormPalindrome("abbcabbd")); // Output: false
```

// Now, "ABa" will return false as expected because it's case-sensitive. Thank you for your patience.



// function findMaxConsecutiveOnes(arr) {
//     let maxCount = 0;
//     let currentCount = 0;

//     for (let num of arr) {
//         if (num === 1) {
//             currentCount++;
//             maxCount = Math.max(maxCount, currentCount);
//         } else {
//             currentCount = 0;
//         }
//     }

//     return maxCount;
// }

// // Example usage
// const arr = [1, 1, 0, 1, 1, 1, 0, 1, 1];
// console.log(findMaxConsecutiveOnes(arr));  // Output: 3








// function findLargestElement(arr) {
//     let largest = Number.MIN_SAFE_INTEGER;
  
//     arr.forEach(element => {
//       if (Array.isArray(element)) {
//         largest = Math.max(largest, findLargestElement(element));
//       } else {
//         largest = Math.max(largest, element);
//       }
//     });
  
//     return largest;
//   }
  
//   const nestedArray = [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]];
//   console.log(findLargestElement(nestedArray)); // Output: 709
  