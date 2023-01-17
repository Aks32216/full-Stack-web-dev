// http module
// helps to create server
const http=require('http');

const server=http.createServer((req,res)=>{
    console.log("request from browser to server");
     
});

server.listen(3000,'localhost',()=>{
    console.log('server listening on port 3000');
});