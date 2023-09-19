// function createRandom2DArray(numberOfRows, numberOfColumns) {
//     const array2D = []

//     for (let i = 0 i < numberOfRows i++) {
//         const row = []
//         for (let j = 0 j < numberOfColumns j++) {
//             const randomInt = Math.floor(Math.random() * 101) // Generates random integer between 0 and 100
//             row.push(randomInt)
//         }
//         array2D.push(row)
//     }

//     return array2D
// }

// const numberOfRows = 5
// const numberOfColumns = 3
// const random2DArray = createRandom2DArray(numberOfRows, numberOfColumns)
// console.log(random2DArray)

// function sort2DListByColumn(arr2D, columnIndex) {
//     // Clone the array to avoid modifying the original array
//     const sortedArray = arr2D.slice()

//     sortedArray.sort((a, b) => {
//         return a[columnIndex] - b[columnIndex]
//     })

//     return sortedArray
// }

// const original2DArray = [
//     [21, 4, 79],
//     [6, 34, 43],
//     [15, 54, 23]
// ]

// const columnIndexToSortBy = 2 // Index of the column to sort by

// const sorted2DArray = sort2DListByColumn(original2DArray, columnIndexToSortBy)
// console.log(sorted2DArray)

// Write the code for below question: calculate the shares

// Sample Input
// const awards = [
// {
// name: "James Peebles",
// category: "Physics",
// research: "Theoretical discoveries in physical cosmology",
// year: 2019,
// },
// {
// name: "Michel Mayor",
// category: "Physics",
// research: "Discovery of an exoplanet orbiting a solar-type star",
// year: 2019,
// },
// {
// name: "Didier Queloz",
// category: "Physics",
// research: "Discovery of an exoplanet orbiting a solar-type star",
// year: 2019,
// },
// {
// name: "John B. Goodenough",
// category: "Chemistry",
// research: "Development of lithium-ion batteries",
// year: 2019,
// },
// {
// name: "M. Stanley Whittingham",
// category: "Chemistry",
// research: "Development of lithium-ion batteries",
// year: 2019,
// },
// {
// name: "Akira Yoshino",
// category: "Chemistry",
// research: "Development of lithium-ion batteries",
// year: 2019,
// },
// {
// name: "Arthur Ashkin",
// category: "Physics",
// research: "Optical tweezers and their application to biological systems",
// year: 2018,
// },
// {
// name: "Gerard Mourou",
// category: "Physics",
// research: "Method of generating high-intensity, ultra-short optical pulses",
// year: 2018,
// },
// {
// name: "Donna Strickland",
// category: "Physics",
// research: "Method of generating high-intensity, ultra-short optical pulses",
// year: 2018,
// },
// {
// name: "Frances H. Arnold",
// category: "Chemistry",
// research: "Directed evolution of enzymes",
// year: 2018,
// },
// {
// name: "George P. Smith",
// category: "Chemistry",
// research: "Phage display of peptides and antibodies.",
// year: 2018,
// },
// {
// name: "Sir Gregory P. Winter",
// category: "Chemistry",
// research: "Phage display of peptides and antibodies.",
// year: 2018,
// },
// ]
// Required Output
// const prizes = [
// {
// category: Physics,
// year: 2019,
// winners: [
// { name: "James Peebles", share: 0.5 },
// { name: "Michel Mayor", share: 0.25 },
// { name: "Didier Queloz", share: 0.25 },

// ],
// },
// {
// category: Chemistry,
// year: 2019,
// winners: [
// { name: "John B. Goodenough", share: 0.3333 },
// { name: "M. Stanley Whittingham", share: 0.3333 },
// { name: "Akira Yoshino", share: 0.3333 },
// ],
// },
// {
// category: Physics,
// year: 2018,
// winners: [
// { name: "Arthur Ashkin", share: 0.5 },
// { name: "Gerard Mourou", share: 0.25 },
// { name: "Donna Strickland", share: 0.25 },
// ],
// },
// {
// category: Chemistry,
// year: 2018,
// winners: [
// { name: "Frances H. Arnold", share: 0.5 },
// { name: "George P. Smith", share: 0.25 },
// { name: "Sir Gregory P. Winter", share: 0.25 }, ],
// },
// ]

