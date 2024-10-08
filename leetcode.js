// 229. Majority Element II
// Medium
// Topics
// Companies
// Hint
// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]
 

// Constraints:

// 1 <= nums.length <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow up: Could you solve the problem in linear time and in O(1) space?






// Yes, we can adapt the Boyer-Moore Voting Algorithm to find elements that appear more than n/3 times in an array.
// This variation of the algorithm can be used to find elements that appear more than ⌊n/3⌋ times, where n is the length of the array.

// The algorithm involves selecting two candidates and two counters, similar to the original algorithm. However, instead of selecting one majority candidate, we select two candidates because there can be at most two elements that appear more than ⌊n/3⌋ times.

// Here's how the modified algorithm works:

// 0. **Handle Edge Case**: 
//    - If the length of the `nums` array is less than 3, we simply return the array with unique elements using the `Set` data structure.


// 1. Initialize two variables `candidate1`, `candidate2` and their corresponding counters `count1` and `count2`. Set both counters to 0.

// 2. Iterate through the array:
//    - If the current element is equal to either candidate, increment the corresponding count.
//    - If one of the counters becomes zero, assign the current element as the new candidate and set the count to 1.
//    - If the current element is different from both candidates and both counts are nonzero, decrement both counts.

// 3. After the iteration, we have two potential candidates. We need to verify if they appear more than ⌊n/3⌋ times.

// 4. Iterate through the array again and count the occurrences of the potential candidates. If any candidate appears more than ⌊n/3⌋ times, it is added to the result.

// 5. Return the result containing the majority elements.

// Here's a JavaScript implementation of this modified algorithm:

```javascript
function majorityElements(nums) {

    if (nums.length < 3) {
        return [...new Set(nums)];
    }
    let candidate1, candidate2;
    let count1 = 0, count2 = 0;

    // Step 1: Find potential candidates
    for (let num of nums) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }

    // Step 2: Verify candidates
    count1 = 0;
    count2 = 0;
    for (let num of nums) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        }
    }

    // Step 3: Check if candidates are majority elements
    const result = [];
    if (count1 > nums.length / 3) {
        result.push(candidate1);
    }
    if (count2 > nums.length / 3) {
        result.push(candidate2);
    }

    return result;
}

// Example usage
const nums = [1, 2, 2, 3, 2, 1, 1, 3]; // Majority elements: [1, 2]
console.log("Majority elements:", majorityElements(nums));
```

//In this example, the majority elements are 1 and 2 because both of them appear more than ⌊n/3⌋ times in the array.
// The modified algorithm efficiently identifies these majority elements with just two passes through the array.

































































// 605. Can Place Flowers
// Easy
// Topics
// Companies
// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
 

// Constraints:

// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length






//Here's a solution in JavaScript:

```javascript
function canPlaceFlowers(flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
            flowerbed[i] = 1;
            count++;
        }
        if (count >= n) {
            return true;
        }
    }
    return count >= n;
}

// Example usage:
const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
console.log(canPlaceFlowers(flowerbed, n)); // Output: true
```

//This function iterates over the `flowerbed` array and checks each plot.
//If a plot is empty (0) and both its neighbors are also empty (or it's at the edge of the flowerbed), it can be planted with a flower.
//The function keeps track of the number of newly planted flowers (`count`) and returns `true` if it's equal to or greater than `n`, indicating that `n` new flowers can be planted without violating the no-adjacent-flowers rule.
//Otherwise, it returns `false`.

// Certainly! Let's break down the code step by step:

// 1. `flowerbed[i] === 0`: This condition checks if the current plot at index `i` is empty, indicated by the value `0`.

// 2. `(i === 0 || flowerbed[i - 1] === 0)`: This part of the condition ensures that the current plot is either the first plot in the flowerbed (index `0`) or the plot before the current one is empty. It prevents planting a flower if there's already a flower planted in the previous plot, maintaining the rule that no two flowers can be adjacent.

// 3. `(i === flowerbed.length - 1 || flowerbed[i + 1] === 0)`: Similarly, this part of the condition ensures that the current plot is either the last plot in the flowerbed or the plot after the current one is empty. It prevents planting a flower if there's already a flower planted in the next plot, also maintaining the rule that no two flowers can be adjacent.

// 4. If all the conditions above are met, it means that the current plot satisfies the criteria for planting a flower without violating the adjacency rule. So, `flowerbed[i]` is set to `1` to indicate that a flower is planted at this plot.

