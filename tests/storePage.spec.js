const { expect } = require('@playwright/test')
const testData = require('../Data/storePageData.json');
import { customTest } from '../Fixtures/storePageFixture';


customTest.beforeEach('Should go to store page', async ({ homePage, securePageForHomePage }) => {

    await homePage.goToStorePage()
    const getTextForHomePageToStorePage = await securePageForHomePage.flashAlertForHomePage.textContent();
    expect(await getTextForHomePageToStorePage.includes(testData.expectedTextForStorePage)).toBeTruthy()
})
customTest('should filter price based on brand', async ({ storePage, securePageForStorePage }, testInfo) => {
    console.log(testInfo.title);

    await storePage.filterProductAccordingToBrand(testData.brandName)
    await securePageForStorePage.isFilteredAccordingToBrandNameOrNot(testData.brandName)
});

customTest('should filter product according to price range', async ({ storePage, securePageForStorePage }, testInfo) => {
    console.log(testInfo.title);

    await storePage.addPriceRange(testData.priceFrom, testData.priceTo)
    await securePageForStorePage.isFilteredAccordingToPriceRangeOrNot(testData.priceFrom, testData.priceTo)

});

customTest('should filter product according to product types', async ({ storePage, securePageForStorePage }, testInfo) => {
    console.log(testInfo.title);

    await storePage.filterProductAccordingToProductType(testData.productTypes)
    await securePageForStorePage.isFilteredAccordingToProductTypeOrNot(testData.productTypes)

});

customTest('should filter product according to product size', async ({ storePage, securePageForStorePage }, testInfo) => {
    console.log(testInfo.title);

    await storePage.filterProductAccordingToSize(testData.size)
    await securePageForStorePage.isFilteredAccordingToSizeOrNot(testData.size)

})




























