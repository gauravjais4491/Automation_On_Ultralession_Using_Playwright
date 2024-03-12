class StorePage {
    constructor(page) {
        this.page = page
    }
    product(productName) {
        return this.page.locator(`.card-information__text.h5`).filter({hasText: productName})
    }
    async goToProductDetailsPage(productName) {
        await this.product(productName).click()
    }
}
module.exports = StorePage