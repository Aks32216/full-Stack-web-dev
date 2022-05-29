// Objects - Non-primitive data type that is used to represent anything
// collection of key : value pairs
// key : string or number
// value : any valid js datatype
// objects and arrays are always copied by reference
// i.e to the variable reference of variable is stored rather than value

// empty object
let obj={

};

let cap={
    firstName:"Steve",
    lastName:"Rogers",
    friends:["Tony","Peter","bruce"],
    address:{
        city:"Manhattam",
        state:"New York"
    },
    age:32,
    isAvenger: true,
    "is Alive":true,
    4:"number"
};

// console.log(cap);

// // acess each key value pair

// console.log(cap.firstName);
// console.log(cap.address.city);
// console.log(cap.friends[2]);
// console.log(cap[4]);
// // get

// // to get the values with spaces we need to use [] brackets to acces
// console.log(cap["is Alive"]);
// console.log(cap["address"]);

// // delete and update and add in objects

// // delete
// delete cap.friends;

// // add
// cap.movies=["winter Soldier","First Avenger","Civil War"];
// cap["comp"]="DCU";

// // update
// cap.isAvenger=false;

// console.log(cap);

// // if key is not present in object

// console.log(cap.abc); // undefined is returned

// Traversing

for(let key in cap){
    console.log(key," ",cap[key]);
}
