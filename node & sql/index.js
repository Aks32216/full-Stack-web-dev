const express=require("express");
const connection=require("./connection");
const path=require('path');
const bodyParser=require('body-parser');

const app=express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('register');
});

app.post('/',(req,res)=>{
    let {id,name,email,number}=req.body;
    let sql="INSERT INTO students(id,rollno,name,email) values(?,?,?,?)";
    connection.query(sql,[id,number,name,email],(err,result)=>{
        if(err)
            throw err;
        res.redirect('/students');
    })
})

app.get('/students',(req,res)=>{
    let sql='Select * from students';
    connection.query(sql,(err,result)=>{
        if(err)
            throw err;
        res.render('student',{students:result})
    })
})

app.listen(3000,()=>{
    console.log(`connected to port ${3000}`);
})



