// file system module - allows to acces files and folders
// folders and files deal
let fs=require("fs");
let path=require("path");

// *********************** FILE OPERATIONS *************************
// file operations -> read, write, create, update, delete, apend, copy

// create

// creates a file if does not exit
// if exist then overides the file
// writeFileSync(path to file,content)
// writes into files synchronously
// fs.writeFileSync("amish.txt","");

// read file

// readFileSync is used to read file
// readFileSync(path to file,format)
// let content=fs.readFileSync("readme.txt","utf8");
// console.log(content);

// write

// fs.writeFileSync("amish.txt","Hi my name is amish");

// append 
// append means adding the content from last characters.
// appendFileSync(path to file,content to be appended)
// fs.appendFileSync("amish.txt","well this is just a intro class.")

// delete
// fs.unlinkSync("readme.txt");

// copy the content of one file to another
// copyFileSync(srcFilePath,dstnFilePath);
// if first creates a file with same name in dstnFilePath and then copies the content of it

// let srcFilePath="/home/amish32216/Amish/Web Dev/practice/Mod1-javascript/lec2-node/amish.txt";
// let dstnFilePath="/home/amish32216/Amish/Web Dev/practice/Mod1-javascript/lec1/amish.txt"

// fs.copyFileSync(srcFilePath,dstnFilePath);
// console.log("File copied");

// *********************** DIRECTORY OPERATIONS *************************

// create

// fs.mkdirSync("amish");

// delete

// fs.rmdirSync("amish");
// files and folder->get

// let content=fs.readdirSync("//home//amish32216//Amish//Web Dev//practice//Mod1-javascript//lec1");
// console.log(content);

// console.log("---------------------------------------------------");

// lstatSync -> checks if the given path is a file or folder
// has several functions
// isFile -> returns true if the current path is a file -> true/false
// isDirectory-> returns true if the current path is a directory -> true/false

// console.log(path.join(process.cwd(),"amish.txt"));
// let p=path.join(process.cwd(),"fsModule.js");
// console.log(fs.lstatSync(p).isFile()); //-> return true

// console.log(fs.lstatSync(process.cwd()).isDirectory());