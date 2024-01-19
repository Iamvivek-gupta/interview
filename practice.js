// let promise = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         reject('practice for new beggineing Haaloo')
//     }, 5000)
// })

const { log } = require("console");
const { copyFileSync } = require("fs");

// promise.then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

/* Longest Substring without repeating characters in javascript
approach should be like i) get all possible substrings ii) whether in subtring repeating character or not iii) max length of concern subtring. */
/*
let isUnique = s => {
    let set = new Set;
    for(let i = 0; i < s.length; i++){
        if(set.has(s[i])){
            return false;
        }
        set.add(s[i]);
    }
    console.log(set);
    return true;
}
function longestSubstring(s){
    let max = 0;
    for(let begin = 0; begin < s.length; begin++){
        for(let end = begin; end < s.length; end++){
            let substring = s.substring(begin, end + 1);
            if(isUnique(substring)){
                max = Math.max(max, substring.length);
            }
        }
        return max;
    }
}

console.log(longestSubstring('ab0c0ed'));
*/

/* Longest palindromic String
approach ---->>>>
i) pelindrome are mirror about its center and there are 2 cases
ii) even amount of center a b b a
iii) odd amount of center a b a
iv) keep tracking longest and update the longest whenever we found
v) need to keep expanding until got null or characters are not same.
*/

/*
function longestPalindrome(s){
    if(s.length < 1 || s === null) return '';
    let longest = '';
    for(let i = 0; i < s.length; i++){
        let oddPalindrome = expandfromcenter(s, i, i);
        let evenPalindrome = expandfromcenter(s, i - 1, i);
        if(oddPalindrome.length > longest.length) longest = oddPalindrome;
        if(evenPalindrome.length > longest.length) longest = evenPalindrome;
    }
    return longest;
}

function expandfromcenter(s, left, right){
    let i = 0;
    while(s[left - i] && s[left - i] === s[right + i]){
        i++;
    }
    i--;
    return s.slice(left - i, right + i + 1)
}

console.log(longestPalindrome('babad'));
*/

/* frequency count */
/*
let a = [4,1,2,3,4,1,5,2,3];
let frequency = {};
for(let item of a){
    frequency[item] = (frequency[item] || 0) + 1;
}
console.log(frequency);
*/

/*
const stringPermutations = str => {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str
        .split('')
        .reduce(
        (acc, letter, i) =>
            acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
        []
        );
    };
console.log(stringPermutations('abc'));
*/

/* Rearrange an array in maximum minimum form by JavaScrip */
/*
const input = [1, 2, 3, 4, 5, 6];
let minMax = arr => {
    let copy = arr.slice();
    copy.sort((a,b) => b -a);
    for(let i = 0; i < copy.length; i= i+2){
        copy.splice(i, 0, copy.pop())
    }
    return copy;
}

console.log(minMax(input));
*/

/* check number is Prime */
/*
function checkPrime(number){
    let isPrime = true;
    if(number === 1 ){
        console.log(`${number} is not prime or not composite!`);
    } else if (number > 1){
        for(let i = 2; i < number; i++){
            if(number % i === 0) {
                isPrime = false;
                break;
            }
        }
        isPrime ? console.log(`${number} is  prime`) : console.log(`${number} is not prime`);
    } else{
        console.log(`${number} is not prime`);
    }
}

checkPrime(0);
*/

/*
fibbonaaci sequence problems.

function fibonacci(n){
  let fib = [0,1];
  for(let i = 2; i < n; i++){
    fib[i] = fib[i-1] + fib[i-2];
  }
  return fib;
}

console.log(fibonacci(2));
console.log(fibonacci(3));

*/

/* arrange the maximum number from an array */
/*
function getLargest(array) {
    return array
        .map(String)
        .sort((a, b) => (b + a) - (a + b))
        .join('');
}
//console.log([3,39,50,8].sort().reverse().join(''));
console.log(getLargest([3,30,34,9]));
*/

/*
Que 2 : 
Provide a data storage system for storing movie ticket bookings. When the seat is selected, it should be blocked until the payment transaction is concluded so that others cannot book the same seat.
Solution:


-------------------------------------------------------------------------------------------------------------------------------
Que 1 : 
Given a randomised array of n integers and an integer a, find if a^2 is in the array.
Solution:
[1.2.3.4.5] , 2


*/