// 5. Finally, the `count` variable is incremented to keep track of the number of flowers planted.

// In summary, this code snippet is a part of the solution to the flowerbed problem. It checks each plot in the flowerbed to determine if a flower can be planted at that location based on the conditions specified, and if so, it updates the flowerbed and increments the count of planted flowers.
























































// You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?.
// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// Here's how we can implement it in JavaScript:

```javascript
function climbStairs(n) {
    // Base cases: 1 way to reach 1st step, 2 ways to reach 2nd step
    if (n === 1) return 1;
    if (n === 2) return 2;

    // Initialize an array to store the number of ways to reach each step
    const ways = [0, 1, 2];

    // Iterate from the 3rd step to the nth step
    for (let i = 3; i <= n; i++) {
        // Calculate the number of ways to reach the current step
        ways[i] = ways[i - 1] + ways[i - 2];
    }

    // Return the number of ways to reach the nth step
    return ways[n];
}

// Example usage:
console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3
```

// In this solution:
// - We start with base cases where there is 1 way to reach the 1st step and 2 ways to reach the 2nd step.
// - We then iterate from the 3rd step to the nth step, calculating the number of ways to reach each step by adding the number of ways to reach the previous two steps.
// - Finally, we return the number of ways to reach the nth step, which is stored in the `ways` array.

// This approach optimizes the solution by avoiding redundant calculations, leading to a time complexity of O(n), where n is the number of steps.



































































// Given a string expression of numbers and operators,
// return all possible results from computing all the different possible ways to group numbers and operators. 
// You may return the answer in any order.

// The test cases are generated such that the output values fit in a 32-bit integer and the number of different results does not exceed 10^4

// Example 1:

// Input: expression = "2-1-1"
// Output: [0,2]
// Explanation:
// ((2-1)-1) = 0 
// (2-(1-1)) = 2

// Example 2:

// Input: expression = "2*3-4*5"
// Output: [-34,-14,-10,-10,10]
// Explanation:
// (2*(3-(4*5))) = -34 
// ((2*3)-(4*5)) = -14 
// ((2*(3-4))*5) = -10 
// (2*((3-4)*5)) = -10 
// (((2*3)-4)*5) = 10







// To solve this problem, we can use recursion to split the expression into smaller parts at each operator.
// We'll recursively compute all possible results for the left and right parts of the expression and then combine them based on the operator.
// We'll continue this process until we have only one number left in the expression.

// Here's the implementation in JavaScript:

```javascript
function diffWaysToCompute(expression) {
    const memo = new Map(); // Memoization to store computed results
    
    // Helper function to recursively compute all possible results
    function computeHelper(expr) {
        // If the result for this expression is already computed, return it
        if (memo.has(expr)) return memo.get(expr);
        
        const result = [];
        
        // Iterate through the expression to find operators
        for (let i = 0; i < expr.length; i++) {
            const char = expr[i];
            if (char === '+' || char === '-' || char === '*') {
                // Split the expression into left and right parts
                const leftExpr = expr.substring(0, i);
                const rightExpr = expr.substring(i + 1);
                
                // Recursively compute all possible results for left and right parts
                const leftResults = computeHelper(leftExpr);
                const rightResults = computeHelper(rightExpr);
                
                // Combine left and right results based on the operator
                for (const left of leftResults) {
                    for (const right of rightResults) {
                        if (char === '+') {
                            result.push(left + right);
                        } else if (char === '-') {
                            result.push(left - right);
                        } else if (char === '*') {
                            result.push(left * right);
                        }
                    }
                }
            }
        }
        
        // If the expression is just a number, add it to the result
        if (result.length === 0) {
            result.push(parseInt(expr));
        }
        
        // Store the computed result in the memoization map
        memo.set(expr, result);
        
        return result;
    }
    
    // Start the recursion with the given expression
    return computeHelper(expression);
}

// Example usage:
console.log(diffWaysToCompute("2-1-1")); // Output: [0, 2]
console.log(diffWaysToCompute("2*3-4*5")); // Output: [-34, -14, -10, -10, 10]
```

//This solution uses memoization to avoid redundant calculations and has a time complexity of O(n^3) where n is the length of the expression.





// To solve the "diffWaysToCompute" problem, we can use a recursive approach combined with memoization to avoid redundant calculations.
// Here's the general approach:

