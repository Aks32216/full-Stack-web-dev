// Javascript code is run from top-bottom and left-right

// to print on console
console.log("hello world");

// javascript is a non-statically typed language i.e., no type is 
// to be mentioned for a variable declaration

// variable declaration
let a=10;

console.log(a);

// Data Types
// There are 5 primitive data type in javascript
// 1. Numbers - it is used to store all kind of numbers including integer and float values
console.log("----------------------------------------------------");

let temp=10;
console.log(temp);
console.log(typeof(temp));

temp=10.1;
console.log(temp);
console.log(typeof(temp));

// 2. Strings - There is no char type only string type is supported and '' or "" are supported and valid
console.log("----------------------------------------------------");

temp="Amish";
console.log(temp);
console.log(typeof(temp));

temp='Amish';
console.log(temp);
console.log(typeof(temp));

// 3. boolean - Used to store boolean values
console.log("----------------------------------------------------");

temp=true;
console.log(temp);
console.log(typeof(temp));

// 4. null - NULL is stored  - typeof shows object
console.log("----------------------------------------------------");

temp=null;
console.log(temp);
console.log(typeof(temp));


// 5. undefined - it is a default value stored in a variable till it is initialized
// it just tells that variable does not contain anything but space has been allocated to it
console.log("----------------------------------------------------");

let m;
console.log(m);
console.log(typeof(m));

// Basic loops
console.log("----------------------------------------------------");

for(let i=1;i<=10;++i)
    console.log(i);

console.log("----------------------------------------------------");

let i=1;
while(i<=10)
{
    if(i%2==0)
        console.log(i);
    i++;
}

console.log("----------------------------------------");

