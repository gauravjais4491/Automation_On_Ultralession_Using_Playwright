const testData = require('../../Data/storePageData.json');
import { customTest } from '../../Fixtures/storePageFixture';

customTest.describe.configure({ timeout: 20 * 10 * 1000 })

customTest.beforeEach('Should go to store page', async ({ homePage }) => {
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
