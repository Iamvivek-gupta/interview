// Certainly! Here's an implementation of selection sort in JavaScript:

```javascript
function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }
}

// Example usage:
let array = [64, 25, 12, 22, 11];
selectionSort(array);
console.log("Sorted array:", array);
```

//This JavaScript implementation of selection sort follows the same logic as the Python implementation.
//It iterates over the array, finds the minimum element in the unsorted part, and swaps it with the first unsorted element. This process continues until the entire array is sorted.



// Here's a JavaScript implementation for the program:

```javascript
class Employee {
    constructor(name, title, salary) {
        this.name = name;
        this.title = title;
        this.salary = salary;
    }

    getName() {
        return this.name;
    }

    getTitle() {
        return this.title;
    }

    getSalary() {
        return this.salary;
    }

    setName(name) {
        this.name = name;
    }

    setTitle(title) {
        this.title = title;
    }

    setSalary(salary) {
        this.salary = salary;
    }
}

class Company {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    calculateTotalSalaryBill() {
        let totalSalary = 0;
        for (let employee of this.employees) {
            totalSalary += employee.getSalary();
        }
        return totalSalary;
    }
}

// Example usage:
let company = new Company();

let emp1 = new Employee("John Doe", "Software Engineer", 50000);
let emp2 = new Employee("Jane Smith", "Project Manager", 60000);

company.addEmployee(emp1);
company.addEmployee(emp2);

console.log("Total salary bill:", company.calculateTotalSalaryBill());
```

// This program defines two classes: `Employee` and `Company`. The `Employee` class represents an employee and provides methods for getting and setting the employee's name, title, and salary. The `Company` class represents a company and provides methods for adding employees and calculating the total salary bill for all employees added to the company.




//Here's how you can implement array rotation by `k` right rotations in JavaScript:

```javascript
function rotateArrayRight(arr, k) {
    const n = arr.length;
    k = k % n; // In case k is larger than the length of the array
    const rotatedArray = arr.slice(-k).concat(arr.slice(0, n - k));
    return rotatedArray;
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const k = 2;
const rotatedArr = rotateArrayRight(arr, k);
console.log(rotatedArr); // Output: [4, 5, 1, 2, 3]
```

// This function rotates the array `arr` by `k` elements to the right and handles cases where `k` is larger than the length of the array.












// To remove special characters from each element of an array in JavaScript, you can use a combination of regular expressions and the `map` function. Here's how you can do it:

```javascript
function removeSpecialCharactersFromArray(arr) {
    return arr.map(element => element.replace(/[^\w\s]/gi, ''));
}

// Example usage:
const arr = ["hello!", "world$", "how", "are", "you?"];
const cleanedArr = removeSpecialCharactersFromArray(arr);
console.log(cleanedArr); // Output: ["hello", "world", "how", "are", "you"]
```

// This function iterates over each element in the array and uses the `replace` method with a regular expression (`/[^\w\s]/gi`) to remove any characters that are not alphanumeric or whitespace characters.



















// a leader is an element that occurs at more than 50% of positions of an array
// write a function that will check if an arbitrary array of integers passed as a parameter has a leader
 
// below is a sample of an array with and without a leader
// you are allowed to use any additional data structures you find necessary
// if you can, discuss the computational and memory complexity of the solution
 
// const leaderlessArray = [1, 6, 5, 3, 5, 9, 18, 5, 7, 2]
// const arrayWithLeader = [5, 1, 3, 5, 5, 5, 11, 5, 2, 5]
 
// function hasLeader(arr) {}
 
// console.log(hasLeader(leaderlessArray))
// console.log(hasLeader(arrayWithLeader))




// const input = ['5.5.1', '4.21.0', '4.22.0', '6.1.0', '5.1.0', '4.5.0'];
// const output = ['4.5.0', '4.21.0', '4.22.0', '5.1.0', '5.5.1', '6.1.0'];
 
// const customSort = (x,y) =>{
//     if(x == y) return 0;
//     const split_x = x.split('.');
//     const split_y = y.split('.');
//     for(let a =0; a< Math.max(split_x.length, split_y.length); a++){
//         const val_x = parseInt(split_x[a]);
//         const val_y = parseInt(split_y[a]);
//         if(val_x < val_y) return -1;
//         if(val_x > val_y) return 1;
//     }
 
// };
 
// const output_code = input.sort(customSort);
// console.log(output.every((elem, index)=> elem === output_code[index]));
































function delayedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("")
        }, 2000)
    })
}



const delayedPromiseInstance = delayedPromise(2000);
 
delayedPromiseInstance
  .then(() => {
    console.log('Promise resolved after the specified delay!');
  })
  .catch((error) => {
    console.error('Promise rejected:', error);
  });
  
  
  
  
  
  
  
  
  // what are the ways to perform caching mechnicsm
  // when to use horizontal and vertical scaling for which tyoe of services.
  // disadvantages of typescript
  // why we use function components in react instead of class components
  // design patterns singleton, factory, decorator, adapter, observer
  // disadvantages of microservices?
  