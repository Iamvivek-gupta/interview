// var Logger = require('./turing');

// for(var i = 0; i < 11; i++){
//     Logger.on("error", function(err){
//         console.log("error writing log: " + err);
//     })
//     Logger.writeLog("hello");
// }



// function deleteCustomersById(customers, value){
//     var index = customers.findIndex(customer => customer.id === value);
//     if(index > -1){
//         customers.splice(index, 1)
//     };
//     return customers;
// }

// let customers = [
//     { id: 1, name: "john"},
//     { id: "2", name: "akshay"},
//     { id: 2, name: "vivek"},
//     { id: 3, name: "mehak"},
//     { id: '3', name: "love"}
// ]

// console.log(deleteCustomersById(customers, 3))





const bank = {
    customer: {
        currentBalance: 1000,
        deductCharges(charges, customerType) {
            if (customerType === 'Gold') {
                return this.currentBalance - (charges - (charges * 10) / 100);
            } else if (customerType === 'Preferred') {
                return this.currentBalance - (charges - (charges * 5) / 100);
            } else {
                return this.currentBalance - charges;
            }
        },
        addQuaterlyInterest(customerType) {
            if (customerType === 'Gold') {
                return this.currentBalance - (this.currentBalance * 3.5) / 100;
            } else if (customerType === 'Preferred') {
                return this.currentBalance - (this.currentBalance * 2.5) / 100;
            } else {
                return this.currentBalance - (this.currentBalance * 1.5) / 100;
            }
        }
    }
}


