// 1. Define a recursive function `computeHelper` that takes an expression as input and returns an array of all possible results.

// 2. Inside the `computeHelper` function:
//    - Check if the result for the current expression is already computed and stored in the memoization map. If it is, return the stored result.
//    - Iterate through the expression to find operators (+, -, *).
//    - Split the expression into left and right parts based on the current operator.
//    - Recursively call `computeHelper` on the left and right parts to compute all possible results for them.
//    - Combine the results from the left and right parts based on the current operator, and add the combined results to the final result array.
//    - Store the computed result in the memoization map for future reference.
//    - Return the final result array.

// 3. Start the recursion with the given expression.

// 4. Return the result obtained from the recursion.

// This approach efficiently computes all possible results by breaking down the expression into smaller parts and recursively computing results for each part. The memoization ensures that we don't recompute results for the same sub-expressions multiple times, reducing the time complexity of the algorithm.

// I provided a JavaScript implementation of this approach in the previous response. Let me know if you need further clarification or assistance!





































































// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]] in javascript write solution O(n) and O(n^2)





// To solve this problem in JavaScript with O(n) time complexity, we can use two sets to keep track of the rows and columns that contain zeros.
// Then, we iterate through the matrix and mark the rows and columns that contain zeros in the sets.
// Finally, we iterate through the matrix again and set the elements to zero based on the information stored in the sets.

// Here's the implementation:

```javascript
function setZeroes(matrix) {
    const rows = new Set();
    const cols = new Set();

    // Iterate through the matrix to mark rows and columns containing zeros
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }

    // Iterate through the matrix again to set zeros based on rows and columns marked
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (rows.has(i) || cols.has(j)) {
                matrix[i][j] = 0;
                matrix[j][i] = 0;
            }
        }
    }
    
    return matrix;
}

// Example usage:
const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];
setZeroes(matrix);
console.log(matrix);
```

// This solution has O(n) time complexity because it only requires two passes through the matrix, 
//where n is the total number of elements in the matrix.























































// 56. Merge Intervals
// Solved
// Medium
// Topics
// Companies
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
// and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104





    // To merge overlapping intervals in JavaScript, we can follow these steps:

    // 1. Sort the intervals based on the start time.
    // 2. Initialize an empty array to store the merged intervals.
    // 3. Iterate through the sorted intervals:
    //    - If the current interval overlaps with the previous one (end of previous interval >= start of current interval), merge them by updating the end time of the previous interval.
    //    - If they don't overlap, add the previous interval to the result array and update the previous interval to the current one.
    // 4. After the loop, add the last interval to the result array.
    // 5. Return the result array.

    // Here's the implementation:

```javascript
function merge(intervals) {
    if (intervals.length === 0) return [];
    
    // Step 1: Sort intervals based on the start time
    intervals.sort((a, b) => a[0] - b[0]);
    
    // Step 2: Initialize an empty array to store the merged intervals
    let merged = [intervals[0]];
    
    // Step 3: Iterate through the sorted intervals
    for (let i = 1; i < intervals.length; i++) {
        let prev = merged[merged.length - 1];
        let curr = intervals[i];
        
        // If the current interval overlaps with the previous one
        if (prev[1] >= curr[0]) {
            // Merge them by updating the end time of the previous interval
            prev[1] = Math.max(prev[1], curr[1]);
        } else {
            // If they don't overlap, add the previous interval to the result array
            merged.push(curr);
        }
    }
    
    // Step 4 & 5: Return the result array
    return merged;
}

// Test cases
const intervals1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(merge(intervals1)); // Output: [[1, 6], [8, 10], [15, 18]]

const intervals2 = [[1, 4], [4, 5]];
console.log(merge(intervals2)); // Output: [[1, 5]]
```

//This implementation efficiently merges overlapping intervals in linear time complexity.

// Sure! The "Merge Intervals" problem is about combining overlapping intervals into a single interval. Imagine you have a list of intervals, where each interval represents a range of numbers. Some of these intervals might overlap with each other. 

// For example, if you have intervals like [[1,3], [2,6], [8,10], [15,18]], the intervals [1,3] and [2,6] overlap because the second interval starts before the first one ends. Similarly, [8,10] and [15,18] don't overlap with any other interval.

// To solve this problem, we use the JavaScript code provided earlier:

