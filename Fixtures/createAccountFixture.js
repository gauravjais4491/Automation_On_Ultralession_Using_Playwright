const base = require('@playwright/test');
const { chromium } = require('@playwright/test');
import CreateAccount from '../PageObject/createAccount/createAccount';
import GenerateData from '../Data/generateData';
import SecurePageForCreateAccount from '../PageObject/createAccount/securePageForCreateAccount';
import Capcha from '../PageObject/Capcha/capcha';
import HomePage from '../PageObject/HomePage/homePage';
import Login from '../PageObject/Login/login';

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
        await context.clearCookies()
        await page.goto('/', { waitUntil: 'networkidle' })
        await use(page)
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },
    login: async ({ page }, use) => {
        await use(new Login(page))
    },
    createAccount: async ({ page }, use) => {
        await use(new CreateAccount(page))
    },
    generateData: async ({ }, use) => {
        await use(new GenerateData())
    },
    securePageForCreateAccount: async ({ page }, use) => {
        await use(new SecurePageForCreateAccount(page))
    },
    capcha: async ({ page }, use) => {
        await use(new Capcha(page))
    }
})
