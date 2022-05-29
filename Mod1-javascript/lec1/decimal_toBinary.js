function decimalToBinary(decimal){
    let ans=0;
    let power=1;
    while(decimal!=0)
    {
        ans=ans+(decimal%2)*power;
        power=power*10;
        decimal=Math.floor(decimal/2);
    }
    return ans;
}


let binNumber=decimalToBinary(13);
console.log(binNumber);
// using direct function
console.log(Number("109").toString(2));
