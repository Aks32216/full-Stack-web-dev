const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    let url=req.url;
    console.log(url);
    let path='./views';
    switch(url){
        case '/':
            path+='/index.html';
            res.statusCode=200;
            break;
        case '/about':
            path+='/about.html';
            res.statusCode=200;
            break;
        case '/feed':
            path+='feed.html';
            res.statusCode=200;
            break;
        default:
            path+='/error.html';
            res.statusCode=404;
            break;
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
        }
        else
        {
            res.end(data);
        }
    })
})

server.listen('3000','localhost',()=>{
    console.log("server listening on port 3000");
})