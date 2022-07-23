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
    await page.type("input[type='text']","pepcoding",{delay:200}); // types the text in the given selector
    await page.keyboard.press("Enter"); // presses enter on the keyboard
    await page.waitForSelector(".LC20lb.MBeuO.DKV0Md",{visible:true}); // waits for the selector to appear on the screen and then perfomr the task
    await page.click(".LC20lb.MBeuO.DKV0Md",{delay:200}); // clicks on the given  selector
    await page.waitForSelector(".site-nav-li",{visible:true});
    await page.click(".site-nav-li",{delay:20});
    await page.waitForSelector(".card");
    let allCourses=await page.evaluate(getCourseData);
    function getCourseData(){
        let allCards=document.querySelectorAll(".card-content.no-padding");
        let courseName=[];
        for(let i=0;i<allCards.length;++i)
        {
            let date=allCards[i].querySelector(".date").textContent.trim();
            let course=allCards[i].querySelector("h3").textContent.trim();
            let courseDescArr=allCards[i].querySelectorAll(".card-content.no-padding .course-desc>.row");
            let description=""
            for(let j=0;j<courseDescArr.length;++j)
            {
                let desc=courseDescArr[j].querySelector(".col.l9.s9").textContent.trim();
                description+=desc+"\n";
            }
            let coursePrice=allCards[i].querySelectorAll(".cart-sec h4");
            

            let price=coursePrice.length==1?coursePrice[0]:coursePrice[1];
            price=price.textContent.trim();
            let obj={date:date,course:course,description:description,price:price};
            courseName.push(obj);
        }
        return courseName;
    }
    console.table(allCourses)
})();