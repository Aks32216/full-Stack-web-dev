const express=require('express');
const app=express();
const dotenv=require('dotenv');
const mongoose=require('mongoose');
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
    let {name,email,password,confirmPassword}=req.body;
    let newUser={name,email,password,confirmPassword};
    let data=await userModel.create(newUser);
    res.json({
        message:"message received successfully",
        data:data
    });
};

function patchUser(req,res){
    console.log(req.body); 
    let dataToBeUpdated=req.body;
    for(key in dataToBeUpdated){
        users[key]=dataToBeUpdated[key];
    }
    res.json({
        message:"data updated successfully",
        user:req.body
    });
};

function deleteUser(req,res){
    users={};
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
            unique:true
        },
        password:{
            type:String,
            required:true,
            minLength:7
        },
        confirmPassword:{
            type:String,
            required:true,
            minLength:7
        }
    });
    
    // converting schema to model
    const userModel=mongoose.model('userModel',userSchema);
    

