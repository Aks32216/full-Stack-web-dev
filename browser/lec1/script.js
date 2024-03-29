 // document;
// *************************read*********************
// query selector only returns the first matching entry 
let elem = document.querySelector(".next_h1");
console.log("line number 5", elem);
// array of element 
let allh1s = document.querySelectorAll("h1");
console.log("line number 6", allh1s);

// get the content from html element
// input type of value -> where user set's the data 
let inputElem = document.querySelector("input");
console.log("line number 15", inputElem.value);
// rest of html elems
let para = document.querySelector("p");
let text = para.textContent;
console.log("line number 19", text);

// get attributes values from html element
let anchorElem = document.querySelector("a");
let output = anchorElem.getAttribute("href");
console.log("line number 23", output);


// *****************************create*******************
// create p tag
let pElem = document.createElement("p");
// put content
pElem.textContent = "Hello DOM";
// elem -> copy
let newpElem = pElem.cloneNode(true);
newpElem.textContent="append child";
// place it in the dom tree
let body = document.querySelector("body");
// it will add at last
body.appendChild(newpElem);
//  before an elem
// parent.insertBefore(curreElem,beforethiselem)
body.insertBefore(pElem, elem);
// setStyling 
pElem.style.backgroundColor = "lightgreen";

// ********************* update ******************

// content
newpElem.textContent="This is from child";

// // styling

pElem.style.backgroundColor="red";

// // attribute
anchorElem.setAttribute("href","https://leetcode.com");

// ********************* delete ******************

elem.remove();