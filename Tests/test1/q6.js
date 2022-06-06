let decimalNum=process.argv.slice(2);

decimalNum=Number(decimalNum[0]);
console.log(decimalNum);

function decimalToBinary(decimalNum)
{
    let binaryNum="";
    let power=0;
    while(decimalNum)
    {
        let mod=decimalNum%2;
        binaryNum=mod+binaryNum;
        decimalNum=parseInt(decimalNum/2);
    }
    return binaryNum;
}

let binaryNum=decimalToBinary(decimalNum);

console.log(binaryNum);