// const awards = [
//     {
//     name: "James Peebles",
//     category: "Physics",
//     research: "Theoretical discoveries in physical cosmology",
//     year: 2019,
//     },
//     {
//     name: "Michel Mayor",
//     category: "Physics",
//     research: "Discovery of an exoplanet orbiting a solar-type star",
//     year: 2019,
//     },
//     {
//     name: "Didier Queloz",
//     category: "Physics",
//     research: "Discovery of an exoplanet orbiting a solar-type star",
//     year: 2019,
//     },
//     {
//     name: "John B. Goodenough",
//     category: "Chemistry",
//     research: "Development of lithium-ion batteries",
//     year: 2019,
//     },
//     {
//     name: "M. Stanley Whittingham",
//     category: "Chemistry",
//     research: "Development of lithium-ion batteries",
//     year: 2019,
//     },
//     {
//     name: "Akira Yoshino",
//     category: "Chemistry",
//     research: "Development of lithium-ion batteries",
//     year: 2019,
//     },
//     {
//     name: "Arthur Ashkin",
//     category: "Physics",
//     research: "Optical tweezers and their application to biological systems",
//     year: 2018,
//     },
//     {
//     name: "Gerard Mourou",
//     category: "Physics",
//     research: "Method of generating high-intensity, ultra-short optical pulses",
//     year: 2018,
//     },
//     {
//     name: "Donna Strickland",
//     category: "Physics",
//     research: "Method of generating high-intensity, ultra-short optical pulses",
//     year: 2018,
//     },
//     {
//     name: "Frances H. Arnold",
//     category: "Chemistry",
//     research: "Directed evolution of enzymes",
//     year: 2018,
//     },
//     {
//     name: "George P. Smith",
//     category: "Chemistry",
//     research: "Phage display of peptides and antibodies.",
//     year: 2018,
//     },
//     {
//     name: "Sir Gregory P. Winter",
//     category: "Chemistry",
//     research: "Phage display of peptides and antibodies.",
//     year: 2018,
//     },
//     ]

//   // Helper function to calculate shares based on the number of winners
//   function calculateShares(totalWinners) {
//     return 1 / totalWinners;
//   }

//   // Group the awards by category and year
//   const groupedAwards = awards.reduce((acc, award) => {
//     const key = `${award.category}-${award.year}`;
//     if (!acc[key]) {
//       acc[key] = {
//         category: award.category,
//         year: award.year,
//         winners: [],
//       };
//     }
//     acc[key].winners.push(award.name);
//     return acc;
//   }, {});

//   // Calculate shares for each group of winners
//   const prizes = Object.values(groupedAwards).map((group) => {
//     const totalWinners = group.winners.length;
//     const sharePerWinner = calculateShares(totalWinners);

//     const winnersWithShares = group.winners.map((winner) => ({
//       name: winner,
//       share: sharePerWinner,
//     }));

//     return {
//       category: group.category,
//       year: group.year,
//       winners: winnersWithShares,
//     };
//   });

//   console.log(prizes);

// 1. Come up with data structures which can represent input and output.
// 2.Write a function which can take a single parameter(input) and returns(output).
// 3.Write optimized solutions to reduce the number of iterations -avoid group by.
// // Input
// const portfolio =[
// {name: "Mark",stock: "FB"},
// {name: "Steve",stock: "AAPL"},
// {name: "Tim",stock: "AAPL"},
// {name: "Steve",stock: "MSFT"},
// {name: "Bill",stock: "MSFT"},
// {name: "Bill",stock: "AAPL"},
// ];
// // Output
// const shareholder =[
// {stock: "AAPL",name:["Steve","Bill","Tim"],count:3},
// {stock:"MSFT",name:["Steve","Bill"],count:2},
// {stock: "FB",name:["Mark"],count:1},
// ];

