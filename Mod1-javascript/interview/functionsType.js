// *************** variables behavior ***************************

// variable can be assigned
// in primitive variable values are copied to each other but in 
// derived type reference is passed

// let a=10;
// let b;
// b=a;
// b=20;
// console.log(a); // outputs 10
// console.log(b); // outputs 20

// let arr1=[1,2,3,4,5];
// let arr2=[6,7,8,9];
// arr1=arr2;
// arr2[2]=560;
// console.log(arr1);// both with contain [6,7,560,9]
// console.log(arr2);

// this is because reference is copied so both of them are 
// pointing to same location so cahange in any one variable
// reflects change in another]
// this is also applicable for objects

// function fn2(param)
// {
//     param=23;
// }
// let a=24;
// fn2(a); 
// console.log(a);// outputs 24 as value is not changed

// function fn(param)
// {
//     param[2]=90;
// }
// let arr1=[1,2,3,4,5];
// fn(arr1); // outputs with canged value due to reference
// console.log(arr1); // function can change the value of non primitives as reference is passed
// // this is applicable for objects too

// *********************  Function behavior ***************************

// variables in javascript can have following behavior
// 1. assignment
// 2. pass as a parameter to a function
// 3. return from a function

// functions in javascript can be treated like a variable
// thus functions can have all the behavior that a variable has

// ----------------- function assignment --------------------

// function fn()
// {
//     console.log("I am a function");
//     return 10;
// }

// let a=fn;
// let b=fn();
// console.log(a); // since a has reference of fn so it can be used to call function
// a(); // calls function
// console.log(b); // stores the return value of a function

// ----------------- function passing as parameter --------------------

// function chotaFn()
// {
//     console.log("I am chota function");
// }

// function badaFn(param) // function as a parameter
// {
//     console.log("I am bada Function"); 
//     console.log(param); // logs the reference of function
//     param(); // param contains reference and hence calls it
// }

// badaFn(chotaFn); // passing function as parameter

// ------------------ returning a function from a function -------------------

// function outer()
// {
//     console.log("I am outer function");
//     function inner(){
//         console.log("I am inner function");
//     }
//     return inner;
// }

// let fn=outer();
// console.log("I am being logged after outer has been called");
// fn();



// ************* function type **************************

// 1. function statement / function declaration / function defination
// the normal way of declaring function

// console.log(fn); // these type are hoisted in memeory

// function fn()
// {
//     console.log("Hi this is a function");
// }

// fn();

// // 2. funciton expression
// // assigning function to a variable -> this time fuction may hava a name or may not have a name

// console.log(fn2); // they are not hoisten in memeory even if they or named or anonymous

// let a=function fn2(){
//     console.log("Hi i am function expression");
// }

// a();


// 3. IIFE -> immediately invoked functin expression -> defination and calling of function at a time
// not hoisted
// IIFE is not accessible outside
// IIFE -> all the library of JQuery uses IIFE
// (function fn3(){
//     console.log("Hi i am a IIFE");
// })();

// // 4. arrow functions 
// let b=()=>{
//     console.log("Hi i am a arrow function");
// }

// b();

// ****************** Closures ****************************

// function getFirstName(firstName){
//     console.log("First Name ",firstName);
//     return function getLastName(lastName){
//         console.log("Last Name ",lastName);
//         return function getFullName()
//         {
//             console.log(firstName," ",lastName);
//         }
//     }
// }

// let lName=getFirstName("amish"); // calls getFirstName and returns address of getLastName
// let fullname=lName("Singh"); // calls getLastName and returns address of getFullName
// fullname(); // getFullName remembers its outer variables and hence prints full name

// closure is a feature of javascript which enables the acess of variable
// that are declared outside even if the outer function is removed from the stack.

// function fn1(){
//     let count=1;
//     return function increment(){
//         count++;
//         console.log(count);
//         return function decrement(){
//             count--;
//             console.log(count);
//         }
//     }
// }

// let a=fn1();
// let b=a();

// // for(let i=0;i<5;++i)
// //     a(); // function logs count in increment order
// //     // as it stores the reference of the variable 


// a();
// b();
// a();
// a();
// b();

// q.1) predict the output

function printArrFN(){
    let arr=[];
    for(var i=0;i<3;++i)
    {
        function printI(){
            console.log("i",i);
        }
        arr.push(printI);
    }
    return arr;
}

let arrFn=printArrFN();
arrFn[0](); // it will print 3 in all three cases
arrFn[1]();
arrFn[2]();

// var declared variables are once allocated in function so all printI will
// have acess to same i variable and due to closure inner fn will have a reference
// to i and hence it will print i which value has been changed to 3
// had it been let declared variables which are allocated in blocks
// then it would have been 0 1 2 as every let will have different memory location
// and hence it reference would be stored and thus it would have been 0 1 and 2 as answer
