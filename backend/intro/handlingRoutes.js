const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    let url=req.url;
    console.log(url);
    // we can user swith case 
    if(url==='/'){
        fs.readFile('./views/index.html',(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                res.end(data)
            }
        })
    }
    else if(url==='/about'){
        fs.readFile('./views/about.html',(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                res.end(data)
            }
        })
    }
    else if(url==='/feed'){
        fs.readFile('./views/index.html',(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                res.end(data)
            }
        })
    }
    else{
        fs.readFile('./views/error.html',(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                res.end(data)
            }
        })
    }
})

server.listen('3000','localhost',()=>{
    console.log("server listening on port 3000");
})