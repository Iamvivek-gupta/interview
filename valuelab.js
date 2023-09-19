const users = [{ id: 3, salary: 50000, name: 'B' },
{ id: 2, salary: 60000, name: 'C' },
{ id: 1, salary: 45000, name: 'A' },

{ id: 4, salary: 55000, name: 'E' },

{ id: 6, salary: 45000, name: 'D' },

{ id: 5, salary: 63000, name: 'F' },

{ id: 7, salary: 50000, name: 'G' }];

const s = [2, 1, 3, 5, 4, 7, 6];

let result = [];

s.forEach(e => {
  console.log(users.find(a => e === a.id))
  result.push()
})



setTimeout(() => {

    console.log("first");

}, 0);

 

setImmediate(() => {

    console.log("second");

});

 

process.nextTick(() => {

    console.log("third");

});




function sam() {

    let a = b = 5;

}

sam();

console.log(typeof a); 

console.log(typeof b);

