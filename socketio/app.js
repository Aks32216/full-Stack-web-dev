const express=require('express');
const { Socket } = require('socket.io');
const app=express();
const path=require('path');

const http=require('http').Server(app);

const io=require('socket.io')(http);

app.get('/',(req,res)=>{
    
    let file=path.join(__dirname,'index.html');
    res.sendFile(file);
})

// on method of socket is used to catch any event that happens

// let users=0;

io.on('connection',(socket)=>{

    console.log('user connected');
    // users++;

    // broadcasting use io.sockets.emit() as this will emit to all sockets
    // and if socket instance is used then it wont send to other sockets
    // io.sockets.emit('showUser',{message: users+ " users connected"});

    // socket.emit('newUser',{message:'Welcome to our website'});

    // broadcast to other user except new user
    // socket.broadcast.emit('newUser',{message: users+" connectet to our website"})

    socket.on('disconnect',()=>{
        console.log("user disconnected");
        // users--;
        // socket.broadcast.emit('newUser',{message: users+ " users connected"});

    })

    // create a custom event and receive it on client side 

    // socket.emit('myCsEvent',{desc: 'An event message from custom event from server side'});

})

// creating new namespace
// let cnsp=io.of('/new-namespace');

// cnsp.on('connection',(socket)=>{
//     console.log('a user connected');

//     cnsp.emit('newEvent',{message:"hello"});

//     socket.on('disconnect',()=>{
//         console.log('a user disconnected');
//     })
// })




http.listen(3000,()=>{
    console.log("Listening on port 3000");
})