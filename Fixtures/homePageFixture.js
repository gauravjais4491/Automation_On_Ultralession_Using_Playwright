const { chromium } = require('@playwright/test');
import HomePage from '../PageObject/HomePage/homePage';
import SecurePageForHomePage from '../PageObject/HomePage/securePageForHomePage';

export const customTest = base.test.extend({
    browser: async ({ }, use) => {
        const browser = await chromium.launch()
        await use(browser)
    },
    context: async ({ browser }, use) => {
        const context = await browser.newContext()
        await use(context)
    },
    page: async ({ context }, use) => {
        const page = await context.newPage()
        await page.goto('/')
        await use(page)
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },
    securePageForHomePage: async ({ page }, use) => {
        await use(new SecurePageForHomePage(page))
    }
});