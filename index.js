import puppeteer from "puppeteer-core";


async function run() {
    let browser;

    try {
        
        browser = await puppeteer.connect({
            browserWSEndpoint: `wss://brd-customer-hl_6e7a9175-zone-scraping_browser1:ei7zm67v6doh@brd.superproxy.io:9222`
        })

        const page = await browser.newPage();
        page.setDefaultNavigationTimeout(2 * 60 * 1000);

        await page.goto('https://shohid.info');
        const selector = ".w-[calc(50%-5px)].md:w-[200px].bg-white.shadow-lg.rounded.relative a";
        await page.waitForSelector(selector);
        const el = await page.$(selector);
        const text = await el.evaluate(e => e.innerHTML);
        console.log(text);
        
    } catch (error) {
        console.error("Scrape Failed", error);
    }
    finally {
        await browser?.close();
    }
}