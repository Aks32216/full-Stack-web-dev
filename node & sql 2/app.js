const express=require('express');
const app=express();
const exphbs=require('express-handlebars');
const fileUpload=require('express-fileupload');
const port=3000;

app.engine('hbs',exphbs.engine({extname:'.hbs'}));
app.set('view engine','hbs');

app.use(fileUpload());


app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(port,()=>{
    console.log("listening to port 3000");
})