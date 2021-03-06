const puppeteer = require('puppeteer');

describe('H1 Text', () => {
    test('h1 loads correctly', async () => {
        let browser = await puppeteer.launch({
            headless: false
        });
        let page = await browser.newPage();

        page.emulate({
            viewport: {
                width: 500,
                height: 768
            },
            userAgent: ''
        });

        await page.goto('http://localhost:4321/');
        await page.waitForSelector('.App-title');

        const html = await page.$eval('.App-title', e => e.innerHTML);
        expect(html).toBe('Welcome to React');

        browser.close();
    }, 16000);
});