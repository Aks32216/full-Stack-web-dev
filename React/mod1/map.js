let arr=[1,2,3,4,5];

function addition(arrElem){
    return arrElem+10;
}

let newArr=arr.map(addition);
console.log(newArr);

newArr=arr.map((e)=>{
    return e*e;
})

console.log(newArr);
