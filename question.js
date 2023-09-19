// Q1 frequency map normol loop and hashmap method.
let x = [4, 1, 2, 3, 4, 1, 5, 2, 3, 1, 1];
let countMapping = {};
for (let item of x) {
    countMapping[item] = (countMapping[item] || 0) + 1;
}
// console.log(countMapping)

let frequencyMapping = new Map();
for (let eachNumber of x) {
    if (frequencyMapping.has(eachNumber)) {
        frequencyMapping.set(eachNumber, frequencyMapping.get(eachNumber) + 1)
    } else {
        frequencyMapping.set(eachNumber, 1)
    }
}
// console.log(frequencyMapping)

// 3rd approach using reduce method

let o = x.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});
console.log(o);








// Q2 find duplicate from given below array.

// 1st approach using hashmap time complexity O(n), space complexity O(n)
let arr = [4, 3, 2, 7, 8, 2, 3, 3, 1];
let map = new Map();
let duplicates = [];
for (let eachNumber of arr) {
    if (map.has(eachNumber)) {
        map.set(eachNumber, map.get(eachNumber) + 1)
    } else {
        map.set(eachNumber, 1)
    }
}

for (let [key, value] of map) {
    if (value > 1) {
        duplicates.push(key)
    }
}

//console.log(duplicates, "duplicates")


// 2nd approch find duplicate from an array Solution in O(n) time complexity also is constant space o(1);
// 1 <= arr[i] <= n

let number = [4, 3, 2, 7, 8, 2, 3, 3, 1];
function duplicate(arr) {
    let finalResult = [];
    for (let i = 0; i < arr.length; i++) {
        let index = Math.abs(arr[i]) - 1;
        if (arr[index] < 0) {
            finalResult.push(Math.abs(arr[index]))
        }
        arr[index] = - arr[index];
    }
    return finalResult;
}

// console.log(duplicate(number));

// 3rd approach 
// var array = [1, 2, 2, 3, 3, 4, 5, 6, 2, 3, 7, 8, 5, 22, 1, 2, 511, 12, 50, 22];
// console.log([...new Set(
//     array.filter((value, index, self) => self.indexOf(value) !== index))]
// , "duplicates are here");













// Q3 find the missing Numbers.

// 1st approach using indexOf method
let num = [1, 2, 4, 3, 7, 8];
let missingNumber = [];
for (i = 1; i <= 8; i++) {
    if (num.indexOf(i) === -1) {
        missingNumber.push(i)
    }
}
// console.log(missingNumber);



// 2nd approach suing incluse method
function MissingValuesinArray(arr = []) {
    // find out the last element 
    const lastEle = arr.slice(-1)[0];
    const result = [];
    for (let i = 1; i <= lastEle; i++) {
        // if i is not present in array then it is missing number.
        !arr.includes(i) && result.push(i)
    }
    return result;
}

// console.log(MissingValuesinArray(num))


// 3rd approch using XOR

function getMissingNo(a, n) {

    // For xor of all the elements in array
    var x1 = a[0];

    // For xor of all the elements from 1 to n+1
    var x2 = 1;
    for (var i = 1; i <= n; i++) x1 = x1 ^ a[i];
    for (var i = 2; i <= n; i++) x2 = x2 ^ i;


    return x1 ^ x2;
}
let r = getMissingNo([1, 2, 4, 3, 7, 8], 8)
// console.log(r);


// Q4 two sum Problem.

let twoSum = function (num, target) {
    let map = new Map();
    for (let i = 0; i < num.length; i++) {
        let num1 = num[i];
        let num2 = target - num1;
        if (map.has(num2)) {
            return [i, map.get(num2)];
        }
        map.set(num1, i);
        return 'value not found'
    }
}
let result = twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 150);
// console.log(result);

















// Q4 Finding sum of digits of a number until sum becomes single digit