// 1. First, we sort the intervals based on their starting points.
// 2. Then, we initialize an array to store the merged intervals.
// 3. We iterate through the sorted intervals. If the current interval overlaps with the previous one, we merge them by updating the end time of the previous interval. If they don't overlap, we add the previous interval to the result array and update the previous interval to the current one.
// 4. Finally, we return the array of merged intervals.

// So, for the input [[1,3], [2,6], [8,10], [15,18]], the output would be [[1,6], [8,10], [15,18]], which means the intervals [1,3] and [2,6] are merged into [1,6] because they overlap. The other intervals remain unchanged because they don't overlap with any other interval.


















































































// 11. Container With Most Water
// Medium
// Topics
// Companies
// Hint
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

 

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
 

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104




// This problem is about finding the maximum area of water that can be trapped between vertical lines represented by an array.
// Each element in the array represents the height of a vertical line, and the distance between any two vertical lines is one unit.

// To solve this problem, we need to find two vertical lines such that the area between them and the x-axis is maximized.
// We can achieve this by using a two-pointer approach.
// We start with pointers at the beginning and end of the array and gradually move them towards each other.
// At each step, we calculate the area formed by the two lines and update the maximum area if necessary. 

// Here's the step-by-step solution in JavaScript:

```javascript
function maxArea(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const minHeight = Math.min(height[left], height[right]);
        const area = minHeight * (right - left);
        maxArea = Math.max(maxArea, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

// Example usage:
const height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height1)); // Output: 49

const height2 = [1, 1];
console.log(maxArea(height2)); // Output: 1
```

//This solution has a time complexity of O(n), where n is the number of elements in the input array.
// It iterates through the array only once, using two pointers to efficiently search for the maximum area.


// By Using BruteForce Apporoach
```
function maxArea(height) {
    let maxArea = 0;

    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++){
            console.log(height[i], height[j], j - i)

            currentArea = Math.min(height[i], height[j]) * (j -i );
            console.log(currentArea)
            maxArea = Math.max(maxArea, currentArea);
            
        }
    }
    return maxArea;
}

console.log(maxArea(height))
```


















































































// You can solve this problem using a two-pass approach to calculate the product of all numbers in the array.
// In the first pass, calculate the product of all numbers to the left of each element, and in the second pass, calculate the product of all numbers to the right of each element.
// Then, multiply the corresponding left and right products to get the final result.

// Here's how you can implement this approach in JavaScript:

```javascript
function productExceptSelf(nums) {
    const n = nums.length;
    
    // Initialize arrays to store the left and right products
    const leftProducts = new Array(n).fill(1);
    const rightProducts = new Array(n).fill(1);
    
    // Calculate the product of all numbers to the left of each element
    let leftProduct = 1;
    for (let i = 1; i < n; i++) {
        leftProduct *= nums[i - 1];
        leftProducts[i] = leftProduct;
    }
    
    // Calculate the product of all numbers to the right of each element
    let rightProduct = 1;
    for (let i = n - 2; i >= 0; i--) {
        rightProduct *= nums[i + 1];
        rightProducts[i] = rightProduct;
    }
    
    // Multiply corresponding left and right products to get the final result
    const result = [];
    for (let i = 0; i < n; i++) {
        result[i] = leftProducts[i] * rightProducts[i];
    }
    
    return result;
}

// Example usage:
const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // Output: [24, 12, 8, 6]
```

// Explanation:
// - We initialize two arrays, `leftProducts` and `rightProducts`, to store the product of all numbers to the left and right of each element, respectively.
// - In the first pass, we calculate the product of all numbers to the left of each element and store it in the `leftProducts` array.
// - In the second pass, we calculate the product of all numbers to the right of each element and store it in the `rightProducts` array.
// - Finally, we multiply the corresponding left and right products for each element to get the final result.





































































// The brute force approach to finding the longest common prefix in an array of strings 
// involves comparing characters at corresponding positions in each string until a mismatch is found or the end of the shortest string is reached.
// Here's a JavaScript implementation of this approach:

```javascript
function longestCommonPrefix(strs) {
    if (strs.length === 0) return '';

    // Get the shortest string in the array
    let minLen = Math.min(...strs.map(str => str.length));
    let prefix = '';

    // Iterate over each character in the shortest string
    for (let i = 0; i < minLen; i++) {
        // Get the character at the current position in the first string
        let char = strs[0][i];

        // Check if the character at this position matches in all strings
        if (strs.every(str => str[i] === char)) {
            // If all characters match, add this character to the prefix
            prefix += char;
        } else {
            // If there's a mismatch, break out of the loop
            break;
        }
    }

    return prefix;
}
```

