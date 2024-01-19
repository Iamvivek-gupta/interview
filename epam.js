// let x = [1];
// let y = x;
// x = [];

// console.log(x, y);





// var x = 1;
// var obj = {
//     x : 2,
//     getX: function(){
//         return console.log(this.x)
//     }
// }

// obj.getX()




// var obj2 = {
//     x : "Akshay"
// }
// var obj = {
//     x : 2,
//     getX: function(){
//         return console.log(this.x)
//     }
// }

// obj.getX()



var obj2 = {
    x: "Akshay"
}

var obj = {
    x: 2,
    getX: function () {
        return console.log(this.x);
    }
}

// Bind the getX function to obj2
var boundGetX = obj.getX.bind(obj2);

boundGetX(); // This will print "Akshay" in the console (fixed the above code to get Ashay in console)




// const arr = [
//     {tech: "react", value: true},
//     {tech: "angular", value: true},
//     {tech: "php", value: true},
//     {tech: "java", value: true},
//     {tech: "react", value: false},
//     {tech: "php", value: false},
// ]

// let output = [
//     {victim: "react", count: 2},
//     {victim: "angular", count: 1},
//     {victim: "php", count: 2},
//     {victim: "java", count: 1},
// ]




const arr = [
    { tech: "react", value: true },
    { tech: "angular", value: true },
    { tech: "php", value: true },
    { tech: "java", value: true },
    { tech: "react", value: false },
    { tech: "php", value: false },
];

// Create an object to store the count of each technology
const countMap = {};

// Iterate through the array and count occurrences
arr.forEach((item) => {
    const tech = item.tech;
    if (countMap[tech]) {
        countMap[tech]++;
    } else {
        countMap[tech] = 1;
    }
});

// Convert the countMap object to the desired output format
const output = Object.entries(countMap).map(([victim, count]) => ({
    victim,
    count,
}));

console.log(output);













// implement a delay function in javascript?

async function execute(ms){
    console.log("start")
    await delay(ms)
    console.log("resume")
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function execute(ms) {
    console.log("start");
    await delay(ms);
    console.log("resume");
}

// Example usage
execute(2000); // This will log "start", wait for 2 seconds, and then log "resume"
//In this implementation, the delay function returns a promise that resolves after the specified time (ms).
//The execute function uses await delay(ms) to pause execution for the specified time.