// interview link
// 0. https://github.com/ryanmcdermott/clean-code-javascript
// 1. https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/
// 2. https://www.tutorialspoint.com/What-is-the-difference-between-null-and-undefined-in-JavaScript

/*

find duplicate from an array Solution in O(n) time complexity also is constant o(1);
1 <= arr[i] <= n

let arr = [4,3,2,7,8,2,3,3,1];
function duplicate(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let index = Math.abs(arr[i])-1;
        if(arr[index] < 0) {
            result.push(Math.abs(arr[i]));
        }
        arr[index] = -arr[index];
    } 
    return result;
}

console.log(duplicate(arr));



/*




/* 
remove duplicate using new Map solution below.length
https://flexiple.com/javascript/find-duplicates-javascript-array/


let arr = [4,1,2,3,4,4,1,5,2,3];
var freq = new Map();
for(let i = 0; i < arr.length; i++) {
    if (freq.has(arr[i]))
    {
        freq.set(arr[i], freq.get(arr[i]) + 1);
    }
    else
    {
        freq.set(arr[i], 1);
    }
}

var dup = false;
for(let [key, value] of freq)
{
     
    // If frequency is more than 1
    // print the element
    if (value > 1)
    {
        console.log(key + " ");
        dup = true;
    }
}

if (dup == false)
console.log("-1")

*/

/* Zetwerk Question 

app.get('/profile', (req, res) => {
    res.send('hallo world');
})


app.get('/welcome', (req, res) => {
    setTimeOut( () => {
        res.send('hallo world');

    }, 2000)
})

*/

/* 
One Missing Number SOlution using Binary XOR Operations.

let num = [1, 2, 4, 6, 3, 7, 8];
// let missingNumber = [];
// for(i = 1; i <= 8; i++){
//     if(num.indexOf(i) === -1) {
//         missingNumber.push(i)
//     }
// }
// console.log(missingNumber);

function getMissingNo(a, n)
      {
       
        // For xor of all the elements in array
        var x1 = a[0];
 
        // For xor of all the elements from 1 to n+1
        var x2 = 1;
        for (var i = 1; i <= n; i++) x1 = x1 ^ a[i];
        for (var i = 2; i <= n; i++) x2 = x2 ^ i;
 
        return x1 ^ x2;
      }
      let r = getMissingNo(num, 8)
    console.log(r);



*/

/*

misiing number 2nd approach

let arr = [1,3,5,7];
function MissingValuesinArray(arr=[]){
  // find out the last element 
  const lastEle = arr.slice(-1)[0];
  const result = [];
  for(let i = 1; i <= lastEle; i++){
    // if i is not present in array then it is missing number.
    !arr.includes(i) && result.push(i)
  }
  return result; 
}

console.log(MissingValuesinArray(arr))

*/

/* 
two Sum Problem 

let num = [1,2,3,4,5,6,7,8,9];
let twoSum = function(num, target) {
    let map = new Map();
    for(let i = 0; i < num.length; i++){
        let num1 = num[i];
        let num2 = target - num1;
        if(map.has(num2)){
            return [i, map.get(num2)];
        }
        map.set(num1, i);
    }
}
let result = twoSum(num, 21);
console.log(result);

*/

/* 

reverse only character without modifying the special character original positions;

let s = 'A B C D E F G H I K L M N O P Q R S T V X Y Z';

//console.log(s.replace(/\s/g, "").toLowerCase());
let letters = 'abcdefghiklmnopqrstvxyzABCDEFGHIKLMNOPQRSTVXYZ';
function reverseOnlyCharacters(s){
    let str = s.split('');
    let result = [];
    for(let i = 0; i < str.length; i++){
        if(str[i].match(/[A-Z]/gi)){
            result.push(str[i]);
        }
    }
    result.reverse();
    console.log(result);
    for(let j = 0; j < str.length; j++){
      if(!letters.includes(str[j])){
          result.splice(j, 0, str[j]);
      }  
    }
    console.log(result.join(''));
}

console.log(reverseOnlyCharacters('a,b$c'));

*/

