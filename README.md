# interview

## https://github.com/Iamvivek-gupta/interview



# Deep Copy and Shallow Copy

## jsut to give you a overview, deep copy and shallow copy are two ways in javascript to copy the object. and they are different from each other. so if we talk about a js object, if you copy one js object into another with the help of simple assignment operator, it create a shallow copy. shallow copy means that both copied ob are going to share same memory allocation. in that case, if you modify the one ob those changes are going to reflect into another as well. so to avoid it we can create a deep copy of a ob. now when you copy a ob with deep clone in that case they share different memory allocation. so if you modify one ob those changes are not going to reflect into another one. there are different methods that can help us to create a deep clone like we can use JSON.stringfy and JSON.parse method Object.Object.assign method and structure.clone() method in js and there are lot of libraries that give you utility to create a deep clone but you need to be very careful while using it because each method may have certain limitation.




# currying 

## It is a technique in functional programming, that transforms the function of multiple arguments into several functions of a single argument in sequence. until the final result is achieved.
## Currying helps you avoid passing the same variable again and again.
## It helps to create a higher order function.




# https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters





# Spread Operators

The spread operator (`...`) in JavaScript is a powerful and versatile tool that allows you to expand elements of an iterable (like an array or object) into individual elements. It can be used in various scenarios, making your code cleaner and more efficient. Here’s an easy way to explain it to an interviewer:

### Explanation

The spread operator is represented by three dots (`...`). It is used to "spread" out the elements of an array or the properties of an object. This can be particularly useful for array and object manipulation, such as copying, merging, and passing arguments to functions.

### Key Use Cases

1. **Copying Arrays and Objects:**

   The spread operator allows you to create a shallow copy of an array or object easily.

   ```javascript
   const originalArray = [1, 2, 3];
   const copiedArray = [...originalArray];
   console.log(copiedArray); // Output: [1, 2, 3]

   const originalObject = { a: 1, b: 2 };
   const copiedObject = { ...originalObject };
   console.log(copiedObject); // Output: { a: 1, b: 2 }
   ```

2. **Merging Arrays and Objects:**

   You can combine multiple arrays or objects into one.

   ```javascript
   const array1 = [1, 2, 3];
   const array2 = [4, 5, 6];
   const mergedArray = [...array1, ...array2];
   console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

   const object1 = { a: 1, b: 2 };
   const object2 = { c: 3, d: 4 };
   const mergedObject = { ...object1, ...object2 };
   console.log(mergedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }
   ```

3. **Passing Arguments to Functions:**

   When calling a function that accepts multiple arguments, you can use the spread operator to pass elements of an array as arguments.

   ```javascript
   function add(x, y, z) {
     return x + y + z;
   }

   const numbers = [1, 2, 3];
   console.log(add(...numbers)); // Output: 6
   ```

4. **Destructuring with the Rest Syntax:**

   While not exactly the spread operator, the rest syntax (`...`) is closely related and is used to collect multiple elements into an array.

   ```javascript
   const [first, ...rest] = [1, 2, 3, 4];
   console.log(first); // Output: 1
   console.log(rest);  // Output: [2, 3, 4]

   const { a, ...others } = { a: 1, b: 2, c: 3 };
   console.log(a);       // Output: 1
   console.log(others);  // Output: { b: 2, c: 3 }
   ```

### Summary

The spread operator is a concise and powerful feature in JavaScript that helps to simplify operations like copying, merging, and spreading elements of arrays and objects. It improves code readability and reduces the need for verbose methods or loops, making your code cleaner and more efficient.