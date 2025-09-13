// // 1. Valid Anagram

// function isValidAnagram(s, t){
//     if(s.length != t.length) return false;
//     let obj1 = {};
//     let obj2 = {};
//     for(let i = 0; i < s.length; i++){
//         obj1[s[i]] = (obj1[s[i]] || 0) + 1;
//         obj2[t[i]] = (obj2[t[i]] || 0) + 1;
//     }
//     for(let key in obj1){
//         console.log(key);
//         if(obj1[key] != obj2[key]) return false;
//     }

//     return true;
// }
// // console.log(isValidAnagram("rat", "tar"));





// // Best Time to sell Stock and get more profit
// // https://levelup.gitconnected.com/dp-on-stocks-buy-and-sell-stocks-recursive-memoization-top-down-398e417388da
// function maxProfit(prices){
//     let minimumStcokPrice = prices[0];
//     let profit = 0;
//     for(let i = 1; i < prices.length; i++){
//         if(prices[i] < minimumStcokPrice) minimumStcokPrice = prices[i];
//         profit = Math.max((prices[i] - minimumStcokPrice), profit);
//     }

//     return profit;
// }
// console.log(maxProfit([7,6,5,4,3,50]));





// // Q3. asked in Neo Solutions

// // Removing consecutive duplicate characters from a string can be achieved with a recursive function. Here's a corrected JavaScript function to accomplish this:

// ```javascript
// function removeConsecutiveDuplicates(input) {
//   let modified = false;

//   for (let i = 0; i < input.length - 1; i++) {
//     if (input[i] === input[i + 1]) {
//       input = input.slice(0, i) + input.slice(i + 2);
//       modified = true;
//       break;
//     }
//   }

//   if (modified) {
//     return removeConsecutiveDuplicates(input);
//   } else {
//     return input;
//   }
// }

// // Test cases
// console.log(removeConsecutiveDuplicates("abbbac")); // Output: "abac"
// console.log(removeConsecutiveDuplicates("abbac"));  // Output: "c"
// console.log(removeConsecutiveDuplicates("aabb"));   // Output: ""
// console.log(removeConsecutiveDuplicates("aabbcc")); // Output: ""
// ```

// // In this corrected solution:

// // - We use a `for` loop to iterate through the string and check for consecutive duplicate characters.

// // - When consecutive duplicates are found, we remove them by splicing the string.

// // - We set the `modified` flag to `true` to indicate that changes were made.

// // - After one pass through the string, if `modified` is `true`, we recursively call the function again to continue checking for additional consecutive duplicates.

// // - The recursion continues until no more consecutive duplicates are found.

// // This should correctly remove consecutive duplicate characters from the input string.





// // To determine how many people can see the sun from a tower with varying heights and the number of people on it, you can write a JavaScript program as follows:

// ```javascript
// function countPeopleSeeingSun(towerData) {
//   let maxHeight = 0;
//   let count = 0;

//   // Iterate through the tower data to find people who can see the sun.
//   for (const [height, people] of towerData) {
//     if (height > maxHeight) {
//       maxHeight = height;
//       count += people;
//     } else if (height === maxHeight) {
//       count += people;
//     }
//   }
//   return count;
// }
// // Test case
// const towerData = [[5, 3], [3, 4], [6, 2]];
// const result = countPeopleSeeingSun(towerData);
// console.log(result); // Output: 5
// ```

// // In this code:

// // - `countPeopleSeeingSun` takes an array `towerData` as input, where each subarray contains two elements: the height of the tower and the number of people on it.

// // - The function iterates through the `towerData` array and keeps track of the `maxHeight` and the `count` of people who can see the sun.

// // - If a tower is taller than the previous tallest tower (i.e., its height is greater than `maxHeight`), it updates both `maxHeight` and `count`. If the height is the same as the previous tallest tower, it adds the number of people to the `count`.

// // - The function returns the `count`, which represents the total number of people who can see the sun.

// // The provided test case, `[[5, 3], [3, 4], [6, 2]]`, correctly returns `5` as the output because the tallest tower is of height `6`, and it has `2` people on it.



















// // Q. find the max count of consecutive 1's in an given array?
// function findConsecutiveOnes(nums) {
//   let maxCount = 0;
//   let currentConseCount = 0;
//   for(let i = 0; i < nums.length; i++){
//     if(nums[i] === 1) {
//       currentConseCount += 1;
//       maxCount = Math.max(currentConseCount, maxCount);
//     } else {
//       currentConseCount = 0;
//     }
//   }
//   return maxCount;
// }

// findConsecutiveOnes([1,1,9,1,9,9,19,7,1,1,1,3,2,5,1])




// // Q. find longest word of a given sentence?

// function longestWord(sentence){
//   let wordsArray = sentence.split(' ');
//   let longestWord = wordsArray[0];
//   for(let i = 1; i < wordsArray.length; i++) {
//     if(wordsArray[i].length > longestWord.length) longestWord = wordsArray[i];
//   }
//   return longestWord;
// }


