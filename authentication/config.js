const mysql=require('mysql');

const connection=mysql.createConnection({
    host:"localhost",
    user:"amish",
    password:"aks32216",
    database:"amish"
});

connection.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("connected to database");
})

module.exports=connection;