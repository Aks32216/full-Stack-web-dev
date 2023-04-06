const express=require('express');
const app=express();
const path=require('path');
const exphbs=require('express-handlebars');
const fileUpload=require('express-fileupload');
const port=3000;

app.engine('hbs',exphbs.engine({extname:'.hbs'}));
app.set('view engine','hbs');

app.use(fileUpload());


app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/',(req,res)=>{
    let sampleFile;
    let uploadPath;
    
    
    sampleFile=req.files.sampleFile;
    console.log(sampleFile);
    uploadPath=path.join(__dirname,'/uploads',sampleFile.name);
    
    // moving to upload folder
    sampleFile.mv(uploadPath,(err)=>{
        if(err){
            return res.status(500).send("Server Error");
        }
        res.send("File Uploaded")
    });
})

app.listen(port,()=>{
    console.log("listening to port 3000");
})