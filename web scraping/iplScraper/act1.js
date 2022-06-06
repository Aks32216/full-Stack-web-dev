// extract the data from the url and print the result

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
        // console.log(data);
        extractData(data);
    }
})


function extractData(htmlData){
    let JSDOM=jsdom.JSDOM;
    let dom=new JSDOM(htmlData);
    let document=dom.window.document;
    let venueData=document.querySelectorAll(".ds-text-tight-m.ds-font-regular.ds-text-ui-typo-mid");
    let teamsName=document.querySelectorAll(".ds-text-tight-l");
    let teamName1=teamsName[0].textContent;
    let teamName2=teamsName[1].textContent;
    let result=document.querySelectorAll(".ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo-title");
    let matchResult=result[0].textContent;
    let venue=venueData[0].textContent;
    console.log("Venue : ",venue);
    console.log("Team 1 : ",teamName1);
    console.log("Team 2 : ",teamName2);
    console.log("Match Result : ",matchResult);
}