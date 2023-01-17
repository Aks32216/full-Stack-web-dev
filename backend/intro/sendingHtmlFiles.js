const http=require("http");
const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    let data=fs.readFile("./views/index.html",(err,fileData)=>{
        if(err){
            console.log(err);
        }
        else{
            res.write(fileData);
            res.end();
        }
    })
})

server.listen('3000','localhost',()=>{
    console.log('server listening at port 3000');
})