// node js requires the acces to fs in this program.
let os=require("os");

// which os is installed
console.log("-------------------------------");
console.log(os.platform());

// know os architecture
console.log("--------------------------------");
console.log(os.arch());

// cpu data
console.log("-------------------------------");
console.log(os.cpus());

// Network information
console.log("-------------------------------");
console.log(os.networkInterfaces());

