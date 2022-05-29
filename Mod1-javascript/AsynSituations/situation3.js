// situation 3 -> to read n number of file (or data from data base) parallely
// input of file paths would be given in form of an array

// let arrFiles=process.argv.slice(2);

const fs=require("fs");
let arrFiles=["./amish1.txt","./amish2.txt","./amish3.txt","./amish4.txt"];

console.log("Before");

for(let i=0;i<arrFiles.length;++i)
{
    fs.readFile(arrFiles[i],"utf-8",func);
}

function func(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
}

console.log("After");

for(let i=1;i<=10;++i)
    console.log(i);