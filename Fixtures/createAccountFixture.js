const base = require('@playwright/test');
const { chromium } = require('@playwright/test');
import CreateAccount from '../PageObject/createAccount/createAccount';
import GenerateData from '../Data/generateData';

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
    createAccount: async ({ page }, use) => {
        await use(new CreateAccount(page))
    },
    generateData: async ({ }, use) => {
        await use(new GenerateData())
    }
})
