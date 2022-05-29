function printArrFn(){
    let arr=[];
    for(var i=0;i<3;++i)
    {
        function printI(){
            console.log(i);
        }
        arr.push(printI);
    }
    return arr;
}

let arr=printArrFn();
console.log(arr[0]());
console.log(arr[1]());
console.log(arr[2]());