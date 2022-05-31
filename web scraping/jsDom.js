const fs=require("fs");
let htmlContent=fs.readFileSync("./sample.html","utf-8");

const jsdom=require("jsdom");
const JSDOM=jsdom.JSDOM;
// 1. string from me => html content provide karo
// pass to new JSDOM
let dom=new JSDOM(htmlContent);

let document=dom.window.document;
// 3. logic -> help to het your html
// elements if you pass a selector

// document.querySelector("p") -> give the first occurent of p
// document.querySelector("p");

// document.querySelectorAll("p") -> give all occurence of p in html page
// returns the value in form of an array

// let arrP=document.querySelectorAll("p");
// let firstp=arrP[0].textContent;
// let secondp=arrP[1].textContent;
// let thirdp=arrP[2].textContent;

// console.log(firstp);
// console.log(secondp);
// console.log(thirdp);

// all type of selectors are valid even ids and classes can be used

// let uniqueArr=document.querySelectorAll(".unique");
// let firstUnique=uniqueArr[0].textContent;
// let secondUnique=uniqueArr[1].textContent;

// console.log(firstUnique);
// console.log(secondUnique);