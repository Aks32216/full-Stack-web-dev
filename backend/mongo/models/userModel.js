const dotenv=require('dotenv');
const mongoose=require('mongoose');
const emailValidator=require('email-validator');
const bcrypt=require('bcrypt');
dotenv.config({path:'/home/Amish32216/Amish/web dev/practice/backend/.env'});
const db_link=process.env.DB_LINK;


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
userSchema.pre('save',function () {
    // only save the password field and remove the confirm password field as storing is it not useful
    this.confirmPassword=undefined;
})

userSchema.pre('save',async function (){
    let salt=await bcrypt.genSalt();
    console.log(salt);
    let hashedString=await  bcrypt.hash(this.password,salt);
    this.password=hashedString;
    // console.log(hashedString);
})

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

module.exports={
    userModel:userModel
}
    