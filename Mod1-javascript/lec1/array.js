// arrays declared with [] and is empty

let arr=[];

// 2D Array :
let b=[[1,2,3],[4,5,6],[7,8,9]];
console.log(b);
console.log("------------------------------");
// traversal
let a=[1,2,3,4,5,6];

for(let i=0;i<a.length;++i)
    console.log(a[i]);

console.log("---------------------------------");
// methods
// remove ele at last
a.pop();

// add ele at last
a.push(10);

console.log(a);
console.log("---------------------------------");
// remove ele from first
a.shift();

// add ele at first
a.unshift(45);
console.log(a);
console.log("-------------------------------");
// indexOf -> idx/-1
let idx=a.indexOf(10);
idx=b.indexOf(5);
// includes -> true/false
let ans=a.includes(2);
console.log(idx);
console.log(ans);
console.log("----------------------------------");
// to get a subarray of an array
// slice(sidx,eidx) -> get element from [sidx,eidx)

let slicedArray=a.slice(1,4);
console.log(slicedArray);
console.log("--------------------------------");
// delete a subarray
// use splice(sidx,count) -> sidx-> starting idx and count-> no of element to delete
// it deletes this subarray from original array
// returns the deleted subarray.

let splicedArray=a.splice(1,3);
console.log(a);
console.log(splicedArray);
console.log("------------------------------------");