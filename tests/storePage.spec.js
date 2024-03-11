const { expect } = require('@playwright/test')
const testData = require('../Data/storePageData.json');
import { customTest } from '../Fixtures/storePageFixture';


customTest.beforeEach('Should go to store page', async ({ homePage, page }) => {
    await homePage.goToStorePage()
    await page.waitForLoadState('networkidle')
})


customTest('should filter price based on brand @brandName', async ({ storePage, securePageForStorePage }, testInfo) => {
    await storePage.filterProductAccordingToBrand(testData.brandName)
    await securePageForStorePage.isFilteredAccordingToBrandNameOrNot(testData.brandName)
});

customTest('should filter product according to price range @priceRange', async ({ storePage, securePageForStorePage }, testInfo) => {
    await storePage.addPriceRange(testData.priceFrom, testData.priceTo)
    await securePageForStorePage.isFilteredAccordingToPriceRangeOrNot(testData.priceFrom, testData.priceTo)

});

customTest('should filter product according to product types @productTypes', async ({ storePage, securePageForStorePage }, testInfo) => {
    await storePage.filterProductAccordingToProductType(testData.productTypes)
    await securePageForStorePage.isFilteredAccordingToProductTypeOrNot(testData.productTypes)

});

customTest('should filter product according to product size @productSize', async ({ storePage, securePageForStorePage }, testInfo) => {
    await storePage.filterProductAccordingToSize(testData.size)
    await securePageForStorePage.isFilteredAccordingToSizeOrNot(testData.size)

})




























