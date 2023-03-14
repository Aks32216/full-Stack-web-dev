const express=require('express');
const {userModel}=require('../models/userModel');


const authRouter=express.Router();


authRouter.route('/signup')
    .get(getSignUp)
    .post(postSignUp)

function getSignUp(req,res){
    res.sendFile(__dirname+'/public/index.html');
}

function postSignUp(req,res){
    console.log(req.body);
    // once received the data you can save it to your database
    let {name,email,password}=req.body;
    res.json({
        msg:"user data received succesfully",
        user:{
            name,
            email,password
        }
    });
}

module.exports=authRouter;
