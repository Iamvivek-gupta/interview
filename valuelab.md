// const users = [{ id: 3, salary: 50000, name: 'B' },
// { id: 2, salary: 60000, name: 'C' },
// { id: 1, salary: 45000, name: 'A' },

// { id: 4, salary: 55000, name: 'E' },

// { id: 6, salary: 45000, name: 'D' },

// { id: 5, salary: 63000, name: 'F' },

// { id: 7, salary: 50000, name: 'G' }];

// const s = [2, 1, 3, 5, 4, 7, 6];

// let result = [];

// s.forEach(e => {
//   console.log(users.find(a => e === a.id))
//   result.push()
// })

// setTimeout(() => {
//   console.log("first");
// }, 2000);

// setImmediate(() => {
//   console.log("second");
// });

// process.nextTick(() => {
//   console.log("third");
// });

// function sam() {
//   let a = (b = 5);
// }

// sam();

// console.log(typeof a);

// console.log(typeof b);



function maxSumSubarray(arr, k) {
    let maxSum = 0;
    let n = arr.length - k + 1;
    for(let i = 0; i < n; i++){
      let tempSum = 0;
      for(let j = 0; j < k; j++){
        tempSum += arr[i+j];
      }
      if(tempSum > maxSum) maxSum = tempSum;
    }

    return maxSum;
  }
  
  // Example usage
  const array = [2, 1, 3, 4, 1, 2, 6, 1, 2];
  const k = 3;
  const result = maxSumSubarray(array, k);
  console.log(result); // Output: 12 (sum of subarray [4, 1, 2])
  




  // how to fix this code so it should print 22?



  let obj = {
    a: 10,
    fn: function(b){
      let res = this.a + b
      console.log(res)
    }
  }
  
  
  const fn = obj.fn;
  fn(12)


  // To fix it so it prints 22, bind the function to `obj` so `this` refers to the object:

```js
const fn = obj.fn.bind(obj);
fn(12);  // prints 22
```

Alternatively, call it with `call` or `apply`:

```js
const fn = obj.fn;
fn.call(obj, 12);  // prints 22
```



const { x = 5, y = 10} = {x: null, y: undefined}

console.log(x, y)



let arr = ['a', ['b', ['c', 'a', 'b']]];
function flattenAndCount(nums){
    let result = [];
    
    function helper(items){
        for (let i = 0; i < items.length; i++) {
            if(Array.isArray(items[i])){
                helper(items[i])
            } else {
                result.push(items[i])
            }
        }
    }
    
    helper(nums)
    let freqMap = {};
    for(char of result) {
        freqMap[char] = (freqMap[char] || 0) + 1
    }
    return freqMap;
}





console.log(flattenAndCount(arr))









/*
Given an array of objects, where each object represents a product and has name (string), category (string), and price (number) properties, write a function getAveragePriceByCategory(products) that returns an object. This object should contain the average price for each product category present in the input array.
 
Expected output:
 
{
  Electronics: 433.33, // (1200 + 75 + 25) / 3
  Apparel: 40,        // (20 + 60) / 2
  Books: 15           // 15 / 1
}
 
*/
 
const products = [
  { name: 'Laptop', category: 'Electronics', price: 1200 },
  { name: 'Keyboard', category: 'Electronics', price: 75 },
  { name: 'Mouse', category: 'Electronics', price: 25 },
  { name: 'T-Shirt', category: 'Apparel', price: 20 },
  { name: 'Jeans', category: 'Apparel', price: 60 },
  { name: 'Book', category: 'Books', price: 15 },
];



function getAveragePriceByCategory(products) {
    const result = {};
    
    
    products.forEach(item => {
        if(!result[item.category]) {
            result[item.category] = {total: 0, count: 0}
        }
        result[item.category].total += item.price;
        result[item.category].count += 1;
    })
    
    
    const final = Object.keys(result).map(category => ({
        category,
        avgPrice : result[category].total / result[category].count
    }))
    
    return final;
    
    
}

console.log(getAveragePriceByCategory(products))




