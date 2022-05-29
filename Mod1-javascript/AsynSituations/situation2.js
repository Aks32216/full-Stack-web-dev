// situtation 2 -> read 3 files serially and append the content of files
// into new file 

const fs=require("fs");
let f1path="./amish1.txt";
let f2path="./amish2.txt";
let f3path="./amish3.txt";
let f4path="./amish4.txt"
console.log("before");

let fileContents="";

fs.readFile(f1path,"utf-8",file1cb);

function file1cb(err,data){
    if(err){
        console.log(err);
    }else{
        fileContents+=data+"\n";
        fs.readFile(f2path,"utf-8",file2cb);
    }
}

function file2cb(err,data){
    if(err){
        console.log(err);
    }else{
        fileContents+=data+"\n";
        fs.readFile(f3path,"utf-8",file3cb);
    }
}

function file3cb(err,data){
    if(err){
        console.log(err);
    }else{
        fileContents+=data+"\n";
        fs.appendFile(f4path,fileContents,appendcb);
    }
}

function appendcb(err){
    if(err){
        console.log(err);
    }else{
        console.log("Content appended succesfully serially");
    }
}

console.log("after");

for(let i=1;i<=10;++i)
    console.log(i);