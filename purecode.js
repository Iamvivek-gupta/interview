// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


// async function check(req, res) {  
//     try {    
//         const a = await someOtherFunction();    
//         const b = await somethingElseFunction();    
//         res.send("result")
//     } catch (error) {    
//         res.send(error.stack);  
        
//     }
    
// }


let someOtherFunction = new Promise("some value1");
let somethingElseFunction = new Promise("some value2");
function check(req, res) {
    someOtherFunction.then(data => {
        console.log(data);
        somethingElseFunction.then(data2 => {
            console.log(data2)
            res.send("result")
        }).catch(err2 => {
            console.log(err2)
            res.send(err2.satck)
        })
    }).catch(err => {
        console.log(err)
        res.send(err.satck)
    })
}


// SQL and NOSQL db difference vertical and horizontal scaling
// their is parent and child component when parent component render child component also render? if yes How we can stop reder child component



// their is one component and one function when on componetndidunmount hoe we can invoke the function.

// when we pass the parameter to next() what will happend to other middlewar?





