function sumDigit(n) {
    let sum = 0;
    while (n > 0 || sum > 9) {
        console.log("checking n", n);
        console.log("checking sum", sum);
        if (n === 0) {
            n = sum;
            sum = 0;
        }
        sum = sum + n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

// console.log(sumDigit(12345))




// Q5 write a function to check primality test.

function checkPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// console.log(checkPrime(4));







// Q6 WAP to print fibonnocci sequence till given number

function fibonnocci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// console.log(fibonnocci(4));



// Q7 find the nth Number in fibonnacci sequence







// Q8 Rearrange an array in maximum minimum form by JavaScrip */

const input = [1, 2, 3, 4, 5, 6];
let minMax = arr => {
    let copy = arr.slice();
    copy.sort((a, b) => b - a);
    console.log(copy, "copy");
    for (let i = 0; i < copy.length; i = i + 2) {
        copy.splice(i, 0, copy.pop())
    }
    return copy;
}

// console.log(minMax(input));

// arraining in maximum minimum form
function maxMin(arr) {
    let newArr = [...arr];
    newArr.sort((a, b) => a - b);
    for (let i = 0; i < newArr.length; i += 2) {
        newArr.splice(i, 0, newArr.pop());
    }
    return newArr;
}

// console.log(maxMin([7,3,5,8,1,4,2,9]))




// Q9 arrange the date by assending/descending order.

let details = [
    { "id": 1, "type": "addition", "date": "12-08-2021", "price": 100 },
    { "id": 2, "type": "withdrawl", "date": "15-08-2021", "price": 300 },
    { "id": 3, "type": "addition", "date": "13-08-2021", "price": 400 },
    { "id": 4, "type": "withdrawl", "date": "16-08-2021", "price": 150 }
];

function orderByDate(a, b) {
    if (a.date > b.date) return -1;
    else if (a.date > b.date) return 1;
    else return 0;
}

// Name Z to A
// details.sort((a, b) => (a.price > b.price ? -1 : 1))
// details.sort((a, b) => (b.type > a.type ? -1 : 1))

// let output = details.sort(orderByDate);
// console.log(output);






 


// Q10 Rotate any Array by k steps (right rotation).

let inputs = [1, 2, 3, 4, 5, 6, 7];
function rightRotateArray(arr, k) {
    for (i = 0; i < k; i++) {
        arr.splice(i, 0, arr.pop())
    }
    return arr;
}

// console.log(rightRotateArray(inputs, 3))




// Q11 left rotation an array by k steps

function leftRotateArray(arr, k) {
    for (i = 0; i < k; i++) {
        let f1 = arr.shift();
        arr.push(f1);
    }
    return arr;
}

// console.log(leftRotateArray(inputs, 3))





// Q12 WAP to remove duplicates

// let array = [0,0,1,1,2,2,3,3,4,4];
// let output = array.filter( (e, i, arr) => {
//     return arr.indexOf(e) === i
// })
// console.log(output)


// using set 


// 2. Set()
// const removeDuplicates = (arr) => [...new Set(arr)];
// console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6]));
// // Result: [ 1, 2, 3, 4, 5, 6 ]




// Q13 find the second max number?

let numbers = [2, 5, 3, 3, 100, 89];
function secondMax(arr) {
    let modifiedArr = [...new Set(numbers)].sort((a, b) => b - a);
    if (modifiedArr.length < 2) return modifiedArr[0];
    else return modifiedArr[1];
}

// console.log(secondMax(numbers));









// Q14 form largest number from an given array

let formLargestArray = (array) => {
    return array.map(String).sort((a, b) => (b + a) - (a + b)).join('');
}
// console.log(formLargestArray([3,39,50,8]))






// Q15 Write an polyfill for the filter 

Array.prototype.myFilter = function (callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }

    return newArray;
}

// let m = [1,2,3,4,5,6,7,8];
// console.log(m.myFilter(x => x % 2 === 0))






// Q16 Write an polyfill for the map 


Array.prototype.myMap = function (callback) {
    let newArray = [];
    for (let item of this) {
        newArray.push(callback(item))
    }
    return newArray;
}

// let v = [1,2,3,4,5,6,7,8];
// console.log(v.myMap(x => x * 2 ))




// Q17 Write an polyfill for the reduce 


Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue != null ? initialValue : this[0]
    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i])
    }
    return accumulator;
}


// let f = [1,2,3,4,5];
// let total = f.myReduce((acc, ele) => acc + ele, 0)
// console.log(total)




// Q18 product of an array except self write a program in javascript




function productOfArrayExceptSelf(nums) {
    // calculate the product of all elements to the left of the current index
    let product = nums.reduce((acc, curr) => acc * curr, 1);
    let result = nums.map(e => product / e);
    return result;
}


// console.log(productOfArrayExceptSelf([1, 2, 3, 4]))






// Q19 valid parathesis problem

let isValid = function (s) {
    let mapping = new Map();
    mapping.set('(', ')')
    mapping.set('{', '}')
    mapping.set('[', ']')
    let stack = [];
    for (let item of s) {
        if (mapping.has(item)) {
            stack.push(mapping.get(item))
        } else if (stack.pop() != item) {
            return false;
        }
        // console.log(stack)
    }
    return stack.length === 0;
}

