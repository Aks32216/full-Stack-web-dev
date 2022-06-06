// get the data from the url and print the name of highest wicket taker and his wicket
let fs=require("fs");
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
    let playerStats=document.querySelectorAll(".ds-w-full.ds-table.ds-table-xs.ds-table-fixed"); // get data for bowling and batting for both the teams
    // console.log(playerStats.length);
    let teamBowling1=playerStats[1].innerHTML;
    let teamBowling2=playerStats[3].innerHTML;
    let newHtml="<table>"+teamBowling1+"</table>"+"<table>"+teamBowling2+"</table>";
    // fs.writeFileSync("bowling.html",newHtml);
    getDataFromBowling(newHtml);
}

function getDataFromBowling(newHtml)
{
    let JSDOM=jsdom.JSDOM;
    let dom=new JSDOM(newHtml);
    let document=dom.window.document;
    let allRows=document.querySelectorAll("tbody tr.ds-text-tight-s");
    // console.log(allRows.length);
    let hw=0;
    let hwName=[];
    for(let i=0;i<allRows.length;++i)
    {
        let allTds=allRows[i].querySelectorAll("td");
        let name=allTds[0].textContent;
        let wickets=allTds[4].textContent;
        if(wickets>hw)
        {
            hw=wickets;
            hwName=name;
        }
    }
    console.log(hwName);
    
}