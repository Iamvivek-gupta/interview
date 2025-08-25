// what will be output
 
console.log("Start");
setTimeout(() => {
    console.log("setTimeout 1");
    process.nextTick(() => {
        console.log("nextTick inside setTimeout");
    });
    Promise.resolve().then(() => {
        console.log("Promise inside setTimeout");
    });
}, 0);
setImmediate(() => {
    console.log("setImmediate");
});
Promise.resolve().then(() => {
    console.log("Promise 1");
    process.nextTick(() => {
        console.log("nextTick inside Promise");
    });
});
process.nextTick(() => {
    console.log("nextTick 1");
});
console.log("End");

// Output: 