// Explanation:

// 1. Check if the input array `strs` is empty. If it is, return an empty string since there are no strings to compare.

// 2. Find the length of the shortest string in the array by using the `map()` function to get an array of string lengths and then finding the minimum using `Math.min()`.

// 3. Initialize an empty string `prefix` to store the common prefix.

// 4. Iterate over each character position from 0 to `minLen - 1` (the length of the shortest string).

// 5. For each character position:
//    - Get the character at the current position in the first string (`strs[0]`).
//    - Check if this character matches the character at the same position in all other strings using the `every()` function. If they all match, append the character to the `prefix` string.
//    - If there's a mismatch, break out of the loop since the common prefix ends here.

// 6. After the loop completes, return the `prefix` string containing the longest common prefix found among all strings in the array.

// This brute force approach has a time complexity of O(n * m), where n is the number of strings in the array and m is the length of the shortest string.
// It compares characters at each position in the strings until a mismatch is found.






// To find the longest common prefix among an array of strings in an optimized way, you can use the following JavaScript code. This approach compares characters of the strings one by one until a mismatch is found. It effectively minimizes the number of comparisons, achieving a time complexity of O(n * m), where n is the number of strings and m is the length of the shortest string.

// Here's the code for the optimized solution:

```javascript
function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    
    // Start with the first string as the initial prefix
    let prefix = strs[0];
    
    // Loop through the rest of the strings
    for (let i = 1; i < strs.length; i++) {
        // While the current prefix is not a prefix of the string strs[i], reduce it
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            // If the prefix is reduced to an empty string, return ""
            if (prefix === "") return "";
        }
    }
    
    return prefix;
}

// Example usage
const strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings)); // Output: "fl"

const strings2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strings2)); // Output: ""
```

// ### Explanation:

// 1. **Initial Check**: If the input array `strs` is empty, the function returns an empty string since there are no strings to find a common prefix.

// 2. **Initialize Prefix**: The first string in the array is considered the initial prefix.

// 3. **Iterate Through Strings**: For each string in the array starting from the second one, check if the current prefix is a prefix of the string.

// 4. **Reduce Prefix**: If the current prefix is not a prefix of the string, reduce the prefix by removing the last character and repeat the check.

// 5. **Check for Empty Prefix**: If the prefix becomes empty during the reduction process, return an empty string as there is no common prefix.

// 6. **Return the Prefix**: After iterating through all strings, the resulting prefix is the longest common prefix shared by all strings in the array.

// This solution is efficient and straightforward, leveraging the properties of common prefixes and string comparison operations to achieve an optimal result.










// 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?







// Sure, you can solve this problem using a linear time and constant space algorithm called Boyer-Moore Voting Algorithm.
// Here's how you can implement it in JavaScript:

// ```javascript
// function majorityElement(nums) {
//     let candidate = null;
//     let count = 0;
    
//     // Find the majority candidate
//     for (let num of nums) {
//         if (count === 0) {
//             candidate = num;
//         }
//         count += (num === candidate) ? 1 : -1;
//     }
    
//     // Verify if the candidate is the majority element
//     count = 0;
//     for (let num of nums) {
//         if (num === candidate) {
//             count++;
//         }
//     }
    
//     return (count > nums.length / 2) ? candidate : null;
// }

// // Example usage:
// const nums1 = [3, 2, 3];
// console.log(majorityElement(nums1)); // Output: 3

// const nums2 = [2, 2, 1, 1, 1, 2, 2];
// console.log(majorityElement(nums2)); // Output: 2
// ```

// In this implementation:

// - We iterate through the array to find a potential majority candidate.
// - The algorithm assumes that the majority element always exists, so there is no need for explicit checking.
// - We initialize a `candidate` variable to store the current majority candidate and a `count` variable to keep track of its frequency.
// - For each element in the array, if the count is 0, we update the candidate to the current element.
// - Otherwise, we increment or decrement the count based on whether the current element matches the candidate.
// - After finding the potential candidate, we iterate through the array again to verify if it is indeed the majority element by counting its occurrences.
// - If the count of the candidate is greater than half the length of the array, we return the candidate as the majority element; otherwise, we return `null`.
// - This algorithm has a time complexity of O(n) and a space complexity of O(1), meeting the requirements of the problem.























