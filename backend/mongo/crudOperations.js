const express=require('express');
const app=express();
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const emailValidator=require('email-validator');
dotenv.config({path:'../.env'});
const db_link=process.env.DB_LINK;
app.use(express.json());
let users=[];

const userRouter=express.Router();
const authRouter=express.Router();
app.use('/user',userRouter);
app.use('/signup',authRouter);

userRouter.route('/')
    .get(middleware1,getUsers)
    .post(postUser)
    .patch(patchUser)
    .delete(deleteUser);

// authRouter.route('/signup')
//     .get(getSignup)

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
    let data=await userModel.findOneAndRemove({email:"riteshjha@gmail.com"});
    console.log(data);
    res.json({
        msg:"deleted data successfully"
    });
};

app.listen(5000,()=>{
    console.log("server started at port 5000");
})





mongoose.set("strictQuery", false);
mongoose.connect(db_link)
    .then((db)=>{
        console.log("connected to database");
    })
    .catch((err)=>{
        console.log(err);
    });

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:function (){
            return emailValidator.validate(this.email);
        }
    },
    password:{
        type:String,
        required:true,
        minLength:7
    },
    confirmPassword:{
        type:String,
        required:true,
        minLength:7,
        validate: function (){
            return this.confirmPassword==this.password;
        }
    }
});

// hooks are functions that run before and after the main objective function
// userSchema.pre('save',()=>{
//     console.log("pre save hooks");
// })

// userSchema.post('save',()=>{
//     console.log("post save hooks");
// })

// userSchema.pre('remove',()=>{
//     console.log("pre remove hooks");
// })

// userSchema.post('remove',()=>{
//     console.log("post remove hooks");
// })
    
// converting schema to model
const userModel=mongoose.model('userModel',userSchema);


