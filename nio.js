// // abbac => aac => c
// // abbbd => abd

function removeDuplicate(input){
    const arr = [];
    const n = input.length;
    for(let i = 0; i < n; i++){
        if(arr.length === 0){
            // console.log("chekcing lenght")
            arr.push(input[i]);
            // console.log(arr)

        }
        else if(input[i] != arr[arr.length-1]){
            arr.push(input[i])
        }
        else if(input[i] == arr[arr.length-1]) {
            arr.pop();
        }
    }
    return arr.join('');
}
console.log(removeDuplicate("abbac"));
console.log(removeDuplicate("abbbd"));
console.log(removeDuplicate("abcd"))





// // function removeConsequtiveDuplicate(str){
// //     let modified = false;
// //     for(let i = 0; i < str.length -1; i++ ) {
// //         if(str[i] === str[i+1]){
// //             str = str.slice(0,i) + str.slice(i+2);
// //             modified = true;
// //             break;
// //         }
// //     }

// //     if(modified){
// //         return removeConsequtiveDuplicate(str)
// //     } else return str;
// // }

// // console.log(removeConsequtiveDuplicate("abbbd"));
// // console.log(removeConsequtiveDuplicate("abcd"))

// [[5,3],[3,4],[6,2]] tower how many people can see the sun    https://www.geeksforgeeks.org/number-buildings-facing-sun/

// 1,4,3,5 => 4
// 7,2,6,5 => 11, 18


// function getSum(arr){
//     let largest = arr[arr.length-1];
//     let sum = arr[arr.length-1];
//     for(i = arr.length-2; i >= 0; i--){
//         if(arr[i] > largest){
//             largest = arr[i];
//             sum += arr[i];
//         }
//     }
//     return sum;
// }

// console.log(getSum([1,2,3,4]));
// console.log(getSum([7,2,6,5]))
// console.log(getSum([1,4,3,5]))



























