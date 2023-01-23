const express=require('express');
const app=express();
app.use(express.json());

app.route('/auth/signup')
    .get(getSignUp)
    .post(postSignUp);

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

app.listen(5000,()=>{
    console.log('server started on port 5000');
})