// # 1 remove duplicates from the array
// const arr =  [ 1,5,3,5,8,6,3 ]
// //seen =



// # 2 flatten the array
// let arr = [ [1, 2], [3, 4, [ 5, [6, 7], 8] ], 9 ]
// output = [ 1,2,3,4,5,6,7,8,9]



// # 3 What will be the output ?

// const pro = () => {
//   return new Promise((resolve, reject)=> {
//     resolve('5')
//   })
// }

// setTimeout(() => {
//   console.log("1");
// }, 0);

// console.log("2");

// setTimeout(() => {
//   console.log("3");
// }, 1000);

// console.log("4");

// pro().then(data=>console.log(data))


// //2, 4, 5, 1, 3




// # 4

// const a = new Promise((r, e) => {
//   console.log('Race')
//   r('Hello')
// })

// console.log(‘Test1')

// setTimeout(() => {
//   a.
//   then((d) => console.log(d))
//   console.log(‘Test2')
// }, 0)  


// // test1, "Test2", "Race", "Hello"




// # 5
// const A = { z: 1, x: {y: 1} }; 
// const B = A; 
// B.z = 2; 
// console.log(A.z)


// # 6
// 1 Nodejs app - 1 instance of server
// API1 - sync - 15 secs
// API2 - 1 sec

// User1 -> API1 =>  ?
// after 3 secnds
// User2 -> API2 =>  ?



// # 7
// Get names of employees having the 3rd highest salary.


// SELECT Name FROM
// (Select name, salary, ROW_NUMBER() Over (Order By SALRY DESC) AS salary_rank from employee) AS ranked_salries where salary_rank = 3;








// // 1 remove duplicates from the array
// // const arr =  [ 1,5,3,5,8,6,3 ]
// // // seen = {1: true}
// // // result = []

// // let seen = {};
// // let result = [];

// // for (let num of arr) {
// //   if(!seen[num]){
// //     seen[num] = true;
// //     result.push(num);
// //   }
// // }

// // console.log(result)



// // # 2 flatten the array
// let arr = [ [1, 2], [3, 4, [ 5, [6, 7], 8] ], 9 ]
// // output = [ 1,2,3,4,5,6,7,8,9]

// function flattenArray(arr) {
//   let flatArray = [];

//   arr.forEach(element => {
//     if(Array.isArray(element)){
//       //console.log("",element);
//       flatArray.push(...flattenArray(element))
//     } else{
//       flatArray.push(element);
//     }
//   })


//   return flatArray;
// }


// const flattened = flattenArray(arr);
// console.log(flattened)




function differentWaysToCompute(expression){

    function computeHelper(expr){
        const result = [];

        for(let i = 0; i < expr.length; i++){
            const char = expr[i];
            if(char === "+" || char === "-" || char === "*"){
                let leftExpr = expr.slice(0, i);
                let rightExpr = expr.slice(i);


                let leftResult = computeHelper(leftExpr);
                let rightResult = computeHelper(rightExpr);


                for(left of leftResult){
                    for(right of rightResult){
                        if(char === "+"){
                            result.push(left + right);
                        } else if(char === "-"){
                            result.push(left - right);
                        } else if(char === "*"){
                            result.push(left * right);
                        }
                    }
                }

            }
        }

        if(result.length === 0){
            result.push(parseInt(expr));
        }


        return result;
    }


    return computeHelper(expression);
}



console.log(differentWaysToCompute("2-1-1"));
