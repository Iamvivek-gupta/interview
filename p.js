

let u = [1, 2, 3, 9, 3, 5, 4, 6, 7, 8, 10];
function getMaxSumByDigit(u, n) {
    let max = 0;
    u.sort((a, b) => a - b);
    for (let i = 0; i < u.length - n + 1; i++) {
        let tempSum = 0;
        for (let j = 0; j < n; j++) {
            tempSum += u[i + j];
        }
        if (tempSum > max) max = tempSum;
    }
    return max;
}
// console.log(getMaxSumByDigit(u,3));


// function sum(n){
//     return n.length === 0 ? 0 : n[0] + sum(n.slice(1))
// }
// console.log(sum([1,2,3,4,5]));


// function factorial(n){
//     return n === 0 || n === 1 ? 1 : n * factorial(n - 1);
// }
// console.log(factorial(5))

// let num = [ [[1]], [[[2]]], [[[[3]]]], [[[[[4]]]]] ];
// let result = num.flat(1/0);
// console.log(result);



// RabbitMQ is a popular open-source message broker software that implements the Advanced Message Queuing Protocol (AMQP).
// It is used to communicate between different applications and services, enabling the exchange of messages between them in a reliable and scalable manner.

// RabbitMQ is widely popular due to its features and performance. Some of the key features are:

// Reliability: RabbitMQ provides a robust messaging system that ensures that messages are delivered between applications even if there are failures.

// Scalability: RabbitMQ can handle large amounts of messages and is highly scalable, making it ideal for large-scale applications.

// Integration: RabbitMQ can easily integrate with different programming languages and platforms, making it a versatile option for various applications.

// A real-world example of RabbitMQ usage is in the e-commerce industry. An online shopping site may have different applications for managing the shopping cart, payment processing, order fulfillment, and shipping. Each of these applications can communicate with each other through RabbitMQ, ensuring a seamless user experience. When an item is added to the cart, the shopping cart application can send a message to the payment processing application to initiate the payment process. Once the payment is processed, the order fulfillment application can receive a message to start the process of shipping the product. In this way, RabbitMQ acts as the communication layer between all the applications, ensuring a reliable and efficient exchange of information.



// RabbitMQ is a message-oriented middleware or a message broker that implements the Advanced Message Queuing Protocol (AMQP). It allows applications to communicate with each other by exchanging messages. The messages are stored in queues, and the applications can either be producers or consumers of the messages.

// RabbitMQ is popular because it is highly scalable, flexible, and robust. It can handle high traffic and large loads, making it suitable for both small and large organizations.






// Redis (Remote Dictionary Server) is an open-source, in-memory data structure store, used as a database, cache, and message broker. It supports various data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, and geospatial indexes with radius queries.

// Redis is widely popular due to its high performance, scalability, and versatility. It can be used in a variety of applications such as e-commerce websites, gaming platforms, social media platforms, real-time analytics, and more.

// For example, a popular e-commerce website such as Amazon can use Redis to store user session data in real-time. This allows the website to quickly retrieve user data, such as items in their shopping cart, without having to access the database every time. Redis can also be used to store real-time analytics data, allowing Amazon to track customer behavior and make quick business decisions based on that data.

// Another example is a gaming platform such as Fortnite, which can use Redis to store real-time player statistics and match results. This enables the platform to retrieve the data quickly and display it to players, creating a smooth and engaging gaming experience.

// In conclusion, Redis's high performance, scalability, and versatility make it a popular choice for many organizations, making it one of the most popular databases in use today.



// As a language model AI, I do not have personal opinions, but I can provide a positive response to the question. Here is one possible answer:

// Yes, I am very comfortable with the idea of moving to Canada. I am excited about the opportunity to work in a new environment and to immerse myself in a different culture. 
// Canada has a thriving technology sector, and I am eager to be part of it and to contribute to the industry. Additionally, I am a flexible and adaptable person, so I am confident that I will be able to make the transition smoothly.



function factorial(n) {
    if (n === 0) 1;
    let fact = 1;
    for (let i = n; i >= 1; i--) {
        fact *= i;
    }
    return fact;
}

