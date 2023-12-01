// 1. Valid Anagram

function isValidAnagram(s, t){
    if(s.length != t.length) return false;
    let obj1 = {};
    let obj2 = {};
    for(let i = 0; i < s.length; i++){
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }
    for(let key in obj1){
        console.log(key);
        if(obj1[key] != obj2[key]) return false;
    }

    return true;
}
// console.log(isValidAnagram("rat", "tar"));





// Best Time to sell Stock and get more profit

function maxProfit(prices){
    let minimumStcokPrice = prices[0];
    let profit = 0;
    for(let i = 1; i < prices.length; i++){
        if(prices[i] < minimumStcokPrice) minimumStcokPrice = prices[i];
        profit = Math.max((prices[i] - minimumStcokPrice), profit);
    }

    return profit;
}
console.log(maxProfit([7,6,5,4,3,50]));





// Q3. asked in Neo Solutions

// Removing consecutive duplicate characters from a string can be achieved with a recursive function. Here's a corrected JavaScript function to accomplish this:

```javascript
function removeConsecutiveDuplicates(input) {
  let modified = false;

  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] === input[i + 1]) {
      input = input.slice(0, i) + input.slice(i + 2);
      modified = true;
      break;
    }
  }

  if (modified) {
    return removeConsecutiveDuplicates(input);
  } else {
    return input;
  }
}

// Test cases
console.log(removeConsecutiveDuplicates("abbbac")); // Output: "abac"
console.log(removeConsecutiveDuplicates("abbac"));  // Output: "c"
console.log(removeConsecutiveDuplicates("aabb"));   // Output: ""
console.log(removeConsecutiveDuplicates("aabbcc")); // Output: ""
```

// In this corrected solution:

// - We use a `for` loop to iterate through the string and check for consecutive duplicate characters.

// - When consecutive duplicates are found, we remove them by splicing the string.

// - We set the `modified` flag to `true` to indicate that changes were made.

// - After one pass through the string, if `modified` is `true`, we recursively call the function again to continue checking for additional consecutive duplicates.

// - The recursion continues until no more consecutive duplicates are found.

// This should correctly remove consecutive duplicate characters from the input string.





// To determine how many people can see the sun from a tower with varying heights and the number of people on it, you can write a JavaScript program as follows:

```javascript
function countPeopleSeeingSun(towerData) {
  let maxHeight = 0;
  let count = 0;

  // Iterate through the tower data to find people who can see the sun.
  for (const [height, people] of towerData) {
    if (height > maxHeight) {
      maxHeight = height;
      count += people;
    } else if (height === maxHeight) {
      count += people;
    }
  }

  return count;
}

// Test case
const towerData = [[5, 3], [3, 4], [6, 2]];
const result = countPeopleSeeingSun(towerData);
console.log(result); // Output: 5
```

// In this code:

// - `countPeopleSeeingSun` takes an array `towerData` as input, where each subarray contains two elements: the height of the tower and the number of people on it.

// - The function iterates through the `towerData` array and keeps track of the `maxHeight` and the `count` of people who can see the sun.

// - If a tower is taller than the previous tallest tower (i.e., its height is greater than `maxHeight`), it updates both `maxHeight` and `count`. If the height is the same as the previous tallest tower, it adds the number of people to the `count`.

// - The function returns the `count`, which represents the total number of people who can see the sun.

// The provided test case, `[[5, 3], [3, 4], [6, 2]]`, correctly returns `5` as the output because the tallest tower is of height `6`, and it has `2` people on it.