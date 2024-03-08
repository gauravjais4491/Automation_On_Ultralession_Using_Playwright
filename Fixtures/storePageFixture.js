const base = require('@playwright/test');
const { chromium } = require('@playwright/test');
import StorePage from '../PageObject/StorePage/storePage';
import SecurePageForStorePage from '../PageObject/StorePage/securePageForStorePage';
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
    storePage: async ({ page }, use) => {
        await use(new StorePage(page))
    },
    securePageForStorePage: async ({ page }, use) => {
        await use(new SecurePageForStorePage(page))
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },
    securePageForHomePage: async ({ page }, use) => {
        await use(new SecurePageForHomePage(page))
    }
})