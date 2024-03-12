const base = require('@playwright/test');
const { chromium } = require('@playwright/test');
import GenerateData from '../Data/generateData';
import Capcha from '../PageObject/Capcha/capcha';
import Footer from '../PageObject/Footer/footer';
import SecurePageForFooter from '../PageObject/Footer/securePageForFooter';
import HomePage from '../PageObject/HomePage/homePage';

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
    generateData: async ({ }, use) => {
        await use(new GenerateData())
    },
    capcha: async ({ page }, use) => {
        await use(new Capcha(page))
    },
    footer: async ({ page }, use) => {
        await use(new Footer(page))
    },
    securePageForFooter: async ({ page }, use) => {
        await use(new SecurePageForFooter(page))
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    }
})
