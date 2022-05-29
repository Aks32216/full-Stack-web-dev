// path module
let path=require("path");

// files/folders have address to identify their location called path
// webpage -> folders have url
// paths are of two type
// absolute path -> full path of a file/folder from root folder
// relative path -> path of a folder/file relative to some folder/file


// "amish" -> just putting the file name if in the same directory
// "/home/amish32216/amish" -> Absolute Path
// "../lec1/fsModule.js" -> Relative Path

console.log(__dirname); // current folder in which we have our js file -> absolute path
console.log(__filename); // current file ka path
console.log(process.cwd()); // to get current working directory -> mode accurate as it give where file is running

// used to join paths to a file-> uses the convention of the reqired OS
// like in linux / is used while in windows \ is used
// so this makes easy to join path string
let folderName="home";
let nextFolderName="Amish32216";
let childFolder="c++";
let actualFile="code.cpp";
let address=path.join(folderName,nextFolderName,childFolder,actualFile);

console.log(address);

console.log("----------------------------------------------------");
// know extension of file
console.log(path.extname());