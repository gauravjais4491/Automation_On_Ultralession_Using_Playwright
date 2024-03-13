const base = require('@playwright/test');
const { chromium } = require('@playwright/test');
import Login from '../PageObject/Login/login';
import SecurePageForLogin from '../PageObject/Login/securePageForLogin';
import Capcha from '../PageObject/Capcha/capcha';

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
    capcha: async ({ page }, use) => {
        await use(new Capcha(page))
    },
    login: async ({ page }, use) => {
        await use(new Login(page))
    },
    securePageForLogin: async ({ page }, use) => {
        await use(new SecurePageForLogin(page))
    }
})