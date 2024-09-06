const base = require('@playwright/test');
const { chromium } = require('@playwright/test');
import ContactPage from '../PageObject/ContactPage/contactPage';
import SecurePageForContactPage from '../PageObject/ContactPage/securePageForContactPage';
import HomePage from '../PageObject/HomePage/homePage';
import SecurePageForHomePage from '../PageObject/HomePage/securePageForHomePage';
import Captcha from '../PageObject/Captcha/captcha';

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
        await page.goto('/', { waitUntil: 'networkidle' })
        await use(page)
    },
    contactPage: async ({ page }, use) => {
        await use(new ContactPage(page))
    },
    securePageForContactPage: async ({ page }, use) => {
        await use(new SecurePageForContactPage(page))
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },
    securePageForHomePage: async ({ page }, use) => {
        await use(new SecurePageForHomePage(page))
    },
    captcha: async ({ page }, use) => {
        await use(new Captcha(page))
    }
})