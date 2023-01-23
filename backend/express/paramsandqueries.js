const express=require('express');
const app=express();
app.use(express.json());

let users=[
    {
        id:1,
        name:"amish",
        class:14
    },
    {
        id:2,
        name:"ashish",
        class:13
    },
    {
        id:3,
        name:"ritesh",
        class:11
    },
    {
        id:4,
        name:"ansh",
        class:7
    },
    {
        id:5,
        name:"aashu",
        class:15
    }
]

// queries
// queries are send using question mark
// so no need for separate route for them
// it is recieved with query of the request body

app.get('/user',(req,res)=>{
    console.log(req.query);
    res.send(users);
})


// params
app.get('/user/:id',(req,res)=>{
    let id=req.params['id'];
    for(let i=0;i<users.length;++i)
    {
        let userObj=users[i];
        if(userObj['id']==id){
            res.send(userObj)
        }
    }
});
 

app.listen(5000,()=>{
    console.log('server started at port 5000');
})