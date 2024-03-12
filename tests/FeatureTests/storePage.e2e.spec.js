const testData = require('../../Data/storePageData.json');
import { customTest } from '../../Fixtures/storePageFixture';


customTest.beforeEach('Should go to store page', async ({ homePage, page }) => {
    await homePage.goToStorePage()
})


customTest('should filter price based on brand @brandName', async ({ storePage, securePageForStorePage }) => {
    await storePage.filterProductAccordingToBrand(testData.brandName)
    await securePageForStorePage.isFilteredAccordingToBrandNameOrNot(testData.brandName)
});

customTest('should filter product according to price range @priceRange', async ({ storePage, securePageForStorePage }) => {
    await storePage.addPriceRange(testData.priceFrom, testData.priceTo)
    await securePageForStorePage.isFilteredAccordingToPriceRangeOrNot(testData.priceFrom, testData.priceTo)

});

customTest('should filter product according to product types @productTypes', async ({ storePage, securePageForStorePage }) => {
    await storePage.filterProductAccordingToProductType(testData.productTypes)
    await securePageForStorePage.isFilteredAccordingToProductTypeOrNot(testData.productTypes)

});

customTest('should filter product according to product size @productSize', async ({ storePage, securePageForStorePage }) => {
    await storePage.filterProductAccordingToSize(testData.size)
    await securePageForStorePage.isFilteredAccordingToSizeOrNot(testData.size)

})

customTest('Verify Filtering Functionality Based on Product Availability @stock', async ({ storePage, securePageForStorePage }) => {
    await storePage.filterProductAccordingToStock(testData.stock)
    await securePageForStorePage.isFilteredAccordingToStockOrNot(testData.stock)

})
customTest('Verify Filtering Functionality Based on Product Availability @outOfStock', async ({ storePage, securePageForStorePage }) => {
    await storePage.filterProductAccordingToOutOfStock(testData.outOfStock)
    await securePageForStorePage.isFilteredAccordingToOutOfStockOrNot(testData.outOfStock)

})





