/* 

/*
regular expresion for matching multiple value within the string

let stringCheck = "TSSM.|WM.";
const regexp = new RegExp(stringCheck);

console.log(regexp.test('WM World')); 


*/

/*

let { joi } = require('../../require-helper');
let stringCheck = "TSSM.|WM.";

function soldPlanSchema(routeName) {
  switch (routeName) {
  case routeName:
    return {
      'SoldPlanID': joi.number(),
      'SoldPlanCode': joi.string(),
      'TicketNumber': joi.string().required().pattern(new RegExp(stringCheck))
    }  
  default:
    return {};
  }
}
module.exports = soldPlanSchema;




'TicketNumber': joi.string().required().custom((value, msg) => {
    console.log("value checking here", value);
    console.log(!(value.startsWith('TSSM')) , "!(value.startsWith('TSSM')) ")
    console.log(!(value.startsWith('WM')) , "!(value.startsWith('WM'))")

    if( !(value.startsWith('TSSM')) && !(value.startsWith('WM')) ){
      return msg.message('invalid ticket number please send a valid ticket number')
    }
    return true;
})

*/

// function long(str){
//     let max = 0;
//     for(let i = 0; i < str.length; i++){
//         for(let j = 0; j < str.length; j++) {
//             let substrings = str.substring(i, j+1);
//             if(isUnique(substrings)){
//                 max = Math.max(max, substrings.length);
//             }
//         }
//     }
//     return max;
// }

// function isUnique(s){
//     const set = new Set;
//     for(let i = 0; i < s.length; i++){
//         if(set.has(s[i])){
//             return false;
//         }
//         set.add(s[i]);
//     }
//     console.log(set);
//     return true;
// }

// console.log(long('ab0c0ed'));

/*
function longestPalindrome(str){
    let longest = '';
    for(let i = 0; i < str.length; i++){
        let oddPalindrome = expandfromcenter(str, i, i);
        let evenPalindrome = expandfromcenter(str, i - 1, i);
        longest = oddPalindrome.length > longest.length ? oddPalindrome : longest;
        longest = evenPalindrome.length > longest.length ? evenPalindrome : longest;
    }
    return longest;
}

function expandfromcenter(str, left, right){
    let i = 0;
    while(str[ left - i ] && str[ left - i] === str[ right + i]){
        i++
    }
    i--
    return str.slice(left - i, right + i +1)
}

console.log(longestPalindrome('babad'));
*/

/*
let a = [4,1,2,3,4,4,1,5,2,3];
let frequency = {};
for( let item of a){
    frequency[item] = (frequency[item] || 0) + 1;
}
console.log(frequency);
*/

/*
function formLargest(array){
    return array.map(String).sort( (a, b) => (b + a) - (a + b)).join('');
}

console.log(formLargest([3,39,30,8]));
*/

/*
let a = [1,3,5,7,9,2,4,6,8];
let minMax = a => {
    let array = a.slice();
    array.sort((a,b) => b - a);
    for(let i = 0; i < array.length; i = i + 2){
        array.splice(i, 0, array.pop())
    }
    return array;
}

console.log((minMax(a)));
*/

/*
let people = [
    {name:"Vivek",age:23},
    {name:"Love",age:10},
    {name:"Mehak",age:33},
]

//let checkAge = people.some( e => e.age === 23);
// console.log(checkAge);
let addId = people.map( (e, i) => {
    e.id = i + 1;
    return e;
})
let nameAge = people.filter(e => e.age > 18).map(n => n.name);
let maxAge = people.reduce((result, person) => result > person.age ? result : person.age,null);
let nameArray = people.reduce((result, person) =>[...result, person.name] ,[]);
let findPerson = addId.reduce((result, person) =>{
    return {...result, [person.id]:person}
},{})
//console.log(findPerson);
let countPerson = people.reduce((result, item) => {
  return {...result, [item.name]: (result[item.name] || 0) + 1 }
},{})
// console.log(countPerson);
*/

