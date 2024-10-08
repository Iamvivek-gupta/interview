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
  


















/*
Implement an LRU (Least Recently Used) cache. It should be able to be initialized with a cache size n, and contain the following methods:
set(key, value): sets key to value. If there are already n items in the cache and we are adding a new item, then it should also remove the least recently used item. 
get(key): gets the value at key. If no such key exists, return null.
*/


class LRUCache {
    constructor(size) {
      this.size = size;
      this.cache = new Map();
    }
  
    get(key) {
      if (!this.cache.has(key)) {
        return null;
      }
  
      // Move the accessed key to the end to show that it was recently used
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
  
      return value;
    }
  
    set(key, value) {
      if (this.cache.has(key)) {
        // Delete the old value so we can update the position of the key
        this.cache.delete(key);
      } else if (this.cache.size === this.size) {
        // Delete the least recently used (first item in the Map)
        const firstKey = this.cache.keys().next().value;
        this.cache.delete(firstKey);
      }
  
      // Insert the new key-value pair
      this.cache.set(key, value);
    }
  }
  
  // Example usage:
  const lru = new LRUCache(3);
  lru.set("a", 1);
  lru.set("b", 2);
  lru.set("c", 3);
  console.log(lru.get("a")); // Output: 1
  lru.set("d", 4);           // LRU key "b" should be removed
  console.log(lru.get("b")); // Output: null
  console.log(lru.get("c")); // Output: 3
  console.log(lru.get("d")); // Output: 4
  console.log(lru.get("a")); // Output: 1

  



// ### Explanation:

// 1. **Cache Initialization**:
//    - The cache is initialized with a given size `n`. We use a `Map` to store the key-value pairs.

// 2. **`get(key)` Method**:
//    - If the key exists in the cache, return its value and move it to the end of the `Map` to mark it as recently used.
//    - If the key does not exist, return `null`.

// 3. **`set(key, value)` Method**:
//    - If the key already exists, delete it from the `Map` so we can update its position.
//    - If the cache is full (`this.cache.size === this.size`), remove the least recently used item (the first key in the `Map`).
//    - Add the new key-value pair to the cache.

// ### Key Points:
// - **Map**: The `Map` object in JavaScript preserves the order of insertion, which is essential for implementing LRU functionality. The least recently used item will always be the first key in the `Map`.
// - **Time Complexity**: Both `get` and `set` operations are O(1) on average, making this implementation efficient.






// Intellias Question

// The task is to implement a caching function Memoize 
// The cache function should allow for caching method results with an expiration time, 
// improving performance by avoiding redundant computations.
// For example added getUserData method to retrieve user info from cache. We want to cache some results of getting user data

// 1. Ensure that cached data expires after the specified duration to maintain data freshness.
// 2. Handle cache eviction gracefully, removing expired data from the cache.
// 3. Be aware - the function to memoize could be async. Does it somehow affect the implementation?

function memoizeFunction(asyncFunction, expirationSeconds) {
    const cache = new Map();

    retrun async function(...args) {
        const key = JSON.stringify(args);

        const now = Date.now();
        if(cache.has(key)){
            const cacheEntry = cache.get(key);

            // if(now < expirationSeconds) {
            //     cache.set(key, cacheEntry)
            // }

            if(now > expirationSeconds){
                cache.delete(key)
            }
        }


        

        

        
    }

    // if(cache.has('userData')) {
    //     return userData
    // }

    // let result = await getUserData(id);

    // cache.set('userdata', result);


    // setTimeout(() => {
    //     cache.delete('userData');
    // }expirationSeconds)

    
}



const memoizedFunc1 = memoizeFunction(func1, 10);

const memoizedFunc2 = memoizeFunction(func2, 15);

async function func1(a, b) { return a + b; 
}

async function func2(a, b) { return a - b; 
}
 

// Example async function to memoize
const getUserData = async (id) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id, data: `Data for ID ${id}` }), 1000);
    });
};

// Memoized version of getUserData with a 10-second cache
const memoizedGetUserData = memoizeFunction(getUserData, 10);

// Usage example
(async () => {
    console.log(await memoizedGetUserData(1)); // Cache miss, fetches data
    console.log(await memoizedGetUserData(2)); // Cache miss, fetches data
    console.log(await memoizedGetUserData(1)); // Cache hit, retrieves from cache
    console.log(await memoizedGetUserData(2)); // Cache hit, retrieves from cache

    // Wait for cache to expire
    setTimeout(async () => {
        console.log(await memoizedGetUserData(1)); // Cache expired, fetches data again
        console.log(await memoizedGetUserData(1)); // Cache expired, fetches data again
    }, 12000);
})();








































