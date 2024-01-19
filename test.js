
function long(str){
    let max = 0;
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < str.length; j++) {
            let substrings = str.substring(i, j+1);
            if(isUnique(substrings)){
                max = Math.max(max, substrings.length);
            }
        }
    }
    return max;
}

function isUnique(s){
    const set = new Set;
    for(let i = 0; i < s.length; i++){
        if(set.has(s[i])){
            return false;
        }
        set.add(s[i]);
    }
    console.log(set);
    return true;
}

console.log(long('ab0c0ed'));



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


2nd solution to findout longgest palindrome from given string


function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

function longestPalindrome(str) {
  let longest = '';

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const substring = str.slice(i, j);
      if (isPalindrome(substring) && substring.length > longest.length) {
        longest = substring;
      }
    }
  }

  return longest;
}

const inputString = "babad"; // Replace with your input string
const result = longestPalindrome(inputString);

console.log(`Longest Palindrome: ${result}`);

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
let num = [1,2,3,4,5,1,2,3,4,5,6,7,8,9];
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
  
let b = a.reduce((result, current) => {
  let { type, price } = current;
  if(result[type]){
    result[type] += price
  } else {
    console.log(type, price)
    result[type] = price
  }
  return result;
}, {})


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
// function getMaxSumConsecutiveDigit(arr, n){
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
// getMaxSumConsecutiveDigit(z,4)


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


console.log("hallo world");
function p1(){
  return new Promise( (resolve, reject) => {
    resolve("hallo Wish");
  })
}
async function p2(){
  let data = await p1();
  console.log(data)
}
p2();
//let data = await p1();

console.log("hallo 6")
