const express=require('express');
const app=express();
const dotenv=require('dotenv');
const mongoose=require('mongoose');
dotenv.config({path:'../.env'});
const db_link=process.env.DB_LINK;
app.use(express.json());

app.listen(3000,()=>{
    console.log("server started at port 3000");
})

mongoose.set("strictQuery", false);
mongoose.connect(db_link)
    .then((db)=>{
        console.log("connected to database");
    })
    .catch((err)=>{
        console.log(err);
    });

// creating schema with mongoose

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

// create a use in the database
(async function createUser(){
    let user={
        name:"amish",
        email:"amish12435@gmail.com",
        password:"1234",
        confirmPassword:"1234"
    }
    let data=await userModel.create(user);
    console.log(data);
})();