/* get only duplicate (which one is duplicae) value from an Array

var array = [1, 2, 2, 3, 3, 4, 5, 6, 2, 3, 7, 8, 5, 22, 1, 2, 511, 12, 50, 22];
console.log([...new Set(
  array.filter((value, index, self) => self.indexOf(value) !== index))]
);

*/
// function reverse(number){
//   return parseFloat(number.toString().split("").reverse().join("")) * Math.sign(number);
// }
// console.log(reverse(-123.987));
/*
function checkPrime(number){
  let isPrime = true;
  if(number === 1){
    console.log(`${number} is not prime or composite`);
  } else if(number >1){
    console.log(`${number} is checking prime or not`);
    for(let i = 2; i < number; i++){
      if(number % i === 0){
        isPrime = false;
        break;
      }
    }
    isPrime ? console.log(`${number} is prime`) : console.log(`${number} is not prime`);;

  } else {
    console.log(`${number} is not prime`);
  }
}
checkPrime(2)
*/

/*
function Prime(n){
  if(n <= 1) return false;
  for(let i = 2; i < n; i++){
    if(n % i === 0){
      return false;
      break;
    }
  }
  return true;
}

function printPrime(n){
  let p = [];
  for(let i = 2; i <= n; i++){
    if(Prime(i)){
      p.push(i)
    }
  }
  console.log(p);
}
printPrime(20);
*/

/*
let matrix = [ [1,2,3], 
               [4,5,6], 
               [12,8,9] 
             ];
let mainSum = 0;
let otherSum = 0;
for (let i = 0; i < matrix.length; i++) {
  mainSum += matrix[i][i];
  otherSum += matrix[i][matrix.length - i -1]
}
console.log(Math.abs(mainSum - otherSum));
*/

/*
let array = [1,2,3,4,5,6,7,8,9,9];
var numbers=[10,50,80,60,89,89];
var firstLargerNumber = Number.MIN_SAFE_INTEGER;
var secondlargerNumber = firstLargerNumber;
for(var tempNumber of numbers){
   if(tempNumber > firstLargerNumber){
      secondlargerNumber = firstLargerNumber;
      firstLargerNumber = tempNumber;
   }
   else if(tempNumber > secondlargerNumber){
      secondlargerNumber = tempNumber;
   }
}
console.log("The second largest number="+secondlargerNumber);
const ar= [1,2,5,5,6]
secmax = Math.max(...ar.filter((n,i) => Math.max(...ar) !=n ))
console.log(secmax);
res = ar.filter(n =>n == secmax)
console.log(res)
*/

// let a = [3,39,30,9];
// function formLargest(a){
//   return a.map(String).sort((a,b) => (b + a) - (a + b)).join('');
// }
// console.log(formLargest(a));

/*
function palin(str){
  let longest = '';
  for (let i = 0; i < str.length; i++){
    let odd = expandfromcenter(str, i, i);
    let even = expandfromcenter(str, i - 1, i);
    longest = odd.length > longest.length ? odd : longest;
    longest = even.length > longest.length ? even : longest;
  }

  return longest;
}

function expandfromcenter(str, left, right){
  let i = 0;
  while(str[left-i] && str[left-i]  === str[right+i]){
    i++;
  }
  i--;
  return str.slice(left-i, right+i+1);
}

console.log(palin('banana'));
*/

/*
function longestSubstring(str){
  let max = 0;
  for(let start = 0; start < str.length; start++){
    for(let end = start; end < str.length; end++){
      let s = str.substring(start, end + 1);
      if(Unique(s)){
        max = Math.max(max, s.length);
      }
    }
  }
  return max;
}

function Unique(s){
  let set = new Set();
  for(let i = 0; i < s.length; i++){
    if(set.has(s[i])){
      return false;
    }
    set.add(s[i]);
  }
  return true;
}
console.log(longestSubstring('abcdefhfheishifhddtdmnbvcxzasdfg'));
*/
/*
let z = [9,56,8,7];
// 98756
function getLorgest(z){
  return z.map(String).sort( (a,b) => (b + a) - (a + b)).join('');
}
console.log(getLorgest(z));


var arr = [-5,-4,-3,-2,0,2,4,6,8];
function findSumZeroPair(array){
    let left = 0;
    let right = arr.length - 1;
    while( left < right ){
        let sum = array[left] + array[right];
        if(sum === 0){
            return [array[left] , array[right]]
        } else if( sum > 0 ){
            right--;
        } else {
            left++;
        }
    }
}
console.log(findSumZeroPair(arr))
*/