// const portfolio = [
//     { name: "Mark", stock: "FB" },
//     { name: "Steve", stock: "AAPL" },
//     { name: "Tim", stock: "AAPL" },
//     { name: "Steve", stock: "MSFT" },
//     { name: "Bill", stock: "MSFT" },
//     { name: "Bill", stock: "AAPL" },
//   ];

//   function calculateShareholders(portfolio) {
//     const shareholderMap = new Map();
//     portfolio.forEach(({ name, stock }) => {
//       if (!shareholderMap.has(stock)) {
//         shareholderMap.set(stock, { stock, name: [], count: 0 });
//       }
//       const shareholder = shareholderMap.get(stock);
//       shareholder.name.push(name);
//       shareholder.count++;
//     });
//     const shareholders = Array.from(shareholderMap.values());
//     return shareholders;
//   }

//   const shareholder = calculateShareholders(portfolio);
//   console.log(shareholder);




// const merge = (a, b) => {
//   const result = [];
//   let i = 0; // Pointer for array A
//   let j = 0; // Pointer for array B
//   while (i < a.length && j < b.length) {
//     if (a[i] <= b[j]) {
//       result.push(a[i]);
//       i++;
//     } else {
//       result.push(b[j]);
//       j++;
//     }
//   }
//   // Add the remaining elements from array A
//   while (i < a.length) {
//     result.push(a[i]);
//     i++;
//   }
//   // Add the remaining elements from array B
//   while (j < b.length) {
//     result.push(b[j]);
//     j++;
//   }
//   return result;
// };
// const a = [1, 3, 5, 7, 8];
// const b = [9, 3, 2];
// console.log(merge(a, b));


















// const a = [1, 3, 6, 4, 7, 8, 7];

// for (let i = 0; i < a.length - 1; i++) {
//   for (let j = 0; j < a.length - i - 1; j++) {
//     if (a[j] > a[j + 1]) {
//       // Swap a[j] and a[j + 1]
//       const temp = a[j];
//       a[j] = a[j + 1];
//       a[j + 1] = temp;
//     }
//   }
// }

// console.log(a); // Sorted in ascending order









































// const flattenArray = (inputArray, outputArray = []) => {
//     for (let i = 0; i < inputArray.length; i++) {
//       if (Array.isArray(inputArray[i])) {
//         flattenArray(inputArray[i], outputArray);
//       } else {
//         outputArray.push(inputArray[i]);
//       }
//     }
//     return outputArray;
//   };
  
//   const a = [1, 5, 3, [4, 8, 7, 0, 6, [7, 9, 7, 8]]];
//   const flattenedArray = flattenArray(a);
//   console.log(flattenedArray); // [1, 5, 3, 4, 8, 7, 0, 6, 7, 9, 7, 8]
























// const arr = [[1, 2, 3], [0, 1, 1], [3, 45, 7], [1, 1, 1], [4, 6, 7], [3, 45, 7], [3, 45, 7], [1, 1, 1]];

// const sumOfArrays = arr.map(subArray => subArray.reduce((sum, num) => sum + num, 0));
// const sumOfCalls = sumOfArrays.length;

// const output = {
//   sum: sumOfArrays,
//   numberOfCalls: sumOfCalls
// };

// console.log(output);












// const longestCommonPrefix = (strs) => {
//     if (strs.length === 0) {
//       return "";
//     }
  
//     let prefix = strs[0];
  
//     for (let i = 1; i < strs.length; i++) {
//       while (strs[i].indexOf(prefix) !== 0) {
//         prefix = prefix.slice(0, prefix.length - 1);
//         if (prefix === "") {
//           return "";
//         }
//       }
//     }
  
//     return prefix;
//   };
  
//   const strs = ["flower", "flow", "flight"];
//   const output = longestCommonPrefix(strs);
//   console.log(output); // Output: "fl"
  





















