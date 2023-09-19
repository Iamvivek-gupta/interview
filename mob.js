// // let a = 10;
// // function x(){
// //     function y(){
// //         console.log(a)
// //     }
// //     y()
// // }
// // x();

// // var a = 10;
// // var a = 20;


// // // let b = 10;
// // // let b = 20;

// // const c = 20;

// // let z = [1,2,3];

// // console.log(...z)


// // function add(...x){
// // console.log(arguments)
// // // return x + y;
// // }

// // console.log(add(2,3,4,5,6))





// // var x = 21;
// // var test = function () {
// //     // var x = undefined;
// //   console.log(x);
// //   let x = 20;
// // };
// // test();




// // function func2() {
// //     for (let i = 0; i < 3; i++) {
// //       setTimeout(() => console.log(i), 2000);
// //     }
// // }
// // func2();




// let input =  [12, 5, 2, [33, [[[[12]]]]], [[6,[9]]]];
//     // output : [ 12,5,2,33,12,6,9 ]


// function myFlatten(arr){
//     let result = []; 
//     for (let i = 0; i < arr.length; i++){
//         // console.log(arr[i])
//         if(Array.isArray(arr[i])){
//             result = result.concat(myFlatten(arr[i]))
//         } else {
//             result.push(arr[i])
//         }
//     }
//     return result;
// }

// console.log(myFlatten(input));





// let checkLOgin = (req, res, next) =>{
//     //
// }









// app.use(checkLOgin());










// app.get('/userDetails',checkLOgin, (req, res) => {

// })
















































