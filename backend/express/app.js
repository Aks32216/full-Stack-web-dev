const express=require('express');
const app=express();

// get function defines when the route will be visited
// what information needs to be shown on that route
app.get('/',(req,res)=>{
    res.send("hello world");
});

app.get('/about',(req,res)=>{
    res.send("about");
})

app.listen(3000,()=>{
    console.log("listening to port 3000");
})