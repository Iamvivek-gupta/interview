

// function longestConsecutiveSequence(arr){
//     let temp = 1;
//     let max = 1;
//     let sorted = arr.sort( (a,b) => a - b);
//     for(let i = 0; i < sorted.length; i++){
//         if ( sorted[i+1] - sorted[i] === 1 ) {
//             // console.log("checking values")
//             temp++;
//             console.log(temp, "temp checking")
//         } else if ( sorted[i+1] - sorted[i] > 1 ){
//             max = Math.max(temp, max);
//             temp = 1;
//         }
//     }
//     return Math.max(temp, max);
// }


// //console.log(longestConsecutiveSequence([4,6,1,7,2,8,3,9,10]));


// function twoSum(numbers, target){
//     let map = new Map();
//     for(let i = 0; i < numbers.length; i++){
//         let num1 = numbers[i];
//         let num2 = target - num1;
//     }
// }



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let target = 15;

// console.log(twoSum(arr, target));

// let rating = stars => `★★★★★☆☆☆☆☆`.slice(5 - stars, 10 - stars);
// console.log(rating(1))


// // const myset = new Set();
// // myset.add(1);
// // myset.add(1);
// // myset.add('a');
// // myset.add('a');
// // myset.add(undefined);
// // myset.add(undefined);
// // myset.add({prop: true});
// // myset.add({prop: true});

// // console.log(myset.size)




// function* get1(){
//     console.log(yield 1)
//     console.log(yield 2)
//     console.log(yield 3)

// }

// const iterator = get1();

// console.log(iterator.next("a").value);
// console.log(iterator.next("b").value);
// console.log(iterator.next("c").value);


// function double = () => return x * 2


// const double = function(x) {
//     return x * 2;
// }


// function myFunction(y1, y2, ...y3){
//     const [x1, ...[result]] = y3;
//     console.log(result);
// }
// const myArray = ['roock', 'paper', 'scissor', 'lizard', 'spoak'];


// myFunction(...myArray)


// 'use strict'
// let green;
// grrn = false;
// console.log(grrn);







// async function apiCall(){
//     return new Promise(resolve => {
//         setTimeout( () => { resolve('b')}, 50)
//     })
// }


// async function logger(){
//     setTimeout( () => console.log('a'), 10)
//     console.log(await apiCall());
//     console.log('c');
// }

// logger()


// function Queue(){
//     const backingArray = [];
//     return {
//         enqueue: backingArray.pop,
//         dequeue: backingArray.push
//     }
// }


// const myQueue = Queue();
// myQueue.enqueue(1)
// myQueue.enqueue(2)

// const r1 = myQueue.dequeue() === 1
// const r2 = myQueue.dequeue() === 2

// console.log(r1 && r2)






// const arr = [];
// try {
//     arr.push('try');
//     throw new Error();
// } catch (e){
//     arr.push('catch')
// } finally{
//     arr.push('finally')

// }

// console.log(arr);



// let x = 0;
// parent.addEventListener('click', () => x++);
// ChildProcess.addEventListener('click', () => {
//     event.preventDefault();
//     x++;
// })

// console.log(x);





// const myArray = new Array(2);
// myArray[1] = 1;
// myArray[3] = 3;

// console.log('Lenght: ', myArray.length);
// console.log('Elements: ');

// for(let elements of myArray){
//     console.log('\t', elements);
// }













































































































































