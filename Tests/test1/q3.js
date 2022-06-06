// let rainDataArr=process.argv.slice(2);

let rainDataArr=[
    { name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8] },
    { name: "Pauri", rainfall: [3, 3, 3, 1, 2, 2, 2] },
]; 

function rainDance(rainData)
{
    let ans=[];
    for(let i=0;i<rainData.length;++i)
    {
        // console.log(rainData[i]["rainfall"]);
        let sum=0;
        for(let j=0;j<rainData[i]["rainfall"].length;++j)
        {
            sum+=rainData[i]["rainfall"][j];
        }
        // console.log(sum);
        sum=sum/rainData[i]["rainfall"].length;
        ans.push({name:rainData[i]["name"],avgRainFall:sum});
    }
    return ans;
}


let avgRainFall=rainDance(rainDataArr);

for(let i=0;i<avgRainFall.length;++i)
{
    console.log(avgRainFall[i]);
}