// The Boyer-Moore Voting Algorithm is used to find the majority element in an array, which is the element that appears more than n/2 times, where n is the length of the array.
// It achieves this with a time complexity of O(n) and constant space complexity.

// Here's how the algorithm works:

// 1. Initialize two variables: `candidate` and `count`. Set `candidate` to any element from the array and `count` to 1.

// 2. Iterate through the array starting from the second element:
//    - If the current element is equal to the candidate, increment the count.
//    - If the current element is different from the candidate, decrement the count.
//    - If the count becomes zero, update the candidate to the current element and reset the count to 1.

// 3. At the end of the iteration, the candidate will be the potential majority element.
// However, we need to verify if it appears more than n/2 times in the array.

// 4. Iterate through the array again and count the occurrences of the candidate element.
// If it appears more than n/2 times, it is the majority element. Otherwise, there is no majority element.

// Here's a simple example in JavaScript:

```javascript
function majorityElement(nums) {
    let candidate;
    let count = 0;
    
    // Step 1: Find potential candidate
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    
    // Step 2: Verify candidate
    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }
    
    // Check if candidate is the majority element
    return (count > nums.length / 2) ? candidate : null;

}

// Example usage
const nums = [3, 3, 4, 2, 4, 4, 2, 4, 4]; // Majority element: 4
console.log("Majority element:", majorityElement(nums));
```

// In this example, the majority element is 4 because it appears 5 times, which is more than half of the array length (9/2 = 4.5).
// The Boyer-Moore Voting Algorithm efficiently identifies this majority element with just two passes through the array.























// To find the minimum element in a sorted rotated array of unique elements, we can use a modified binary search algorithm. The binary search approach ensures that the solution runs in O(log n) time complexity.

// Here's the optimized code in JavaScript:

```javascript
function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // Compare mid element with the rightmost element
        if (nums[mid] > nums[right]) {
            // If mid element is greater than the rightmost element,
            // the minimum element is in the right half
            left = mid + 1;
        } else {
            // Otherwise, the minimum element is in the left half including mid
            right = mid;
        }
    }

    // At the end of the while loop, left == right
    // This will be the index of the minimum element
    return nums[left];
}

// Example usage:
console.log(findMin([3, 4, 5, 1, 2])); // Output: 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // Output: 0
console.log(findMin([11, 13, 15, 17])); // Output: 11
```

// ### Explanation
// 1. **Initialization**:
//     - `left` is initialized to 0.
//     - `right` is initialized to the last index of the array.

// 2. **Binary Search Loop**:
//     - Calculate `mid` as the floor of the average of `left` and `right`.
//     - Compare the middle element `nums[mid]` with the rightmost element `nums[right]`.
//         - If `nums[mid] > nums[right]`, it means the smallest element is in the right half of the array. So, set `left = mid + 1`.
//         - If `nums[mid] <= nums[right]`, it means the smallest element could be at `mid` or in the left half. So, set `right = mid`.

// 3. **Result**:
//     - When `left` equals `right`, the loop terminates. The smallest element is at index `left`.

// This binary search approach effectively narrows down the search space by half in each step, ensuring an O(log n) time complexity.




























// To find the k-th missing positive integer in a given array using binary search, we can utilize a combination of array manipulation and binary search techniques. Here's a step-by-step approach to solve this problem:

// 1. **Understanding the Problem**: 
//    Given a sorted array of positive integers, we need to find the k-th missing positive integer.

// 2. **Approach**:
//    - We will use binary search to efficiently find the position where the k-th missing positive integer would be.
//    - The idea is to use the difference between the expected and actual value at each position to determine how many numbers are missing up to that position.

// 3. **Steps**:
//    - Calculate the number of missing integers up to each position using binary search.
//    - Adjust the search range based on the number of missing integers until the k-th missing integer is found.

// Here's the JavaScript code to find the k-th missing positive integer using binary search:

// ```javascript
// function findKthMissingPositive(arr, k) {
//     let left = 0, right = arr.length;

//     while (left < right) {
//         let mid = Math.floor((left + right) / 2);
//         // Calculate the number of missing numbers until the mid position
//         let missingCount = arr[mid] - (mid + 1);

