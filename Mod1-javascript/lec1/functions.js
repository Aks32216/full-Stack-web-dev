// Functions

// function defination - function name(parameter){body}
// function defination, function declaration and function statement are one and the same thing only.
function fn(){
    console.log("I am a functon");
}

// function invocation
let a=fn();


// when nothing is returned from function then undefined is returned
console.log(a);
console.log(typeof(a));
console.log("----------------------------------------");

// Function with parameters
// parameters
function fnWithParameter(a,b){
    console.log(a," ",b);
    return "return value";
}
// arguments
fnWithParameter(10,20);
let z=fnWithParameter("Hello world",20)
console.log(z);
console.log(typeof(z));

console.log("--------------------------------------------");

function check(m)
{
    m=1;
}

var m=65;
check(m);
console.log(m);

