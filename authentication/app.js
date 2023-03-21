const express=require('express');
const app=express();
const jwt=require('jsonwebtoken');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs');

let user={
    id:"1222",
    email:"john@gmail.com",
    password:"kjsakldgjalskdjglkasjdlkgjsadlkjgkljsadlkgj"
}

const JWT_SECRET='some super secret...';


app.get('/',(req,res)=>{
    res.end("Hello world");
})

app.get('/forgot-password',(req,res,next)=>{
    res.render('forgot-password');
})

app.post('/forgot-password',(req,res,next)=>{
    let email=req.body.email;
    // first check if this mail exist in your database and then
    // create a unique link to send it to the user mail
    if(email!==user.email){
        res.send('User is not registered');
        return;
    }
    // user exit and create a one time link valid for a certain period
    const secret=JWT_SECRET+user.password;
    const payload={
        email:user.email,
        id:user.id
    }
    const token=jwt.sign(payload,secret,{expiresIn:'15m'});
    const link=`http://localhost:3000/reset-password/${user.id}/${token}`;
    console.log(link);
    // use a gmail client to send this link to the registered email
    res.send('password link has been sent to your email....');
})

app.get('/reset-password/:id/:token',(req,res,next)=>{
    const {id,token}=req.params;
    // verify the id from database
    if(id!==user.id)
    {
        res.send("not a valid id")
        return;
    }
    // valid id exist
    const secret=JWT_SECRET+user.password;
    try {
        const payload=jwt.verify(token,secret);
        res.render('reset-password',{email:user.email});
    } catch (error) {
        console.log(error.message);
        res.send(error.message);
    }
})

app.post('/reset-password/:id/:token',(req,res,next)=>{
    const {id,token}=req.params;
    const {password,confirmPassword}=req.body;
    if(id!==user.id)
    {
        res.send("not a valid id")
        return;
    }
    const secret=JWT_SECRET+user.password;
    try {
        const payload=jwt.verify(token,secret);
        // validate password and passwordconfirm should match
        // we can simply find the user with payload email and id
        // and finalyy update with the new password
        // hash the password and save to the database
        user.password=password;
        res.send(user);
    } catch (error) {
        console.log(error.message);
        res.send(error.message);
    }
})

app.listen(3000,()=>{
    console.log("listening to port 3000");
})