//         if (missingCount < k) {
//             left = mid + 1;
//         } else {
//             right = mid;
//         }
//     }

//     // At the end of the binary search, left is the index where the k-th missing number should be
//     // The k-th missing number is k + left because there are `left` numbers in the array before the k-th missing number
//     return left + k;
// }

// Example usage:
// let arr = [2, 3, 4, 7, 11];
// let k = 5;
// console.log(findKthMissingPositive(arr, k)); // Output: 9
```
```
// ### Explanation:

// 1. **Initialization**:
//    - `left` is set to 0 and `right` is set to the length of the array. This defines our search range.

// 2. **Binary Search Loop**:
//    - We calculate the middle index `mid`.
//    - We calculate `missingCount` as `arr[mid] - (mid + 1)`. This gives us the number of missing integers up to index `mid`.
//      - The formula works because in a perfectly sequential array without missing numbers, the element at index `mid` should be `mid + 1`.
//      - By subtracting `mid + 1` from `arr[mid]`, we get the count of missing numbers up to that point.
//    - If `missingCount` is less than `k`, it means we need more missing numbers, so we move our search to the right half by setting `left = mid + 1`.
//    - If `missingCount` is greater than or equal to `k`, we move our search to the left half by setting `right = mid`.

// 3. **Result Calculation**:
//    - After the loop ends, `left` will point to the position where the k-th missing number should be.
//    - The k-th missing number is calculated as `left + k`.

// ### Example Walkthrough:
// For `arr = [2, 3, 4, 7, 11]` and `k = 5`:
// - Initially, `left = 0`, `right = 5`.
// - Calculate `mid`, `missingCount`, and adjust `left` and `right` accordingly.
// - The loop narrows down the range, and finally, we determine that the 5th missing positive integer is 9.

// This approach ensures that we efficiently find the k-th missing positive integer using binary search.







// Given the array nums after the possible rotation and an integer
//  target, return the index of the target if it is in nums, or -1 if it is not
//  in nums.
//  You must write an algorithm with O(log n) runtime complexity.
//  Input: nums = [4,5,6,7,0,1,2], target = 0
//  Output: 4
//  Input: nums = [4,5,6,7,0,1,2], target = 3
//  Output: -1




// To solve this problem, we can use a modified version of binary search. Binary search is an efficient algorithm with a runtime complexity of O(log n) that works on sorted arrays by repeatedly dividing the search interval in half. Since the array is rotated, we need to make slight adjustments to the traditional binary search.

// ### Steps to Understand the Problem:

// 1. **Identify the Midpoint**:
//    - In binary search, you always start by finding the middle element of the array.

// 2. **Check if Midpoint is the Target**:
//    - If the middle element is the target, return its index.

// 3. **Determine Which Half is Sorted**:
//    - In a rotated sorted array, one half (either left or right) will always be sorted. We need to figure out which one is sorted by comparing the start, mid, and end elements.

// 4. **Decide Which Half to Search**:
//    - If the left half is sorted, check if the target lies within that range. If it does, adjust the end pointer to search the left half. Otherwise, adjust the start pointer to search the right half.
//    - If the right half is sorted, check if the target lies within that range. If it does, adjust the start pointer to search the right half. Otherwise, adjust the end pointer to search the left half.

// 5. **Repeat**:
//    - Continue this process until you find the target or exhaust the search space.

// ### JavaScript Code Implementation:

```javascript
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        // If the target is found at the mid index
        if (nums[mid] === target) {
            return mid;
        }
        
        // Determine if the left half is sorted
        if (nums[left] <= nums[mid]) {
            // Check if the target is in the sorted left half
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;  // Search in the left half
            } else {
                left = mid + 1;   // Search in the right half
            }
        }
        // Otherwise, the right half must be sorted
        else {
            // Check if the target is in the sorted right half
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;   // Search in the right half
            } else {
                right = mid - 1;  // Search in the left half
            }
        }
    }
    
    // If the target is not found, return -1
    return -1;
}

// Example usage:
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));  // Output: 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));  // Output: -1
```

// ### Explanation:

// - **Initialization**:
//   - `left` and `right` are pointers that represent the current search space.
  
// - **Main Loop**:
//   - We calculate the `mid` index. If `nums[mid]` is the target, we return `mid`.
//   - We then check whether the left half (`nums[left]` to `nums[mid]`) is sorted by comparing `nums[left]` and `nums[mid]`.
//   - Depending on whether the target is within the sorted half, we adjust our search range by moving either `left` or `right`.

