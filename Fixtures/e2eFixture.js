const base = require('@playwright/test');
const { chromium } = require('@playwright/test');
import ViewCartPage from '../PageObject/e2e/viewCartPage';
import PaymentDetailsPage from '../PageObject/e2e/paymentDetailsPage';
import ProductDetailsPage from '../PageObject/e2e/productDetailsPage';
import ShoppingAddressPage from '../PageObject/e2e/shoppingAddressPage';
import StorePage from '../PageObject/e2e/storePage';
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
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },
    viewCartPage: async ({ page }, use) => {
        await use(new ViewCartPage(page))
    },
    paymentDetailsPage: async ({ page }, use) => {
        await use(new PaymentDetailsPage(page))
    },
    productDetailsPage: async ({ page }, use) => {
        await use(new ProductDetailsPage(page))
    },
    shoppingAddressPage: async ({ page }, use) => {
        await use(new ShoppingAddressPage(page))
    },
    storePage: async ({ page }, use) => {
        await use(new StorePage(page))
    }
})