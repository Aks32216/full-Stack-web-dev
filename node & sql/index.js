const mysql=require("mysql");


const connection=mysql.createConnection({
    host:"localhost",
    user:"amish",
    password:"aks32216",
    database:"amish"
});

// connection.connect((err)=>{
//     if(err){
//         throw err;
//     }
//     const sql="create table students(id int auto_increment primary key,name varchar(25));"
//     connection.query(sql,(err,result)=>{
//         if(err){
//             throw err;
//         }
//         console.log(result);
//     })
// })

// connect to sql and perform simple select query

// const sql="select * from students;";

// connection.query(sql,(err,result)=>{
//     if(err)
//         throw err;
//     console.log(result[0].name,result[2].id);
// })

