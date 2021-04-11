const puppeteer = require('puppeteer');
//CLASS Names might change!
let numofPost = 238;
(async function () {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/', { waitUntil: "networkidle2" });
    await page.type("input[name='username']", "USERNAME",{delay:20});
    await page.type("input[name='password']", "PASSWORD", { delay: 100 });
    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click("button[type='submit']"),
    ]);
    await page.type("input[placeholder='Search']", "Target USERNAME",{delay:100});
 
     await page.waitForSelector("._01UL2 .fuqBx a",{ visible: true });
    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click("._01UL2 .fuqBx a"),
    ]);
    
    await page.waitForSelector(".KL4Bh img", { visible: true });

    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click(".KL4Bh img"),
    ]);
    let i = 0;
     while (i < numofPost) {  
        await page.waitForSelector(".KL4Bh img", { visible: true });
            await page.waitForSelector(".fr66n .wpO6b  ",{visible:true});
            page.click(".fr66n .wpO6b  ");
            await page.waitForSelector("._65Bje", { visible: true });
            await Promise.all([
                            page.waitForNavigation({ waitUntil: "networkidle2" }),
                           
                            page.waitForNavigation({ waitUntil: "networkidle2" }),
                            page.click("._65Bje "),
                            ]);
        i++;}
})
();