// console.log(factorial(0));

function factorialRecursive(n) {
    // if(n ===0 || n === 1) return 1;
    // return n * factorialRecursive(n-1);
    return (n === 0 || n === 1) ? 1 : n * factorialRecursive(n - 1);
}

// console.log(factorialRecursive(6));







// const test = {
//     "name": "vivek", 
//     getName () {
//          console.log(this.name, "checking this scope");
//         return 2;
//     }
// }

// const abc = test.getName();
// console.log(abc);



// console.log(typeof Infinity);
// console.log(typeof NaN);

// var a = new Person("a");
// var b = Person 
// var c = Person("c");

// function Person(fname) {
//     this.fname = fname;
// }

// console.log("1.", fname);   
// console.log("2.", a.fname);    
// console.log("3.", b.fname);    
// console.log("4.", c.fname);






// this.name = "hallo"
// function getDetails() {
//     return {
//         name: "john",
//         ref: this
//     }
// }


// console.log(getDetails().ref.name);




let student = {
    age : 25
}

function getName(name){
    return `hallo ${name} your age is ${this.age}`
}

// console.log(getName.apply(student, ["vivek"]))

// console.log(getName.bind(student)); 





function recursiveCountDown(n){
    if(n === 0) return;
    console.log(n);
    recursiveCountDown(n-1)
}

// recursiveCountDown(3)


let arr= [1,2,3,1,2,3,1,2,3]
let r = arr.filter( (e, i, ar) => ar.indexOf(e) != i);
// console.log(r)

// let stu = [
//     {name: "Mehak", city: "Jammu"},
//     {name: "Vivek", city: "Varanasi"}
// ]

// let z = stu.map( (e, i) => ({...e, id : i +1}) )
// console.log(z)


function computeAmount(){
    let amount = 0;

    function lacs(value){
        amount += value * 100000;
        return this;
    }

    function crore(value){
        amount += value * 10000000;
        return this;
    }

    function thousand(value){
        amount += value * 1000;
        return this;
    }

    function value(){
        return amount;
    }

    // console.log("this checking ", this)
    return { lacs, crore, thousand, value}
}

// const amount = computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value();
// console.log(amount);

// console.log(computeAmount().value()) //0

// console.log(computeAmount().lacs(2).value()) //2,00,000

// console.log(computeAmount().lacs(2).lacs(20).value()) //22,00,000

// console.log(computeAmount().lacs(15).lacs(20).lacs(7).value()) //42,00,000




// function check(num){
//     let arr = num.toString().split('').map(Number);
//     let newSum = arr.map(digit => digit ** arr.length).reduce( (x, y) => x + y, 0);
//     console.log(newSum)

//     return num === newSum
// }

// console.log(check(370));

// console.log('before peomise starts');

// let peomise = new Promise( (resolve, reject) => {
//     setTimeout( function(){
//         resolve('Promise resolved');
//     }, 2000)
// })

// console.log('after peomise starts');


// // cls

// console.log('after peomise ends');




// var a = 2; setTimeout(() => {a = 3;}, 2000); while(true) {console.log(a);}



// let obj1 = {
//     newDate : new Date()
// }


// let obj2 = JSON.parse(JSON.stringify(obj1))

// console.log(obj1);
// console.log(obj2);



// function singleDigit(n){
//     let sum = 0;
//     while(n > 0 || sum > 9){
//         if(n === 0 ){
//             n = sum;
//             sum = 0;
//         }
//         sum += n % 10;
//         n = Math.floor(n/10);
//     }
//     return sum;
// }


// console.log(singleDigit(12345));



function fib(n){
    if(n<=1) return n;
    return fib(n-1) + fib(n-2);
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));


//   given a string s, print all its subsets

// eg: "abc" should print "a", "b", "c", "ab", "abc", "bc" , "ac", ""



























// ng g p pipename



// | UPPERCASE





// TransformStream(arhument) {
//     //
// }


// | pipename

// import Router from "@angular/router";

// constructor(){
//  this.routerServce = Router
// }


// ng g m modulename


































































































































































