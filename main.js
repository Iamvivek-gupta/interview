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