### Space Complexity of the Given Code

Your code reverses the entire string and compares it:
```javascript
function isPalindrome(str){
    let reversedString = '';
    for(let i = str.length-1; i >= 0; i--){
        reversedString += str[i]
    }
    return str === reversedString;
}
```
**Space Complexity:**
- It uses O(n) extra space, where n is the length of the string. That's because `reversedString` holds another full copy of the input.

***

### Can You Solve it in O(1) Space?
**Yes!** Use the two-pointer approach:
- Compare characters from left and right, moving towards the center.
- No new string is created—only a few variables (pointers) are used.

**Example:**
```javascript
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome('hello')); // false
console.log(isPalindrome('cac'));   // true
```
**Space Complexity:** O(1) – only pointers, no extra strings or arrays.

**Summary:**
- Original solution: O(n) space
- Two-pointer approach: O(1) space
- Two-pointer approach is optimal for palindrome check.[3][5][6]

Let me know if you'd like the code explained line-by-line or tested on more examples!







### You can reverse a sentence without using .split() in JavaScript by iterating manually — for example:

```javascript
function reverseSentence(str) {
  let word = "";
  let result = "";
  
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === " ") {
      result += word + " ";
      word = "";
    } else {
      word = str[i] + word;
    }
  }
  result += word; // add last word
  return result;
}

console.log(reverseSentence("Hello world from JS")); 
// Output: "JS from world Hello"
```

**✅ Explanation:**
- We loop through the string from the end to the beginning.
- Each time we hit a space, we add the current word to the result.
- This avoids using .split() entirely.


Would you like the words reversed (as above) or the characters reversed in the sentence?
