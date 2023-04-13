import puppeteer from 'puppeteer'
const sleep = (time: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}
(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized'],
    })
    const page = await browser.newPage();
    await page.goto('https://justmyblog.net')
    let isScroll = true;
    let step = 100;
    while (isScroll) {
        isScroll = await page.evaluate((step) => {
            let scrollTop = document.scrollingElement?.scrollTop ?? 0;
            document.scrollingElement!.scrollTop = scrollTop + step
            return document.scrollingElement!.scrollTop == scrollTop + step ? true : false
        }, step)
    }
    await sleep(1000)
    await page.screenshot({ path: 'website.png', fullPage: true })
    await browser.close()
})()