const base = require('@playwright/test');
const { chromium } = require('@playwright/test');
import ViewCartPage from '../PageObject/CartPage/viewCartPage';
import PaymentDetailsPage from '../PageObject/PaymentDetailsPage/paymentDetailsPage';
import ProductDetailsPage from '../PageObject/ProductDetailsPage/productDetailsPage';
import ShippingAddressPage from '../PageObject/ShippingAddressPage/shippingAddressPage';
import StorePage from '../PageObject/StorePage/storePage';
import HomePage from '../PageObject/HomePage/homePage';
export const customTest = base.test.extend({
    // browser: async ({ }, use) => {
    //     const browser = await chromium.launch()
    //     await use(browser)
    // },
    // context: async ({ browser }, use) => {
    //     if (browser) {
    //         const context = await browser.newContext()
    //         await use(context)
    //     }
    // },
    page: async ({ page }, use) => {
        // const browser = await chromium.launch()
        // const context = await browser.newContext()
        // const page = await context.newPage()
        await page.goto('/', { waitUntil: 'networkidle' })
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
        await use(new ShippingAddressPage(page))
    },
    storePage: async ({ page }, use) => {
        await use(new StorePage(page))
    }
})