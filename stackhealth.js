console.log(1);
setImmediate(() => {
  console.log(2);
});
setTimeout(() => {
  console.log(3);
}, 0);
process.nextTick(() => {
  console.log(4);
});
console.log(5);
Rishabh Surti
17:15
https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/



let arr = [{name:'ac',age:30},{name:'ab',age:20}];
//sortArray(array,key,sortOrder)

 
function sortArray(array, key, sortOrder) {
    return array.sort( (a, b) => {
        if(a[key] < b[key]) {
            return sortOrder === 'asc' ? -1 : 1;
        }
        if(a[key] > b[key]){
            return sortOrder === 'asc' ? 1: -1;
        }
        return 0;
    })
}


console.log(sortArray(arr, 'age', 'asc'));