/*
var arr = [-5,-4,-3,-2,0,2,4,6,8];
function findPair(arr, target){
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      let sum = arr[i] + arr[j];
      if(sum === target){
        return [arr[i], arr[j]];
        break;
      }
    }
  }
}

console.log(findPair(arr, 14));

const ar= [1,2,5,5,6]
secmax = Math.max(...ar.filter((n,i) => Math.max(...ar) !=n ))
console.log(secmax);
res = ar.filter(n =>n == secmax)
console.log(res)
*/
// let u = [1,2,3,9,3,5,4,6,7,8]; //10
// function getMaxSum(arr, digit){
//   let max = 0;
//   arr.sort()
//   for(let i = 0; i < arr.length - digit + 1; i++){
//     let tempSum = 0;
//     for(let j = 0; j < digit; j++){
//       tempSum += arr[i+j];
//     }
//     if(tempSum > max){
//       max = tempSum;
//     }
//   }
//   return max
// }
// console.log(getMaxSum(u,3));
// let num = [1,2,3,4,5,1,2,3,4,5,6,7,8,9];
// find duplicate

/* important
let arr = [{
    "id": 1,
    "type": "ADD"
}, {
    "id": 1,
    "type": "CHANGE"
}, {
    "id": 2,
    "type": "ADD"
}, {
    "id": 3,
    "type": "ADD"
}, {
    "id": 3,
    "type": "CHANGE"
}, {
    "id": 2,
    "type": "REMOVE"
}, {
    "id": 3,
    "type": "CHANGE"
}, {
    "id": 1,
    "type": "REMOVE"
}];
let res = new Map();
for (let i=0;i<arr.length;i++){
  if(res.has(arr[i].id)){
    res.get(arr[i].id).push(arr[i].type)
  }
  else{
    let type=[];
    type.push(arr[i].type);
    res.set(arr[i].id,type);
  }
}
var op = [];
console.log("Utsav Basu");
for (const [key, value] of res.entries()) {
  //console.log(key, value);
  let obj= {
    "ID": key,
    "TYPE":value
  };
  op.push(obj);
}
console.log(op);
*/

/* very important grouping concept using reduce

let array = [
  {"id": 1, "type":"addition","date": "12-08-2021","price": 100}, 
  {"id": 2, "type":"withdrawl","date": "13-08-2021","price": 300}, 
  {"id": 3, "type":"addition","date": "14-08-2021","price": 400},
  {"id": 4, "type":"withdrawl","date": "16-08-2021","price": 150}
]
  
  var result = [];
  array.reduce(function(res, value) {
    if (!res[value.type]) {
      res[value.type] = { type: value.type, price: 0 };
      result.push(res[value.type])
    }
    res[value.type].price += value.price;
    return res;
  }, {});
  
  console.log(result)

  */
// let z = [1,2,3,9,3,5,4,6,7,8];
// function getMax(arr, n){
//   let max = 0;
//   let l = z.length - n + 1;
//   for (let i = 0; i < l; i++){
//     let tempSum = 0;
//     for (let j = 0; j < n; j++) {
//       tempSum += z[i + j]
//     }
//     //console.log(tempSum)
//     if(tempSum > max){
//       max = tempSum;
//     }
//   }
//   console.log(max)
// }
// getMax(z,4)

// var arr = [-5,-4,-3,-2,0,2,4,6,8];
// function findPair(arr, target){
//   for(let i = 0; i < arr.length; i++){
//     for(let j = i + 1; j < arr.length; j++){
//       let sum = arr[i] + arr[j];
//       if(sum === target){
//         return [arr[i], arr[j]];
//         break;
//       }
//     }
//   }
// }

// console.log(findPair(arr, 14));

// Q.   input  [ [[1]], [[[2]]], [[[[3]]]], [[[[[4]]]]] ]
//      output [1,2,3,4]

// function flatDeep(arr, d = 1) {
//   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
//                : arr.slice();
// };
// console.log(flatDeep([ [[1]], [[[2]]], [[[[3]]]], [[[[[4]]]]] ], Infinity));
// https://medium.com/swlh/how-to-flatten-an-array-in-javascript-6b3fef075655

