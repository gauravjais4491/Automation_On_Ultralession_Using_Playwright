const { expect } = require("playwright/test");

class StorePage {
    constructor(page) {
        this.page = page;
    }
    get priceBtn() {
        return this.page.locator('#FacetsWrapperDesktop').getByText('Price', { exact: true })
    }
    get PriceGTE() {
        return this.page.getByRole('spinbutton', { name: 'From' })
    }
    get PriceLTE() {
        return this.page.getByRole('spinbutton', { name: 'To' })
    }
    async addPriceRange(filterPriceFrom, filterPriceTo) {
        await this.priceBtn.click();
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
    get brandBtn(){
        return this.page.locator('#FacetsWrapperDesktop').getByText('Brand') 
    }
    async clickBrand() {
        await this.brandBtn.click();
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
    get productTypeBtn(){
        return this.page.locator('#FacetsWrapperDesktop').getByText('Product type')
    }
    async clickProductType() {
        await this.productTypeBtn.click();
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
    get sizeBtn(){
        return this.page.locator('#FacetsWrapperDesktop').getByText('Size', { exact: true })
    }
    async clickSizeBtn() {
        await this.sizeBtn.click();
    }
    productSizeMatches(productSizeArray, productType) {
        return productSizeArray.some((size) => productType === size);
    }
    async clickSizeLabel(labelSelector) {
        const sizeLabel = await this.page.locator(labelSelector);
        await sizeLabel.click();
    }

    product(productName) {
        return this.page.locator(`.card-information__text.h5`).filter({hasText: productName})
    }
    async goToProductDetailsPage(productName) {
        await this.product(productName).click()
    }
}

module.exports = StorePage;