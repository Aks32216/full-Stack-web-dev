// local storage is a inbuilt function of javascript
// every website is provided with 5MB of additional data for storage
// Inside loacal storage data is stored in form of key-value pairs
// but value must be a string
// operations allowed over local storage include -

// 1. setItem(key,value) -> this is used to set the key value pair inside local storage
// 2. getItem(key) --> used to get the data stored under key


// Advantages
// if you shut the brower of then also data remains save


let str="My Name is amish kumar singh";

localStorage.setItem("mystr",str);

let retreivedstr=localStorage.getItem("mystr");
console.log(retreivedstr);

// now suppose you want to store array inside local storage then
// first convert the array into string using JSON.stringify method and store it against a key
// while retriving from local storage again convert it to normal data using JSON.parse

let arr=[1,2,3,4,5];

let str1=JSON.stringify(arr);
localStorage.setItem("arrdata",str1);

let retstr1=localStorage.getItem("arrdata");
let arrFinal=JSON.parse(retstr1);
console.log(arrFinal);