// - **Exit Condition**:
//   - The loop continues until `left` exceeds `right`. If the target is not found, `-1` is returned.

// This method effectively uses binary search to find the target in a rotated sorted array with a time complexity of O(log n).
















// Given an integer array nums, find a subarray that has the largest
//  product, and return the product.
//  Input: nums = [2,3,-2,4]
//  Output: 6
//  Explanation: [2,3] has the largest product 6.
//  Input: nums = [-2,0,-1]
//  Output: 0
//  Explanation: The result cannot be 2, because [-2,-1] is not a
//  subarray.












// To solve the problem of finding the subarray with the largest product in an array of integers, we can use a dynamic programming approach. Here's the basic idea:

// ### Explanation:

// 1. **Track Two Values**:
//    - **Maximum Product (`maxProduct`)**: The maximum product of the subarray found so far.
//    - **Minimum Product (`minProduct`)**: The minimum product of the subarray found so far, because a negative number multiplied by another negative number can potentially become the maximum product.

// 2. **Iterate Through the Array**:
//    - As we iterate through the array, at each element, we need to consider three possibilities:
//      - The current number itself.
//      - The product of the current number and the previous maximum product (if the current number is positive).
//      - The product of the current number and the previous minimum product (if the current number is negative).

// 3. **Update Maximum and Minimum Products**:
//    - For each element in the array, calculate the maximum and minimum products up to that point. Update the overall maximum product accordingly.

// 4. **Return the Maximum Product**:
//    - The maximum product found during the iteration will be the answer.

// ### JavaScript Code Implementation:

```javascript
function maxProduct(nums) {
    if (nums.length === 0) return 0;

    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let current = nums[i];
        
        // Calculate possible candidates for max and min products
        let tempMax = Math.max(current, maxProduct * current, minProduct * current);
        let tempMin = Math.min(current, maxProduct * current, minProduct * current);

        // Update maxProduct and minProduct for the next iteration
        maxProduct = tempMax;
        minProduct = tempMin;

        // Update the result with the maximum product found so far
        result = Math.max(result, maxProduct);
    }

    return result;
}

// Example usage:
console.log(maxProduct([2, 3, -2, 4]));  // Output: 6
console.log(maxProduct([-2, 0, -1]));    // Output: 0
```

// ### Explanation of Code:

// 1. **Initialization**:
//    - `maxProduct` and `minProduct` are initialized to the first element of the array because the subarray must include at least one number.
//    - `result` is also initialized to the first element as this will store the maximum product found.

// 2. **Iteration**:
//    - For each element in the array, we compute three values:
//      - `current`: The current element.
//      - `tempMax`: The maximum product so far, considering the current element.
//      - `tempMin`: The minimum product so far, considering the current element.
//    - These are calculated by considering whether multiplying the current element by the previous `maxProduct` or `minProduct` would yield a higher or lower value, respectively.

// 3. **Update the Result**:
//    - After calculating the temporary max and min values, update the `maxProduct` and `minProduct` for the next iteration.
//    - Update `result` with the maximum value found so far.

// 4. **Return the Result**:
//    - Once the loop completes, `result` will hold the largest product of any subarray in `nums`.

// This approach efficiently finds the subarray with the largest product in O(n) time complexity, where n is the length of the array.











// Given an integer array nums, find subarray with largest sum and returns its sum?

// Input [-2,1,-3,4,-1,2,1,-5,4] => 6
// Input [5,4,-1,7,8] => 23


// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// using Kadana's Algorithm



// function maxSubArray(nums) {
//     // let maxSum = nums[0];
//     // let currentSum = 0;

//     // for (let i = 0; i < nums.length; i++) {
//     //     currentSum = Math.max(nums[i], currentSum + nums[i]);
//     //     maxSum = Math.max(maxSum, currentSum);  
//     // }
//     // return maxSum;

//     if(nums.length === 0) return 0;
//     let maxSum = nums[0];
//     let currentSum = 0;

//     for (let i = 0; i < nums.length; i++) {
//         currentSum += nums[i];
        
//         maxSum = Math.max(maxSum, currentSum); 
//         if(currentSum < 0) currentSum = 0;
//     }
//     return maxSum;
// }
// console.log(maxSubArray(nums));// 1215 => 1200
// 1225 => 1250


