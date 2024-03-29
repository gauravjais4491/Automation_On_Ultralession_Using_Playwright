import e2eData from '../../Data/e2eData.json'
import { customTest } from '../../Fixtures/e2eFixture.js'

for (const data of e2eData) {
    customTest(`should place an order with product name ' ${data.productName} '`, async ({ homePage, storePage, page, productDetailsPage, viewCartPage, shoppingAddressPage, paymentDetailsPage }, testInfo) => {

        await customTest.step('should go to store page', async () => {
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
        await customTest.step('should add contact details', async () => {
            await shoppingAddressPage.addContactDetails()
            await shoppingAddressPage.addShippingAddress(data.firstName, data.lastName, data.address, data.city, data.state, data.postalCode)
        })

        await customTest.step('should add payment details', async () => {
            await paymentDetailsPage.addPaymentDeatils(data.cardNumber, data.nameOnCard, data.expiry, data.cvv)
        })
    })
}

