const { expect } = require("playwright/test");

class StorePage {
    constructor(page) {
        this.page = page;
    }
    get priceBtn() {
        return this.page.locator('.focus-offset div span');
    }
    get PriceGTE() {
        return this.page.locator('#Filter-Price-GTE');
    }
    get PriceLTE() {
        return this.page.locator('#Filter-Price-LTE');
    }
    async addPriceRange(filterPriceFrom, filterPriceTo) {
        await this.priceBtn.nth(1).click();
        await this.PriceGTE.fill(filterPriceFrom);
        await this.PriceLTE.fill(filterPriceTo);
        await this.page.keyboard.press('Escape');
        while (await this.confirmationForFilters.count() !== 2) {

        }
    }

    async filterProductAccordingToBrand(brand) {
        await this.clickBrand();
        for (let i = 1; i <= 100; i++) {
            const labelSelector = `//label[@for='Filter-Brand-${i}']`;
            const brandName = await this.page.locator(labelSelector).textContent();
            const trimmedBrandName = brandName.trim();

            if (this.brandMatches(brand, trimmedBrandName)) {
                await this.clickBrandLabel(labelSelector);
            }
        }
        await this.page.keyboard.press('Escape');
        while (await this.confirmationForFilters.count() !== Object.keys(brand).length + 1) {

        }
    }
    async clickBrand() {
        await this.priceBtn.nth(3).click();
    }
    async clickBrandLabel(labelSelector) {
        const brandLabel = await this.page.locator(labelSelector);
        await brandLabel.click();
    }
    brandMatches(brandArray, brandName) {
        return brandArray.some((brand) => brandName.includes(brand));
    }

    async filterProductAccordingToProductType(productTypes) {
        await this.clickProductType();
        for (let i = 1; i <= 100; i++) {
            const labelSelector = `//label[@for='Filter-Product type-${i}']`;
            const productType = await this.page.locator(labelSelector).textContent();
            const trimmedProductType = productType.trim();
            if (this.productTypesMatches(productTypes, trimmedProductType)) {
                await this.clickProductTypeLabel(labelSelector);
            }
        }
        await this.page.keyboard.press('Escape');
        while (await this.confirmationForFilters.count() !== Object.keys(productTypes).length + 1) {

        }
    }
    async clickProductType() {
        await this.priceBtn.nth(2).click();
    }
    productTypesMatches(productTypesArray, productType) {
        return productTypesArray.some((type) => productType.includes(type));
    }
    async clickProductTypeLabel(labelSelector) {
        const productTypeLabel = await this.page.locator(labelSelector);
        await productTypeLabel.click();
    }

    async filterProductAccordingToSize(productSizes) {
        await this.clickSizeBtn();
        for (let i = 1; i <= 100; i++) {
            const labelSelector = `//label[@for='Filter-Size-${i}']`;
            const size = await this.page.locator(labelSelector).textContent();
            const sizeWithBracket = size.trim();
            const indexOfBracket = sizeWithBracket.indexOf('(');
            const trimmedSize = indexOfBracket !== -1 ? sizeWithBracket.substring(0, indexOfBracket).trim() : sizeWithBracket;

            if (this.productSizeMatches(productSizes, trimmedSize)) {
                await this.clickSizeLabel(labelSelector);
            }
        }
        await this.page.keyboard.press('Escape')
        while (await this.confirmationForFilters.count() !== Object.keys(productSizes).length + 1) {

        }
    }
    get confirmationForFilters() {
        return this.page.locator('.active-facets.active-facets-desktop').locator(' > facet-remove').locator(' > a').locator(' > span')
    }
    async clickSizeBtn() {
        await this.priceBtn.nth(4).click();
    }
    productSizeMatches(productSizeArray, productType) {
        return productSizeArray.some((size) => productType === size);
    }
    async clickSizeLabel(labelSelector) {
        const sizeLabel = await this.page.locator(labelSelector);
        await sizeLabel.click();
    }
}

module.exports = StorePage;