// Q.  sum all the elements in array using recursive approcach
// let arr = [1, 2, 3, 4, 5, 6]

// function add(arr) {
//     if (arr.length == 1) return arr[0] // base case
//     return arr[0] + add(arr.slice(1))  // recurse
// }
// console.log(add(arr))

// console.log("hallo world");
// function p1(){
//     return new Promise( (resolve, reject) => {
//       //console.log("hallo vivek");
//       resolve("hallo Wish");
//   })
// }
// async function p2(){
//   let data = await p1();
//   console.log(data)
// }
// p2();
// //let data = await p1();

// console.log("hallo 6")

// Rearrange an array in maximum minimum form in Javascript

// let arr =  [1, 2, 3, 4, 5, 6]
// let n = arr.length-1;
// for(let i = 0; i <= n-1; i++){
//     if(i%2 == 0 && i <=n){
//         arr.splice(i,0,arr[n]);
//         i++;
//     }
// }
// console.log(arr.splice(0,n+1));

// BarRaiser Interview question
// Memoization,

/* 

Design a function computeAmount which take number of lacs and return the amount after using value function along with it.
const computeAmount = function() {
  let result = 0
    value(){
      retun this.result;
    }

};


console.log(computeAmount().value()) //0

console.log(computeAmount().lacs(2).value()) //2,00,000

console.log(computeAmount().lacs(2).lacs(20).value()) //22,00,000

console.log(computeAmount().lacs(15).lacs(20).lacs(7).value()) //42,00,000

*/

// callback example:

// let datas = [
//     {name: "vivek", profession: "Prodcut Engineer"},
//     {name: "moiz", profession: "Senior Prodcut Engineer"}
// ]

// function getData(){
//     setTimeout(() => {
//         datas.forEach(e => console.log(e.name));
//     }, 1000)
// }
// //getData();

// function createData(record, callback){
//     setTimeout(() => {
//         datas.push(record);
//         callback()
//     }, 3000)
// }
// createData({name: "dev", profession: "Prodcut Manager"}, getData);

// setImmediate( () => {
//   console.log(1);
// })

// setTimeout( () => {
//   console.log(2);
// })

// process.nextTick( () => {
//   console.log(3);
// })

// function removeDuplicates(arr){
//   let removeDuplicates = [];
//   let seen = {};
//   for(let i = 0; i < arr.length; i++){
//     let currentNum = arr[i]
//     if(!seen[currentNum]){
//       seen[currentNum] = true;
//       removeDuplicates.push(currentNum)
//     }
//   }
//   return removeDuplicates;
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5,6]));

// let sumDigit = function (n) {
//   let sum = 0;
//   while(n > 0 || sum > 9){
//     if(n === 0){
//       n = sum;
//       sum = 0;
//     }
//     sum += n % 10;
//     n = Math.floor(n/10);
//   }
//   return sum;
// }
// let result = sumDigit(12345);
// console.log(result);

// const portfolio = [
//   { name: "Mark", stock: "FB" },
//   { name: "Steve", stock: "AAPL" },
//   { name: "Tim", stock: "AAPL" },
//   { name: "Steve", stock: "MSFT" },
//   { name: "Bill", stock: "MSFT" },
//   { name: "Bill", stock: "AAPL" },
// ];


// const farmatOutput = portfolio.reduce((result, curr) => {
// let key = `${curr.stock}`;
// if(!result[key]){
//   result[key] = {
//     stock: curr.stock,
//     name : [],
//     count: 0
//   }
// }
// result[key].name.push(curr.name);
// result[key].count = result[key].name.length;
// return result;
// }, {})
// console.log(Object.values(farmatOutput));













// let number = [4, 3, 2, 7, 8, 2, 3, 3, 1];
// function duplicate(arr) {
//     let result = [];
//     for(let i = 0; i < number.length; i++){
//       if()
//     }
// }

// console.log(duplicate(number));





// const user = {
//   name: "Vivek",
//   logMessage(){
//     console.log(this.name);
//   }
// }

// setTimeout(function(){
//   user.logMessage()
// }, 1000)




// function findKthPositive(arr, k){
//   let hashMap = {};
//   for(let item of arr){
//     hashMap[item] = true;
//   }

