let credObj=require("./cred");

const puppeteer=require("puppeteer");

(async ()=>{
    let browser=await puppeteer.launch({
        headless:false,
        defaultViewport:null,
        args:["--start-maximized"]
    });
    let page=await browser.newPage();
    await page.goto(credObj.url);
    await page.waitForSelector("input[id='input-1']",{visible:true});
    await page.type("input[id='input-1']",credObj.mail,{delay:200});
    await page.type("input[id='input-2']",credObj.password,{delay:200});
    await page.click("button[type='submit']",{delay:200});
})();