// console.log(isValid("([]){}"))









// Q20 find subsets of an array

function checkSubset(arr) {
    let result = [[]];
    for (let item of arr) {
        let len = result.length;
        for (let i = 0; i < len; i++) {
            let temp = result[i].slice(0);
            // console.log(temp)
            temp.push(item);
            result.push(temp);
        }
    }
    return result;
}

// console.log(checkSubset([1, 2, 3]))








// Q21 find all possible subarray from a given array and count the sum for subarrays



function findAllSubarrays(arr, k) {
    const result = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            result.push(arr.slice(i, j + 1));
            if(arr.slice(i,j+1).reduce( (a,b) => a + b) === k){
                count++;
            }
        }
    }
    return result;
}

const ar = [1, 2, 3];
const subarrays = findAllSubarrays(ar, 3);
// console.log(subarrays); // [[1], [1, 2], [1, 2, 3], [2], [2, 3], [3]]









// Q22 longest consecutive sequence problem


function longestConsecutiveSequence(arr){
    let temp = 1;
    let max = 1;
    let sorted = arr.sort( (a,b) => a - b);
    for(let i = 0; i < sorted.length; i++){
        if ( sorted[i+1] - sorted[i] === 1 ) {
            // console.log("checking values")
            temp++;
            console.log(temp, "temp checking")
        } else if ( sorted[i+1] - sorted[i] > 1 ){
            max = Math.max(temp, max);
            temp = 1;
        }
    }
    return Math.max(temp, max);
}


// console.log(longestConsecutiveSequence([4,6,1,7,2,8,3,9,10]));





// Q23 Best time to buy/sell the stocks by using valley peak approach make maximum profit



function maxProfit(Price){
    let profit = 0;
    for(let i = 1; i < Price.length; i++){
        if(Price[i] > Price[i-1]){
            profit += Price[i] - Price[i-1];
        }
    }
    return profit;
}

// console.log(maxProfit([7,1,5,3,6,4]));








// Q24 check if given numver is HappyNumber

