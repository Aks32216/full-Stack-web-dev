const express=require('express');
const {userModel}=require('../models/userModel');


const userRouter=express.Router();


userRouter.route('/')
    .get(middleware1,getUsers)
    .post(postUser)
    .patch(patchUser)
    .delete(deleteUser);

userRouter.route('/setCookies')
    .get(setCookies);

userRouter.route('/getCookies')
    .get(getCookies);

function middleware1(req,res,next){
    console.log("middleware 1 called");
    next();
};

async function getUsers(req,res){
    console.log(req.query);
    let allUsers=await userModel.find();
    res.json({
        msg:"users send succesfully",
        allUsers
    })
}; 
    
async function postUser(req,res){
    console.log(req.body); 
    try{
        let {name,email,password,confirmPassword}=req.body;
        let newUser={name,email,password,confirmPassword};
        let data=await userModel.create(newUser);
        res.json({
            message:"message received successfully",
            data:data
        });
    }
    catch(err){
        res.json({
            err:err.message
        })
    }
    
};

async function patchUser(req,res){
    console.log(req.body); 
    try{
        let dataToBeUpdated=req.body;
        let data=await userModel.findOneAndUpdate({email:"riteshjha@gmail.com"},dataToBeUpdated);
        res.json({
            message:"data updated successfully",
            user:req.body
        });
    }
    catch(err){
        req.json({err:err.message})
    }
    
};

async function deleteUser(req,res){
    console.log(req.body);
    // let data=await userModel.deleteOne({email:"amish12435@gmail.com"});
    let data=await userModel.findOneAndRemove({email:"rashmi@gmail.com"});
    console.log(data);
    res.json({
        msg:"deleted data successfully"
    });
};

function setCookies(req,res){
    res.cookie('isLoggedIn','True',{maxAge:10000,secure:true});
    res.cookie('password',1234564,{secure:true});
    res.send("cookie has been set");
}

function getCookies(req,res){
    let cookies=req.cookies;
    console.log(cookies);
    res.send(cookies);
}

module.exports=userRouter;