// let isValid = function (s) {
//     let mapping = new Map();
//     mapping.set('(', ')')
//     mapping.set('{', '}')
//     mapping.set('[', ']')
//     let stack = [];
//     for (let item of s) {
//         if (mapping.has(item)) {
//             stack.push(mapping.get(item))
//         } else if (stack.pop() != item) {
//             return false;
//         }
//         // console.log(stack)
//     }
//     return stack.length === 0;
// }

// console.log(isValid("([]){}"))




































// const findPairWithSum = (arr, target) => {
//   const seenNumbers = new Set();

//   for (const num of arr) {
//     const complement = target - num;
//     if (seenNumbers.has(complement)) {
//       return [num, complement];
//     }
//     seenNumbers.add(num);
//   }

//   return null;
// };

// const inputArray = [2, 9, 3, 12, 17, 1];
// const targetSum = 10;

// const result = findPairWithSum(inputArray, targetSum);

// if (result) {
//   console.log(`Pair found: ${result[0]} + ${result[1]} = ${targetSum}`);
// } else {
//   console.log("No pair found.");
// }












// const generateValidParenthesis = (invalidStr) => {
//     const stack = [];
//     const chars = invalidStr.split('');
  
//     for (let i = 0; i < chars.length; i++) {
//       if (chars[i] === '(') {
//         stack.push(i);
//       } else if (chars[i] === ')') {
//         if (stack.length > 0) {
//           stack.pop();
//         } else {
//           chars[i] = ''; // Remove unmatched closing parenthesis
//         }
//       }
//     }
  
//     while (stack.length > 0) {
//       chars[stack.pop()] = ''; // Remove unmatched opening parenthesis
//     }
  
//     return chars.join('');
//   };
  
//   const invalidStr = '(a(ab)(a)))';
//   const validStr = generateValidParenthesis(invalidStr);
//   console.log(validStr); // Output: "(a(ab)(a))"
  








































// const findSmallestNumber = (nums) => {
//     let left = 0;
//     let right = nums.length - 1;
  
//     while (left < right) {
//       const mid = Math.floor((left + right) / 2);
  
//       if (nums[mid] > nums[right]) {
//         left = mid + 1;
//       } else {
//         right = mid;
//       }
//     }
  
//     return nums[left];
//   };
  
//   const rotatedArray = [4, 5, 6, 7, 0, 1, 2];
//   const smallestNumber = findSmallestNumber(rotatedArray);
//   console.log(smallestNumber); // Output: 0
  










































const findMedianSortedArrays = (nums1, nums2) => {
    if (nums1.length > nums2.length) {
      return findMedianSortedArrays(nums2, nums1);
    }
  
    const x = nums1.length;
    const y = nums2.length;
  
    let low = 0;
    let high = x;
  
    while (low <= high) {
      const partitionX = Math.floor((low + high) / 2);
      const partitionY = Math.floor((x + y + 1) / 2) - partitionX;
  
      const maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
      const maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
  
      const minX = partitionX === x ? Infinity : nums1[partitionX];
      const minY = partitionY === y ? Infinity : nums2[partitionY];
  
      if (maxX <= minY && maxY <= minX) {
        if ((x + y) % 2 === 0) {
          return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
        } else {
          return Math.max(maxX, maxY);
        }
      } else if (maxX > minY) {
        high = partitionX - 1;
      } else {
        low = partitionX + 1;
      }
    }
  };
  
  const nums1 = [2, 3, 5, 6, 9];
  const nums2 = [10, 16];
  
  const median = findMedianSortedArrays(nums1, nums2);
  console.log(median); // Output: 6
  
















  function sort2DListByColumn(list, columnIndex) {
    return list.slice().sort((a, b) => a[columnIndex] - b[columnIndex]);
  }
  
  const originalList = [
    [21, 4, 79],
    [6, 34, 43],
    [15, 54, 23],
  ];
  
  const sortedList = sort2DListByColumn(originalList, 2);
  console.log(sortedList);







  

























