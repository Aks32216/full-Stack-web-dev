const express=require('express');
const app=express();
app.use(express.json());

let userRouter=express.Router();
app.use('/user',userRouter);

userRouter.route('/')
    .get(middleware1,getUser,middleware2);

function middleware1(req,res,next){
    console.log("middleware 1 called");
    next();
}

function getUser(req,res,next){
    console.log("get user called");
    next();
}

function middleware2(req,res,next){
    console.log("middleware 2 called");
    res.json({
        msg:"user received"
    });
}

app.listen(5000,()=>{
    console.log("server started at 5000 port");
})