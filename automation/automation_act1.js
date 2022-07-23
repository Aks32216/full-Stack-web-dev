// puppeteer controls a headless browser -> brwoser not visible to user
const puppeteer=require("puppeteer");

(async ()=>
{
    let browser = await puppeteer.launch({
        headless:false, // show the browser on the screen
        defaultViewport: null, // changes the size of tab to take full space
        args:["--start-maximized"] // maximizes the size of the browser
    }); // returns the representative of browser which we can use
    let page=await browser.newPage(); // return the newly created tab
    await page.goto("https://www.google.com/"); // visits the website
    await page.type("input[type='text']","codeforces",{delay:200}); // types the text in the given selector
    await page.keyboard.press("Enter"); // presses enter on the keyboard
    await page.waitForSelector(".LC20lb.MBeuO.DKV0Md",{visible:true}); // waits for the selector to appear on the screen and then perfomr the task
    await page.click(".LC20lb.MBeuO.DKV0Md",{delay:200}); // clicks on the given  selector

})();