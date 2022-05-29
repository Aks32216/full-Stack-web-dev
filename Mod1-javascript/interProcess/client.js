// acquire the file using require property or import property
// provide the location of file from where you want to import the module
// dont give the extension and ./ is important to add in front 
// to denote it is a user defined module


const testObject=require("./test/file");
const libObject=require("./lib")

testObject.testFunc();
libObject.libFunc();