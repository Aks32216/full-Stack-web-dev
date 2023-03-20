const express=require("express");
const connection=require("./connection");
const path=require('path');
const bodyParser=require('body-parser');

const app=express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/register.html'));
});

app.post('/',(req,res)=>{
    let {name,email,number}=req.body;
    connection.connect((err)=>{
        if(err)
            throw err;
        let sql="INSERT INTO students(id,rollno,name,email) values(22,?,?,?)";
        connection.query(sql,[number,name,email],(err,result)=>{
            if(err)
                throw err;
            res.send("student Registered successfully"+result.insertId);
        })

    })
})

app.listen(3000,()=>{
    console.log(`connected to port ${3000}`);
})



