class ProductDetailsPage {
    constructor(page) {
        this.page = page
    }
    get inputQuantity() {
        return this.page.locator(".quantity__input");
    }
    get addToCartButton() {
        return this.page.getByRole('button', { name: "Add to cart" })
    }
    async addProductToCart(numberOfItems) {
        await this.inputQuantity.fill(numberOfItems);
        await this.addToCartButton.click();
    }
}
module.exports = ProductDetailsPage;
