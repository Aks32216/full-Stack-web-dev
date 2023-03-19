const express=require("express");
const connection=require("./connection");

const app=express();

connection.connect((err)=>{
    if(err)
        throw err;
    connection.query("select * from students",(err,result)=>{
        if(err)
            throw err;
        console.log(result);
    })
})

app.listen(3000,()=>{
    console.log(`connected to port ${3000}`);
})



