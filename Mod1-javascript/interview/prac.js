// Everything in JS is exected inside execution context
// even if no code is there global object and this is created

// console.log(global); -> gives global object
// console.log(this); -> gives this initially empty

// this, global and code is present in global execution context
// code is exected from top to bottom and left to right
// javascript is a syncronous single threaded language
// execution context is created whenever function is called

// code which is outside every function is present in global scope

// GEC is created in two phase
// 1. memory creation phase in which global and this and code is allocated memeory
//    variables are assigned undefined and fun are allocated in head
// 2. code exection phase which runs in top to bottom manner

// console.log("a : ",a); // undefined due to phase 1
// var a;
// a=10;

// console.log("a : ",a); // 10 due to phase 2

// console.log(fn);

// fn(); // same output funciton can be called before or after defination as it has been already allocated memory
// function fn(){
//     console.log("hi there");
// }
// fn();


// 1. predict the output
// fn(); // outputs the last function as it has been reassigned memory at last
// function fn(){
//     console.log("I am read");
// }

// function fn(){
//     console.log("No i am real");
// }

// function fn(){
//     console.log("no i ma the real one");
// }

// fn(); // outputs the last function as it has been reassigned memory at last

// 2. pridict the output
// console.log("50",a); // 57 undefined as during cration phase
// var a=10;

// function fn(){
//     console.log("54 ",a); // separate EC is created for fn and hence a allocated undefined
//     var a=20;
// }

// console.log("58 ",a); // 58 10 a assigned 10
// fn(); // fn called
// console.log("60 ",a); // 60 10

// 3. predict the output
// lexical scope fn always looks outside its fn defination if not defined in its scope
// var a=10;

// function b(){
//     console.log("3 ",a);
// }

// function c(){
//     var a=20;
//     console.log("8 ",a);
//     b();
//     console.log("10 ",a);
// }

// console.log("12 ",a);
// c();
// console.log("14 ",a);

// 4. predict the output
// this is because var is not blocked scope
// var a=10;
// function fn(){
//     console.log(a); // 20
//     a++;
//     console.log(a);
//     if(true)
//     {
//         var a=30;
//         a++;
//         console.log(a); // 30
//     }
//     a++;
//     console.log(a); 31
// }

// console.log(a); // 10
// fn();
// console.log(a); // 10
// ********************var scope ******************************

// var variables can be reassigned and redeclared
// reassignment
// var a=10;
// a=20;
// console.log(a);
// // redeclaration
// var a=30;
// console.log(a);
// for var variable -> memory allocation is done once per exection context
// for every function only one copy of named var variable is assigned memeory
// hence var declared variables are function scoped.

// *********************let scope ********************************
// let declared variables can be reassigned but cannot be redeclared
// let a=10;
// a=20;
// console.log(a);
// let a=30;
// console.log(a); -> syntax error -> a has been already declared
// let varables are blocked scope i.e, they have a scope of block

// Temporal Dead zone for let and const variables 
// they cannot be accesed before they are declared or initialized
// as they are not attached to global object
// console.log(a);
// let a;
// console.log(a);

// a=12;
// console.log(a);
// Temporal Dead zone for var variable start and end with the start of a block
// console.log(a);

// var a;
// console.log(a);

// a=19;
// console.log(a);
// *********************************** const scope ******************************

// const a; // give syntax error as const variable should be declared and initialized at same time
// a=10;
// console.log(a);

// const a=10; // type error as const variable cannot be reassigned
// a=20;
// console.log(a);

// console.log(a); // reference error as it is in TDZ and cannot be accesed befor delaration or initialization
// const a=10;
// console.log(a);

const a=10;
console.log("157",a);
{
    let a=20;
    console.log("159",a);
    {
        const a=29;
        console.log("162",a);
    }
}