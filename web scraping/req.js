const request=require("request");
const jsdom=require("jsdom");
// requrest working ->
// 1. request for data on the given url
// 2. responses data which can be shown with callback

let url="http://google.com";

// request function returns 3 things
// 1. error -> if any error occured during response
// 2. response -> header + body
// 3. body- > actual data is present in this which is scraped

request(url,(err,response,body)=>{
    if(err){
        console.log(err); // if there was any error
    }
    else if(response && response.statusCode==404){
        console.log("Page Not Found"); // check if status code is 404 or not
    }else{
        // console.log(body); // print the HTML file
        console.log("Data Received from google sucessfully");
        extractData(body);
    }
});

function extractData(html)
{
    let JSDOM=jsdom.JSDOM;
    // when we pass html to JSDOM it converts it to document with certain functionality
    let dom=new JSDOM(html);
    // document represents the html element and window represents browser
    let document=dom.window.document;

    // for input elements value is to be needed to get the data

    let btnArr=document.querySelectorAll(".lsb");
    let btnContent=btnArr[0].value;
    console.log(btnContent);

    // for rest .textContent is used to get the data

    // let languageArr=document.querySelectorAll("#SIvCob a");
    // for(let i=0;i<languageArr.length;++i)
    // {
    //     let content=languageArr[i].textContent;
    //     console.log("Language : ",i," ",content);
    // }
}