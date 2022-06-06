let request=require("request");
let jsdom=require("jsdom");


let url="https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/kolkata-knight-riders-vs-lucknow-super-giants-66th-match-1304112/full-scorecard";

request(url,(err,response,data)=>{
    if(err){
        console.log(err);
    }else if(response && response.statusCode==404){
        console.log("Oops! Page not Found");
    }else{
        console.log("Data Sucessfully retrieved");
        
    }
})


