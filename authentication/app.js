const express=require('express');
const connection=require('./config');
const app=express();
const jwt=require('jsonwebtoken');
const dotenv=require("dotenv").config();
const nodemailer=require('nodemailer');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs');


const JWT_SECRET='some super secret...';

function sendMail(to,subject,message){
    let transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.USER_NAME,
            pass:process.env.USER_PASSWORD
        }
    });

    let mailOptions={
        to:to,
        subject:subject,
        text:message
    };

    transporter.sendMail(mailOptions,(err,success)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Email send successfully");
        }
    });
}

app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/forgot-password',(req,res,next)=>{
    res.render('forgot-password');
})

app.post('/forgot-password',(req,res,next)=>{
    let email=req.body.email;
    let sql='select * from emp where email=?';
    connection.query(sql,[email],(err,result)=>{
        if(err){
            throw err;
        }
        if(result.length==0){
            res.send("No such user exist")
            return;
        }
        // user exit and create a one time link valid for a certain period

        let email=result[0].email;
        let id=result[0].id;
        let name=result[0].name;
        let dbPassword=result[0].password;
        const secret=JWT_SECRET+dbPassword;

        const payload={
            email,
            id
        };

        const token=jwt.sign(payload,secret,{expiresIn:'15m'});

        const link=`http://localhost:3000/reset-password/${id}/${token}`;
        sendMail(email,"Reset Password for medilab",`Hello ${name},\nthis is your One Time link to reset password for your account at medilab.\n\n\n${link}\n\nIgnore this message if you have not generated this link.\n\nThis Link Expires in 15 min.`)
        res.send('password link has been sent to your email....');
    })
})

app.get('/reset-password/:id/:token',(req,res,next)=>{
    try {
        const {id,token}=req.params;
        let sql='select * from emp where id=?';
        connection.query(sql,[id],(err,result)=>{
            if(err){
                throw err;
            }
            // check if id exist or not
            if(result.length==0){
                res.send("You don't have acces to this page");
                return;
            }
            let email=result[0].email;
            let dbPassword=result[0].password;
            const secret=JWT_SECRET+dbPassword;
            const payload=jwt.verify(token,secret);
            res.render('reset-password',{email:email});
        });
    } catch (error) {
        console.log(error.message);
        res.send(error.message);
    }
})

app.post('/reset-password/:id/:token',(req,res,next)=>{
    try {
        const {id,token}=req.params;
        const {password,confirmPassword}=req.body;
        console.log(password);
        let sql='select * from emp where id=?';
        connection.query(sql,[id],(err,result)=>{
            if(err){
                throw err;
            }
            // check if id exist or not
            if(result.length==0){
                res.send("You don't have acces to this page");
                return;
            }
            let email=result[0].email;
            let dbPassword=result[0].password;
            const secret=JWT_SECRET+dbPassword;
            const payload=jwt.verify(token,secret);
            let sqlUpdate='update emp set password=? where email=?';
            connection.query(sqlUpdate,[password,email],(err,result)=>{
                if(err){
                    throw err;
                }
                res.redirect('/');
            })
        });
    } catch (error) {
        console.log(error.message);
        res.send(error.message);
    }
})

app.listen(3000,()=>{
    console.log("listening to port 3000");
})