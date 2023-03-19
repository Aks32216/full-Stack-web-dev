const mysql=require("mysql");

const connection=mysql.createConnection({
    host:"localhost",
    user:"amish",
    password:"aks32216",
    database:"amish"
});

module.exports=connection;