import { expect } from 'playwright/test'
import e2eData from '../../Data/e2eData.json'
import { customTest } from '../../Fixtures/e2eFixture.js'



for (const data of e2eData) {
    // customTest.use({ storageState: "./LoginAuthCQ1.json" })

    customTest(`should place an order with product name ' ${data.productName} '`, { tag: "@e2e" }, async ({ homePage, storePage, productDetailsPage, viewCartPage, shoppingAddressPage, paymentDetailsPage, page }, testInfo) => {
        await customTest.step('should go to store page', async () => {
            const viewport = await page.evaluate(() => {
                return {
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            });

            if (viewport.width < 990) {
                await page.locator('.header__icon--menu').click()
            }
            await homePage.goToStorePage()
        })

        await customTest.step('should go to product details page', async () => {
            await storePage.goToProductDetailsPage(data.productName)
        })

        await customTest.step('should add product to cart', async () => {
            await productDetailsPage.addProductToCart(data.numberOfItems)
        })

        await customTest.step('should go to shopping address page', async () => {
            await viewCartPage.goToShoppingAddressPage();
        })
        await customTest.step('should add shippping address details', async () => {
            await shoppingAddressPage.addShippingAddress(data.firstName, data.lastName, data.address, data.city, data.state, data.postalCode)
        })

        await customTest.step('should add payment details', async () => {
            await paymentDetailsPage.addPaymentDeatils(data.cardNumber, data.nameOnCard, data.expiry, data.cvv)
        })
    })
}

