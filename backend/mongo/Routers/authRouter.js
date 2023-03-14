const express=require('express');
const {userModel}=require('../models/userModel');
const bcrypt=require('bcrypt');



const authRouter=express.Router();


authRouter.route('/signup')
    .get(getSignUp)
    .post(postSignUp)

authRouter.route('/login')
    .post(loginUser);

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

async function loginUser(req,res){
    try {
        let {email,password}=req.body;
        let user=await userModel.findOne({email:email});
        if(user){
            // check if password matches
            bcrypt.compare(password, user.password, function(err, response) {
                if (err){
                  res.json({
                    msg:err.message
                  })
                }
                if (response) {
                    res.cookie('isLoggedIn',true);
                    res.json({
                    msg:"user logged in"
                  })
                } else {
                  // response is OutgoingMessage object that server response http request
                  res.json({msg: 'passwords do not match'});
                }
              });
        }else{
            res.json({
                msg:"User not found"
            })
        }
    } catch (err) {
        res.json({
            msg:err.message
        })
    }
    
}

module.exports=authRouter;