Apart from the Least Recently Used (LRU) caching technique, there are several other caching strategies you can implement in JavaScript. Here are a few:

### 1. **First In, First Out (FIFO)**
FIFO is a straightforward caching strategy where the oldest cached items are removed first when the cache reaches its limit.

**Example:**
```javascript
class FIFOCache {
  constructor(limit) {
    this.limit = limit;
    this.cache = new Map();
  }

  get(key) {
    return this.cache.get(key) || -1;
  }

  put(key, value) {
    if (this.cache.size >= this.limit) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }
}

const fifoCache = new FIFOCache(2);
fifoCache.put(1, 'A');
fifoCache.put(2, 'B');
console.log(fifoCache.get(1)); // A
fifoCache.put(3, 'C');
console.log(fifoCache.get(2)); // -1 (removed)
```

### 2. **Most Recently Used (MRU)**
MRU is the opposite of LRU. It removes the most recently used items first when the cache is full.

**Example:**
```javascript
class MRUCache {
  constructor(limit) {
    this.limit = limit;
    this.cache = new Map();
  }

  get(key) {
    return this.cache.get(key) || -1;
  }

  put(key, value) {
    if (this.cache.size >= this.limit) {
      const lastKey = Array.from(this.cache.keys()).pop();
      this.cache.delete(lastKey);
    }
    this.cache.set(key, value);
  }
}

const mruCache = new MRUCache(2);
mruCache.put(1, 'A');
mruCache.put(2, 'B');
console.log(mruCache.get(1)); // A
mruCache.put(3, 'C');
console.log(mruCache.get(1)); // -1 (removed)
```

### 3. **Write-Through Cache**
In a write-through cache, data is written to both the cache and the backing store simultaneously. This ensures data consistency between the cache and the data store.

**Example:**
```javascript
class WriteThroughCache {
  constructor(limit) {
    this.limit = limit;
    this.cache = new Map();
    this.store = new Map();
  }

  get(key) {
    return this.cache.get(key) || this.store.get(key) || -1;
  }

  put(key, value) {
    if (this.cache.size >= this.limit) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
    this.store.set(key, value);
  }
}

const writeThroughCache = new WriteThroughCache(2);
writeThroughCache.put(1, 'A');
writeThroughCache.put(2, 'B');
console.log(writeThroughCache.get(1)); // A
writeThroughCache.put(3, 'C');
console.log(writeThroughCache.get(2)); // B (still in store)
```

### 4. **Write-Back (Write-Behind) Cache**
In a write-back cache, data is written to the cache first and then to the backing store asynchronously. This can improve write performance but may risk data loss if the cache fails before the data is written to the store.

// **Example:**
```javascript
class WriteBackCache {
  constructor(limit) {
    this.limit = limit;
    this.cache = new Map();
    this.store = new Map();
  }

  get(key) {
    return this.cache.get(key) || this.store.get(key) || -1;
  }

  put(key, value) {
    if (this.cache.size >= this.limit) {
      const firstKey = this.cache.keys().next().value;
      this.store.set(firstKey, this.cache.get(firstKey));
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }

  flush() {
    this.cache.forEach((value, key) => {
      this.store.set(key, value);
    });
    this.cache.clear();
  }
}

const writeBackCache = new WriteBackCache(2);
writeBackCache.put(1, 'A');
writeBackCache.put(2, 'B');
console.log(writeBackCache.get(1)); // A
writeBackCache.put(3, 'C');
writeBackCache.flush();
console.log(writeBackCache.get(2)); // B (now in store)
```

// These caching strategies can be tailored to fit different use cases and performance requirements¹². Do you have a specific scenario where you want to implement caching?

// Source: Conversation with Copilot, 9/17/2024
// (1) Implementing Caching Strategies: Techniques for High-Performance Web .... https://dev.to/nayanraj-adhikary/implementing-caching-strategies-techniques-for-high-performance-web-apps-3dm7.
// (2) LRU Cache using JavaScript - GeeksforGeeks. https://www.geeksforgeeks.org/lru-cache-using-javascript/.
// (3) LRU Cache Implementation using Javascript Linked List and Objects. https://progressivecoder.com/lru-cache-implementation-using-javascript-linked-list-and-objects/.
// (4) CacheStorage in JavaScript: A Practical Guide (with Examples). https://www.slingacademy.com/article/cachestorage-in-javascript-a-practical-guide-with-examples/.