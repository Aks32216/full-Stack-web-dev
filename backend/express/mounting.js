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

// mounting with route
// create route for each route so that all the http methods
// stay together
 
app.route('/user')
    .get(getUser)
    .post(postUser)
    .patch(patchUser)
    .delete(deleteUser);

app.route('/user/:id')
    .get(getUserById);

function getUserById(req,res){
    let id=req.params.id;
    console.log(id);
    for(let i=0;i<users.length;i++)
    {
        let userObj=users[i];
        if(userObj['id']==id){
            res.send(userObj);
        }
    }
    res.send("could not find user with such id");
}

function getUser(req,res){
    res.send(users);
};

function postUser(req,res){
    console.log(req.body); 
    users.push(req.body);
    res.json({
        message:"message received successfully",
        user:req.body
    });
};

function patchUser(req,res){
    console.log(req.body); 
    let dataToBeUpdated=req.body;
    for(key in dataToBeUpdated){
        users[key]=dataToBeUpdated[key];
    }
    res.json({
        message:"data updated successfully",
        user:req.body
    });
};

function deleteUser(req,res){
    users={};
    res.json({
        msg:"deleted data successfully"
    });
};

app.listen(5000,()=>{
    console.log("server started at port 5000");
})