```js
const products = [
  { name: 'Laptop', category: 'Electronics', price: 1200 },
  { name: 'Keyboard', category: 'Electronics', price: 75 },
  { name: 'Mouse', category: 'Electronics', price: 25 },
  { name: 'T-Shirt', category: 'Apparel', price: 20 },
  { name: 'Jeans', category: 'Apparel', price: 60 },
  { name: 'Book', category: 'Books', price: 15 },
];

// 1. Group by category
const grouped = Object.groupBy(products, ({ category }) => category);

// 2. Calculate average price for each group
const result = Object.fromEntries(
  Object.entries(grouped).map(([category, items]) => [
    category,
    items.reduce((sum, item) => sum + item.price, 0) / items.length
  ])
);

console.log(result);
// {
//   Electronics: 433.3333333333333,
//   Apparel: 40,
//   Books: 15
// }
```

**How it works:**
- `Object.groupBy()` creates an object where keys are categories and values are arrays of products.
- `Object.entries()` gets [key, array] pairs.
- For each group, calculate `total price / count`.
- `Object.fromEntries()` converts back to a clean object with category → average price.






console.log("Start");
setTimeout(() => {
  console.log("Timeout 1");
}, 0);
setImmediate(() => {
  console.log("Immediate");
});
Promise.resolve().then(() => {
  console.log("Promise 1");

  process.nextTick(() => {
    console.log("NextTick inside Promise");
  });
  Promise.resolve().then(() => {
    console.log("Nested promise 1");
  });
});
process.nextTick(() => {
  console.log("NextTick 1");
});
console.log("End");









const users = [
  { name: 'Alice', role: 'admin', age: 32 },
  { name: 'Bob', role: 'user', age: 25 },
  { name: 'Charlie', role: 'admin', age: 28 },
  { name: 'David', role: 'user', age: 30 }
];

const result = Object.groupBy(users, ({ role }) => role);
console.log(result);















Sure 😊
Let’s understand this **step by step with a very easy walkthrough** using your example.

---

## ✅ Input

```js
"Javascript is awesome"
```

---

## 🔹 Step 1: Initial variables

```js
let words = [];
let word = "";
```

* `words` → will store each full word
* `word` → temporarily builds one word character by character

---

## 🔹 Step 2: Loop through each character

```js
for (let i = 0; i < str.length; i++) {
```

We read the string **one character at a time**.

---

### 👉 Characters walkthrough

| Character | Action        | word         | words          |
| --------- | ------------- | ------------ | -------------- |
| J         | add to `word` | "J"          | []             |
| a         | add           | "Ja"         | []             |
| v         | add           | "Jav"        | []             |
| a         | add           | "Java"       | []             |
| s         | add           | "Javas"      | []             |
| c         | add           | "Javasc"     | []             |
| r         | add           | "Javascr"    | []             |
| i         | add           | "Javascri"   | []             |
| p         | add           | "Javascrip"  | []             |
| t         | add           | "Javascript" | []             |
| **space** | push word     | ""           | ["Javascript"] |

When a **space** is found:

```js
words.push(word);
word = "";
```

---

### Continue…

| Character | Action | word      | words                |
| --------- | ------ | --------- | -------------------- |
| i         | add    | "i"       | ["Javascript"]       |
| s         | add    | "is"      | ["Javascript"]       |
| **space** | push   | ""        | ["Javascript", "is"] |
| a         | add    | "a"       | ["Javascript", "is"] |
| w         | add    | "aw"      |                      |
| e         | add    | "awe"     |                      |
| s         | add    | "awes"    |                      |
| o         | add    | "aweso"   |                      |
| m         | add    | "awesom"  |                      |
| e         | add    | "awesome" |                      |

---

## 🔹 Step 3: Push the last word

After the loop finishes:

```js
words.push(word);
```

Now:

```js
words = ["Javascript", "is", "awesome"];
```

---

## 🔹 Step 4: Reverse words manually

```js
for (let i = words.length - 1; i >= 0; i--)
```

We start from the **last word**.

### Iterations:

| i | word         | result                  |
| - | ------------ | ----------------------- |
| 2 | "awesome"    | "awesome"               |
| 1 | "is"         | "awesome is"            |
| 0 | "Javascript" | "awesome is Javascript" |

Spaces are added only **between words**, not at the end.

---

## 🔹 Step 5: Return result

```js
return result;
```

---

## ✅ Final Output

```js
"awesome is Javascript"
```

---

## 🧠 One-line explanation (Interview-ready)

> “We manually extract words using a loop, store them in an array, and then rebuild the sentence by iterating from the last word to the first.”

---

If you want, I can also explain:

* Same logic using **only one loop**
* Without using an array
* Time & space complexity

Just tell me 👍
