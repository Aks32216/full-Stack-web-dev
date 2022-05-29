// situation 1 -> read 3 file(this can be reading from DB or some other blocking task) parallely 
// Other task in the code must not be hampered in their execution
const fs=require("fs");
let f1path="./amish1.txt";
let f2path="./amish2.txt";
let f3path="./amish3.txt";

console.log("before");

fs.readFile(f1path,"utf-8",func);
fs.readFile(f2path,"utf-8",func);
fs.readFile(f3path,"utf-8",func);

function func(err,data)
{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
}

console.log("after");

for(let i=1;i<=10;++i)
    console.log(i);