// longestWord('Hi I am Vivek and I am Backend Developer');








// // Remove duplicates from the given string

function replace(sentence, character, index){
  return sentence.slice(0, index) + character + sentence.slice(index + 1)
}

function removeDuplicateFromString(sentence){
  let arraySet = new Set([]);
  let readPointer = 0;
  let writePointer = 0;


  while(readPointer < sentence.length){
    if(!arraySet.has(sentence[readPointer])){
      arraySet.add(sentence[readPointer]);
      sentence = replace(sentence, sentence[readPointer], writePointer);
      writePointer++;
    }
    readPointer++;
  }

  return sentence.slice(0, writePointer);
}

console.log(removeDuplicateFromString("hhlo"));




// Ques 4 - Given an integer array nums, find the subarray with the largest sum,
// and return its sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4]     ----->>>>>    Output: 6,   [4,-1,2,1]
// Input: [5,4,-1,7,8]                ----->>>>>    Output: 23,  [5,4,-1,7,8]

// Brute Force Approach
function maxSubArrayBruteForce(nums) {
  let maxSum = nums[0];
  let startIdx = 0;
  let endIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum = currentSum + nums[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
        startIdx = i;
        endIdx = j;
      }
    }
  }

  return {
    sum: maxSum,
    subArray: nums.slice(startIdx, endIdx + 1),
  };
}

// Time Complexity - O(n^2)
// Space Complexity - O(1)

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Kadane's Algorithm

// [-2,1,-3,4,-1,2,1,-5,4]
function maxSubArray(nums) {
  let sum = 0;
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
}

// Time Complexity - O(n)
// Space Complexity - O(1)

console.log(maxSubArray([5, 4, -1, 7, 8]));




















// Solve a prefix expression

// Input : '-+8/632' {8+(6/3)-2}
// //8+2-2
// //10-2
// //8
// Output : 8

// Input : -+7*45+20 {7+(4*5)-2+0}
// Output : 25



// To solve a **prefix expression** (also called Polish notation), you process the expression **from right to left** using a stack. Each time you find an operand (number), push it to the stack. When you find an operator (`+`, `-`, `*`, `/`), pop two values off the stack, apply the operation, and push the result back.

// ### Why this approach?

// - Prefix means **operator comes before operands** (e.g., `- + 8 / 6 3 2`)
// - Evaluate **from right to left** so that operands for each operator are processed in the right order.
// - A **stack** helps keep track of numbers and partial results as you move through the problem.

// ***

// ## Step-by-step Example

// For input: `-+8/632`
// 1. Start at the end (`2`): push to stack → ``[1]
// 2. Next `3`: push to stack → `[2, 3]`
// 3. Next `6`: push to stack → `[2, 3, 6]`
// 4. Next `/`: it's an operator  
//    Pop 6 and 3 → do `6 / 3 = 2` → push result → `[2, 2]`
// 5. Next `8`: push → `[2, 2, 8]`
// 6. Next `+`: operator  
//    Pop 8 and 2 → `8 + 2 = 10` → push → `[2, 10]`
// 7. Next `-`: operator  
//    Pop 10 and 2 → `10 - 2 = 8` → push → ``
// 8. Stack has single answer: `8`

// ***

// ## Optimized JavaScript Solution

// ```javascript
// function evaluatePrefix(expression) {
//   const stack = [];
//   // Go from right to left
//   for (let i = expression.length - 1; i >= 0; i--) {
//     const char = expression[i];

//     if (!isNaN(char)) {
//       // Operand: push number
//       stack.push(Number(char));
//     } else {
//       // Operator: pop two numbers, apply op, push result
//       const a = stack.pop();
//       const b = stack.pop();
//       let res;
//       switch (char) {
//         case '+': res = a + b; break;
//         case '-': res = a - b; break;
//         case '*': res = a * b; break;
//         case '/': res = a / b; break;
//         default: throw new Error('Invalid operator');
//       }
//       stack.push(res);
//     }
//   }
//   return stack.pop();
// }

// // Examples:
// console.log(evaluatePrefix("-+8/632")); // Output: 8
// console.log(evaluatePrefix("-+7*45+20")); // Output: 25
// ```
// - This code works for **single-digit operands** and standard operators.[2][3]

// ***

// ## Interview Summary

// - Use a stack, work **right to left**.
// - Push operands, on operator: pop 2 items, compute, push result.
// - The final stack value is the answer.

// Let me know if you want to handle multi-digit numbers or clarify anything else!

// [1](https://www.dsavisualizer.in/visualizer/stack/polish/prefix)
// [2](https://www.geeksforgeeks.org/dsa/evaluation-prefix-expressions/)
// [3](https://notation-visualizer.ajayliu.com/stack)
// [4](https://stackoverflow.com/questions/56200343/evaluate-value-of-prefix-expression-js)
// [5](https://www.youtube.com/watch?v=EsbumKFdRYg)
// [6](https://tutorialhorizon.com/algorithms/evaluation-of-prefix-expressions-polish-notation-set-1/)