function isHappyNumber(num){
    let set = new Set();
    while(num !== 1){
        let sum = 0;
        while(num > 0){
            let digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        if(set.has(sum)){
            return false;
        }
        set.add(sum);
        num = sum;
    }
    return true;
}

// console.log(isHappyNumber(29));





// Q25 reverse each word in given string


function reverseWord(str){
    let reverseStr = str.split(' ').map(word => word.split('').reverse().join(''));
    return reverseStr
}

// console.log(reverseWord('this is a TseT'));
// output >>>> [ 'siht', 'si', 'a', 'TesT' ]









// Q26 return the most frequent character from given string


// function getMostFrequentChar(str) {
//     const charMap = {};
//     let mostFrequentChar = '';
//     let maxFrequency = 0;
    
    
    
//     for (const char of str) {
//         if (!isNaN(char)) {
//             continue;
//         }
//         charMap[char] = (charMap[char] || 0) + 1;
//         if (charMap[char] > maxFrequency) {
//             mostFrequentChar = char;
//             maxFrequency = charMap[char];
//         }
//     }
    

    
//     return mostFrequentChar;
// }


// function findMostFrequentChar(str) {
//     const charMap = {};
//     let maxChar = '';
//     let maxCount = 0;
  
//     for (let char of str) {
//       if (/[a-zA-Z]/.test(char)) {
//         charMap[char] = charMap[char] + 1 || 1;
  
//         if (charMap[char] > maxCount) {
//           maxChar = char;
//           maxCount = charMap[char];
//         }
//       }
//     }
//     console.log("char map checking", charMap)
  
//     return maxChar;
//   }
  
//   // Example usage
//   const str = "hello world! 123";
//   console.log(findMostFrequentChar(str)); // Output: "l"





// one().plus().two().equals(); // 3
// two().plus().two().equals(); // 4
// one().one().minus().two().equals(); // 9



const calc = {
    result: 0,
    numBuffer: [],
  
    addNum(num) {
      this.numBuffer.push(num);
      return this;
    },
  
    setNum() {
      this.result = parseInt(this.numBuffer.join(''));
      this.numBuffer = [];
      return this;
    },
  
    one() {
      this.addNum(1);
      return this;
    },
  
    two() {
      this.addNum(2);
      return this;
    },
  
    plus() {
      this.setNum();
      this.prevResult = this.result;
      this.operation = (a, b) => a + b;
      return this;
    },
  
    minus() {
      this.setNum();
      this.prevNum = this.result;
      this.operation = (a, b) => a - b;
      return this;
    },
  
    equals() {
      if (this.operation) {
        this.setNum();
        if (this.prevResult) {
          this.result = this.operation(this.result, this.prevResult);
          delete this.prevResult;
        } else if (this.prevNum) {
          this.result = this.operation(this.prevNum, this.result);
          delete this.prevNum;
        }
        delete this.operation;
      }
      return this.result;
    },
  
    get() {
      return this.result;
    }
  };
  
  console.log(calc.one().plus().two().equals()); // 3
  console.log(calc.two().plus().two().equals()); // 4
  console.log(calc.one().one().minus().two().equals()); // 9
  
  
  
  
  




//   you can use a stack to keep track of opening parentheses and check if each closing parenthesis matches the most recent opening parenthesis on the stack.
//   Here's the approach:

//   Initialize a new empty stack.
//   Loop through the input string and for each character:
//   a. If the character is an opening parenthesis, push it onto the stack.
//   b. If the character is a closing parenthesis, check if the stack is empty. If it is, return false since there is no matching opening parenthesis. Otherwise, pop the top element from the stack and check if it matches the closing parenthesis. If it doesn't, return false since the parentheses are not valid.
//   After the loop, check if the stack is empty. If it is, return true since all opening parentheses have a matching closing parenthesis. Otherwise, return false since there are unmatched opening parentheses.
//   Here's the JavaScript code that implements the above approach:



// function isValidParentheses(s) {
//     const stack = [];
  
//     for (let i = 0; i < s.length; i++) {
//       const c = s.charAt(i);
  
//       if (c === '(' || c === '[' || c === '{') {
//         stack.push(c);
//       } else if (c === ')' || c === ']' || c === '}') {
//         if (stack.length === 0) {
//           return false;
//         }
  
//         const top = stack.pop();
  
//         if ((c === ')' && top !== '(') || (c === ']' && top !== '[') || (c === '}' && top !== '{')) {
//           return false;
//         }
//       }
//     }
  
//     return stack.length === 0;
//   }
  
//   // Example usage
//   const s1 = "()[]{}";
//   const s2 = "([)]";
//   console.log(isValidParentheses(s1)); // Output: true
//   console.log(isValidParentheses(s2)); // Output: false
  



// In this approach, we first initialize a new empty stack stack. We then loop through the input string s and for each character c, we check if it is an opening parenthesis. If it is, we push it onto the stack. If it is a closing parenthesis, we check if the stack is empty. If it is, we return false since there is no matching opening parenthesis. Otherwise, we pop the top element from the stack and check if it matches the closing parenthesis. If it doesn't, we return false since the parentheses are not valid.

// After the loop, we check if the stack is empty. If it is, we return true since all opening parentheses have a matching closing parenthesis. Otherwise, we return false since there are unmatched opening parentheses. Since each character in the input string is checked only once, this approach has a time complexity of O(n).














































// To remove duplicates from an array using JavaScript in O(n) time complexity, you can use a hash table to keep track of the elements that have already been seen. Here's the approach:

// Initialize a new empty hash table.
// Loop through the array and check if the current element exists in the hash table.
// If the current element exists in the hash table, skip it.
// If the current element doesn't exist in the hash table, add it to the hash table and push it to a new array.
// Return the new array without duplicates.
// Here's the JavaScript code that implements the above approach:




// function removeDuplicates(arr) {
//     const seen = {};
//     const result = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       const element = arr[i];
//       if (!seen[element]) {
//         seen[element] = true;
//         result.push(element);
//       }
//     }
  
//     return result;
//   }
  
//   // Example usage
//   const arr = [1, 2, 2, 3, 4, 4, 5];
//   const uniqueArray = removeDuplicates(arr);
//   console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
  



// In this approach, we first initialize a new empty hash table seen and a new empty array result. 
// We then loop through the input array arr and check if the current element exists in the hash table seen. 
// If the current element exists in the hash table, we skip it.
// If the current element doesn't exist in the hash table, we add it to the hash table by setting seen[element] = true and push it to the new array result.
// Finally, we return the new array result without duplicates.
// Since each element in the input array is checked only once, this approach has a time complexity of O(n).













// Rotate any Array by k steps (right rotation). using javacsript in O(n) time complexity




// To rotate an array by k steps (right rotation) in O(n) time complexity using JavaScript, you can use the following approach:

// Calculate the effective rotation amount by taking the modulo of k with the length of the array. This is because if k is greater than the length of the array, rotating the array by k steps is equivalent to rotating the array by k % length steps.
// Initialize a new empty array result.
// Copy the last k elements of the original array to the beginning of result.
// Copy the remaining elements of the original array to the end of result.
// Return the result array.
// Here's the JavaScript code that implements the above approach:











// function rotateArray(arr, k) {
//     const n = arr.length;
//     const effectiveRotation = k % n;
//     const result = [];
  
//     // Copy the last k elements of the original array to the beginning of result
//     for (let i = n - effectiveRotation; i < n; i++) {
//       result.push(arr[i]);
//     }
  
//     // Copy the remaining elements of the original array to the end of result
//     for (let i = 0; i < n - effectiveRotation; i++) {
//       result.push(arr[i]);
//     }
  
//     return result;
//   }
  
//   // Example usage
//   const arr = [1, 2, 3, 4, 5];
//   const k = 2;
//   const rotatedArray = rotateArray(arr, k);
//   console.log(rotatedArray); // Output: [4, 5, 1, 2, 3]
  




// function rotateArray(arr, k) {
//     const n = arr.length;
//     if(k> n){
//         k = k % n; 
//     }
//     console.log(k)
//     let removed = arr.splice(n-k, k);
//     arr.unshift(...removed)
//     return arr;
//   }
  
//   // Example usage
//   const arr = [1, 2, 3, 4, 5];
//   const k = 6;
//   const rotatedArray = rotateArray(arr, k);
//   console.log(rotatedArray); // Output: [4, 5, 1, 2, 3]




// In this approach, we first calculate the effective rotation amount by taking the modulo of k with the length of the array. 
// Then, we initialize a new empty array result. We copy the last k elements of the original array to the beginning of result using a loop that starts at the index n - effectiveRotation and ends at the last index of the original array. We then copy the remaining elements of the original array to the end of result using another loop that starts at index 0 and ends at index n - effectiveRotation - 1. Finally, we return the result array, which contains the rotated array.














































// If there are multiple numbers missing from the array, you can modify the approach to find all the missing numbers.
// One way to do this is to use a hash map to keep track of the numbers that are present in the array.

// Here's the modified JavaScript code that finds all the missing numbers in the array:




// function findMissingNumbers(arr) {
//     const n = arr.length;
//     const hashMap = {};
//     const missingNumbers = [];
  
//     // Populate hash map with numbers from array
//     for (let i = 0; i < n; i++) {
//       hashMap[arr[i]] = true;
//     }
  
//     // Check each number from 1 to n for presence in hash map
//     for (let i = 1; i <= n; i++) {
//       if (!hashMap[i]) {
//         missingNumbers.push(i);
//       }
//     }
  
//     return missingNumbers;
//   }
  
//   // Example usage
//   const arr = [1, 3, 5, 6, 8];
//   const missingNumbers = findMissingNumbers(arr);
//   console.log(missingNumbers); // Output: [2, 4, 7]
  





// In this modified approach, we first create an empty hash map and populate it with the numbers from the array. 
// Then, we iterate through the numbers from 1 to n and check each number for presence in the hash map. If a number is not present in the hash map, we add it to the missingNumbers array.
// Finally, we return the missingNumbers array, which contains all the missing numbers from the array.



















// To find the second minimum number from a given array in O(n) time complexity, you can follow these steps:
// Initialize two variables min and secondMin to the maximum possible integer value.

// Iterate over the array, and for each element arr[i], compare it to min and secondMin.
// If arr[i] is smaller than min, update both min and secondMin to arr[i]. If arr[i] is greater than or equal to min and smaller than secondMin, update secondMin to arr[i].

// After iterating over the entire array, return secondMin.

// Here is the JavaScript code:


// function findSecondMinimum(arr) {
//   let min = Number.MAX_SAFE_INTEGER;
//   console.log("checking min here", min);
//   let secondMin = Number.MAX_SAFE_INTEGER;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       secondMin = min;
//       min = arr[i];
//     } else if (arr[i] < secondMin && arr[i] != min) {
//       secondMin = arr[i];
//     }
//   }

//   return secondMin;
// }
// Example usage:


// const arrz = [9, 3, 7, 1, 8, 2, 4,1,0,0];
// console.log("output from here",findSecondMinimum(arrz)); // Output: 2
// Note that the time complexity of this algorithm is O(n) since we only iterate over the array once.









































































































































