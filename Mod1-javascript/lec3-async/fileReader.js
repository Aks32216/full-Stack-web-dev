const fs=require("fs");
// console.log("Before");
// let content=fs.readFileSync("amish.txt","utf-8"); // this is syncronous way of calling
// console.log(content);
// console.log("After");

// in synchronous programming code is executed one after the other
// untill and unless a job is not done control waits for it to complete
// so suppose if there is a file reading of size 2GB then program will wait
// till entire file is read and then code will be executed further
// but this is a issue as it may block the other piece of code from running

// hence async programing helps in it
// it starts to execute a piece of code somewhere else
// and when it finishes it returns its value through a function
// as soon as call stack becomes empty event loop runs it

// console.log("Before");
// let content=fs.readFile("amish.txt",(err,data)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("data : "+data);
// });

// console.log("After");


// readFile works async way and delays the task of reading file to some other place and executes the code
// once entire code has been run its output is shown 

