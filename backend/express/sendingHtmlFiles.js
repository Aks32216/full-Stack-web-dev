const express=require('express');
const app=express();

// sendFile method is used to send entire html files
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html')
});

app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/views/about.html')
});

// redirect method redicts to a particular route and visits that route
app.get('/aboutus',(req,res)=>{
    res.redirect('/about');
})

app.get('/feed',(req,res)=>{
    res.sendFile(__dirname+'/views/feed.html')
});

// use is a middleware that runs everytime whenver js file is run
// 404 page but shows 200 as status code so we need to set status code by ourself
app.use((req,res)=>{
    res.status(404).sendFile(__dirname+'/views/error.html');
})

app.listen(3000,()=>{
    console.log("listening to port 3000");
})