function libFunc(){
    console.log("I am a file");
}

function inner(){
    console.log("inner");
}

let a=10;

// module.exports can be used to transport function objects 
// and literals from one file to another
// module.exports= literals | function | object

module.exports={
    libFunc:libFunc,
    a:a
}