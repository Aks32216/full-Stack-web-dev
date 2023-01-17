// http module
// helps to create server
const http=require('http');

const server=http.createServer((req,res)=>{
    console.log("request from browser to server");
    // console.log(req);
    res.setHeader('Content-Type','text/plain');
    res.write('Hello world');
    res.write('how are you');
    res.end();
});

server.listen(3000,'localhost',()=>{
    console.log('server listening on port 3000');
});