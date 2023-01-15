const avengersAg={
    Tony:41,
    steve:507,
    natasha:35,
    thor:1405,
    peter:20
}

function getAge(name){
    return avengersAg[name];
}

// let ageArr=Object.keys(avengersAg);

// let ageArrSecond=ageArr.map((e)=>{
//     return getAge(e);
// })

// console.log(ageArrSecond);

// async function named(){
//     console.log("start");
//     const tonyAge=await getAge("Tony");
//     console.log(tonyAge);

//     const steveAge=await getAge("steve");
//     console.log(steveAge);

//     const natashaAge=await getAge("natasha");
//     console.log(steveAge);

//     const thorAge=await getAge("thor");
//     console.log(steveAge);

//     const peterAge=await getAge("peter");
//     console.log(steveAge);

//     console.log("end");
// }

// named();

let nameArr=['Tony','steve','natasha','thor','peter'];

async function named(){
    console.log("start");

    for(let i=0;i<nameArr.length;i++){
        let name=nameArr[i];
        let age=await getAge(name);
        console.log(name," ",age)

    }

    console.log("end");
}

named();