//   let missingCount = 0, currentInteger = 1;
//   while(missingCount < k){
//     if(!hashMap[currentInteger]) {
//       missingCount++;
//     }
//     if(missingCount < k){
//       currentInteger++;
//     }
//   }

//   return currentInteger;

// }

// console.log(findKthPositive([2,3,4,7,11], 7))


// function secondlargerNumber(arr){
//   let fistMax = Number.NEGATIVE_INFINITY;
//   let secondMax = Number.NEGATIVE_INFINITY;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i]> fistMax){
//       console.log("current element from if", arr[i])
//       secondMax = fistMax;
//       fistMax = arr[i];
//     } else if(arr[i] > secondMax && arr[i] != fistMax){
//       console.log("current element from else if", arr[i])
//       secondMax = arr[i]
//     }
//   }
//   return secondMax;
// }


// console.log(secondlargerNumber([10,5,10]))







// let calculator = {
//   read(){
//     this.a = + prompt("a is", 0);
//     this.b = + prompt("b is", 0);
//   },

//   sum(){
//     return this.a + this.b;
//   },

//   mul(){
//     return this.a * this.b;
//   }
// }

// calculator.read();
// console.log(calculator.sum());




// let computeAmount = {
//   result: 0,
//   lacs(value){
//     this.result = this.result + value * 100000;
//     return this;
//   },
//   value(){
//     return this.result;
//   }
// }

// console.log(computeAmount.lacs(2).lacs(5).lacs(50).value());

function getMostFrequentChar(str){
  let maxChar = "";
  let maxFrequency = 0;
  let hashMap = {};
  for(let char of str) {
    hashMap[char] = (hashMap[char] || 0) + 1;
    if(hashMap[char] > maxFrequency) {
      maxFrequency = hashMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
console.log(getMostFrequentChar("hello world&&&&&&&&&&&&"));






















const arr = [1,2,3,4,5,6]
console.log(arr.forEach(e => e > 3))
console.log(arr.filter(e => e > 3))
console.log(arr.map(e => e > 3))

// controlled componant and uncontrolled componant, useCallback and UseMemo Hook, debounce and throtlling, promise and async await, compoent mount and componant did mount


{     console.time("loop");     
for (var i = 0; i < 1000000; i += 1){ 
}     console.timeEnd("loop"); }






// console.log(1);
// setTimeout( () =>{
//     console.log(2);
// })
// Promise.resolve(3).then(console.log);

// console.log(4);

// The output of the given code will be:

// 1
// 4
// 3
// 2


// The output of the given code will be:

// ```
// 1
// 4
// 3
// 2
// ```

// Here's the explanation:

// 1. `console.log(1)` is executed first and prints `1` to the console.
// 2. `setTimeout` is scheduled to execute after a minimum of 0 milliseconds (but can be delayed), and it will print `2` to the console.
// 3. `Promise.resolve(3).then(console.log)` is a resolved promise with a value of `3`. The `then` callback is scheduled to execute in the next microtask, and it prints `3` to the console.
// 4. `console.log(4)` is executed and prints `4` to the console.

// So, the order of the outputs is `1`, `4`, `3`, `2`.


// In JavaScript, `setTimeout` and promises operate on different mechanisms, and their execution order depends on the event loop and the microtask queue.

// - **`setTimeout`**:
//   - `setTimeout` schedules a callback function to be executed after a specified delay.
//   - The callback function is placed in the callback queue after the specified delay.
//   - If the call stack is empty, the callback is picked up from the callback queue and executed.

// - **Promise**:
//   - Promises use the microtask queue to schedule their callbacks.
//   - When a promise is resolved or rejected, its `then` or `catch` callbacks are placed in the microtask queue.
//   - Microtasks have higher priority than macrotasks (such as `setTimeout` callbacks) and are executed before the next macrotask begins.

// Here's a general order of execution:

// 1. Execute any synchronous code currently on the call stack.
// 2. Execute any microtasks in the microtask queue (e.g., promise callbacks).
// 3. Execute any macrotasks in the macrotask queue (e.g., `setTimeout` callbacks).

// Therefore, promises (microtasks) generally have higher priority than `setTimeout` (macrotasks). If there are both promises and `setTimeout` callbacks scheduled, the promises will be executed first.