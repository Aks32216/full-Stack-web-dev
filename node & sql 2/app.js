const express=require('express');
const app=express();
const path=require('path');
const exphbs=require('express-handlebars');
const fileUpload=require('express-fileupload');
const port=3000;
const mysql=require('mysql');

app.engine('hbs',exphbs.engine({extname:'.hbs'}));
app.set('view engine','hbs');

app.use(fileUpload());
app.use(express.static('public'));
app.use(express.static('uploads'));


const connection=mysql.createConnection({
    host:"localhost",
    user:"amish",
    password:"aks32216",
    database:"amish"
});

connection.connect((err)=>{
    if(err)
        throw err;
    console.log("connected to database");
})

app.get('/',(req,res)=>{
    let sql='select * from userprofile where id=1';
    connection.query(sql,(err,result)=>{
        if(err){
            throw err;
        }
        res.render('index',{result})
    })
})

app.post('/',(req,res)=>{
    let sampleFile;
    let uploadPath;
    
    sampleFile=req.files.sampleFile;
    uploadPath=path.join(__dirname,'/uploads',sampleFile.name);
    
    // moving to upload folder
    sampleFile.mv(uploadPath,(err)=>{
        if(err){
            return res.status(500).send("Server Error");
        }
        let sql='update userprofile set profile_image=? where id=1';
        connection.query(sql,[sampleFile.name],(err,result)=>{
            if(err)
                throw err;
            res.redirect('/');
        })
    });
})

app.listen(port,()=>{
    console.log("listening to port 3000");
})