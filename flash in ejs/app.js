const express=require('express');
const session=require('express-session');
const cookieParser=require('cookie-parser');
const flash=require('connect-flash');
const ejs=require('ejs');

const app=express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// setting up our view engine
app.set('view engine','ejs');


// cookie parser and session
app.use(cookieParser('secretStringForCookies'));
app.use(session({
    secret:'SecretStringForSession',
    cookie:{maxAge:600000},
    resave:true,
    saveUninitialized:true
}));
app.use(flash());

app.get('/',(req,res)=>{
    const email=req.flash('user');
    res.render('index',{email});
})

app.post('/',(req,res)=>{
    req.flash('user',req.body.email);
    res.redirect('/');
})

app.listen(3000,()=>{
    console.log("Listening to port 3000");
})