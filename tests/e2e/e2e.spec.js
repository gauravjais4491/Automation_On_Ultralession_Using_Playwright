import e2eData from '../../Data/e2eData.json'
import { customTest } from '../../Fixtures/e2eFixture.js'

for (const data of e2eData) {
    customTest(`should place an order with product name ' ${data.productName} '`, async ({ homePage, storePage, page, productDetailsPage, viewCartPage, shoppingAddressPage, paymentDetailsPage }, testInfo) => {

        await customTest.step('should go to store page', async () => {
            console.log("should go to store page");
            await homePage.goToStorePage()
            console.log("should go to store page1");
        })

        await customTest.step('should go to product details page', async () => {
            console.log("should go to product details page");
            await storePage.goToProductDetailsPage(data.productName)
            console.log("should go to product details page1");
        })

        await customTest.step('should add product to cart', async () => {
            console.log("should add product to cart");
            await productDetailsPage.addProductToCart(data.numberOfItems)
            console.log("should add product to cart1");
        })

        await customTest.step('should go to shopping address page', async () => {
            console.log("should go to shopping address page");
            await viewCartPage.goToShoppingAddressPage();
            console.log("should go to shopping address page1");
        })
        await customTest.step('should add contact details', async () => {
            try {
                console.log("should add contact details");
                await page.screenshot({ path: `./Screenshots/first.png` });
                await shoppingAddressPage.addContactDetails()
                await page.screenshot({ path: `./Screenshots/second.png` });
                await shoppingAddressPage.addShippingAddress(data.firstName, data.lastName, data.address, data.city, data.state, data.postalCode)
                await page.screenshot({ path: `./Screenshots/third.png` });
                console.log("should add contact details1");
            } catch (error) {
                console.log(error);
            }

        })

        await customTest.step('should add payment details', async () => {
            console.log("should add payment details");
            await paymentDetailsPage.addPaymentDeatils(data.cardNumber, data.nameOnCard, data.expiry, data.cvv)
            console.log("should add payment details1");
        })
    })
}

