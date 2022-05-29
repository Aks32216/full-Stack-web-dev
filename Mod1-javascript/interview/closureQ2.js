function printArrFn(){
    let arr=[];
    for(let i=0;i<3;++i)
    {
        let smallArr=[1,2,3,4,5];
        arr.push(smallArr);
    }
    return arr;
}

let arr=printArrFn();
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]); // print the [1,2,3,4,5] as it will different ref to smallarr

function printArrFn2(){
    let arr=[];
    for(let i=0;i<3;++i)
    {
        // let smallArr=[1,2,3,4,5];
        function printI(){
            console.log(i);
        }
        arr.push(printI);
    }
    return arr;
}

let arr2=printArrFn2();
console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[2]); // print the [1,2,3,4,5] as it will different ref to smallarr

