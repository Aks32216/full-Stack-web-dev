const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
app.use(express.json());
app.use(cookieParser());
let users=[];

const userRouter=require("./Routers/userRouter");
const authRouter=require("./Routers/authRouter");
app.use('/user',userRouter);
app.use('/auth',authRouter);


app.listen(5000,()=>{
    console.log("server started at port 5000");
})





