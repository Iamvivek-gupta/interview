console.log(1);
setTimeout( () =>{
    console.log(2);
})
Promise.resolve(3).then(console.log);

console.log(4);



// const user = {
//     hello: 'welcome to turing',
//     sayWelcome (){
//         console.log(this.hello);
//     }
// }

// //setTimeout(user.sayWelcome(), 1000)

// setTimeout( (user) => {

// }, 1000)

// // setTimeout(user.sayWelcome.bind(this), 1000)

// setTimeout(user.sayWelcome.bind(user), 1000) 





// const EventEmitter = require('events');
// let event =new EventEmitter();

// event.on('event1', function(){
//     console.log('event1 fired!');
//     setTimeout( function(){
//         event.emit('event2');
//     }, 1000);
// })


// event.on('event2', function(){
//     console.log('event2 fired!');
//     setTimeout( function(){
//         event.emit('event1');
//     }, 500);
// })


// event.on('event3', function(){
//     console.log('event3 fired!');
//     process.nextTick( function(){
//         event.emit('event1');
//     });
// })

// event.emit('event3');






// const fs = require('fs');
// const path = require('path');

// const directory = 'test';

// const deleteFiles = async () => {
//     for await (const file of fs.readdir(directory)) {
//         await fs.unlink(path.join(directory, file));
//     }
// }

// deleteFiles();

//what will be the output for above code?









// Which of the following applies to this code block?

// const http = require("http");
// const requestLogs = [];
// function requestListener(req, res) {

//     if (req.url = "/now") {
//         let resp = JSON.stringify({ now: new Date() });
//         requestlogs.push(JSON.parse(resp));
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.write(resp);

//         res.end();
//     } else {
//         res.end("Invalid request");
//     }

// }




var events = require('events');
var Logger = new events.EventEmitter();

Logger.writeLog = (message) => {
    console.log(message);
    Logger.emit('error', 'Error Occurred')
}


module.exports = Logger;
















































