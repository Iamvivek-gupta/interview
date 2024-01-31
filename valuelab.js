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
  