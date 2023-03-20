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

app.get('/deleteStudent',(req,res)=>{
    let id=req.query.id;
    let sql='DELETE FROM students WHERE id=?';
    connection.query(sql,[id],(err,result)=>{
        if(err)
            throw err;
        res.redirect('/students');
    })
})

app.get('/search-student',(req,res)=>{
    let sql='Select * from students';
    connection.query(sql,(err,result)=>{
        if(err)
            throw err;
        res.render('search-student',{students:result})
    })
})

app.post('/search-student',(req,res)=>{
    let {name,email,rollno}=req.body;
    if(name==='undefined')
        name='';
    if(email==='undefined')
        email='';
    if(rollno==='undefined')
        rollno='';
    console.log(name,email,rollno);
    let sql="select * from students where name like '%"+name+"%' and email like '%"+email+"%' and rollno like '%"+rollno+"%';"; 
    connection.query(sql,(err,result)=>{
        if(err)
            throw err;
        res.render('search-student',{students:result})
    })
})



app.listen(3000,()=>{
    console.log(`connected to port ${3000}`);
})



