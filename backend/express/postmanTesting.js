const express=require('express');
const app=express();
app.use(express.json());

let users={};


// this route is used to send data from backend to frontend
app.get('/user',(req,res)=>{
    res.send(users);
})

// this route is used to send data from frontend to backend
app.post('/user',(req,res)=>{
    console.log(req.body); 
    users=req.body;
    res.json({
        message:"message received successfully",
        user:req.body
    });
})

  
// this route can be used to update data
app.patch('/user',(req,res)=>{
    console.log(req.body); 
    let dataToBeUpdated=req.body;
    for(key in dataToBeUpdated){
        users[key]=dataToBeUpdated[key];
    }
    res.json({
        message:"data updated successfully",
        user:req.body
    });
})

app.delete('/user',(req,res)=>{
    users={};
    res.json({
        msg:"deleted data successfully"
    });
})



app.listen(5000,()=>{
    console.log("server started at port 5000");
})