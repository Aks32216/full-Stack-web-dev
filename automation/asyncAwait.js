const fs=require("fs");

// console.log("Before");

// fs.readFile("f1.txt","utf-8",(err,data)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log(data);
// })

// console.log("After");
// now consider the situation in which lot of callbacks are nested where input to 
// one callback is from output of the previous callbacks.
// such code becomes very clumsy, difficult to read and maintain.
// so nodejs provides the concept of promises and async await 

// console.log("*************** Promises **********************");

// they are objects which lives in two states 
// 1. promises are pending in this condition value remains undefined
// 2. once the job gets done (promises being fulfilled or being rejected)
//    value stores the corresponding result

// nodejs provides promises function

// let promise=fs.promises.readFile("f1.txt","utf-8");
// console.log(promise); // pending state

// function myFn()
// {
//     console.log(promise); // state when promise was fulfilled but whenever there will be error, it would be displayed
// }

// setTimeout(myFn,2000);

console.log("**************** Async Await **************************");

// async functions ??
// await will not work in normal function, for await to work functions need to be async

async function myFn()
{
    let promise=fs.promises.readFile("f1.txt","utf-8");
    let value=await promise; // it stops the function and waits till promise has been fulfilled or rejected
    console.log(value);
}

myFn();