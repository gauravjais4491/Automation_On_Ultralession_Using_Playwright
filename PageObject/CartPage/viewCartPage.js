class ViewCartPage {
    constructor(page) {
        this.page = page
    }
    get cartNotificationButton() {
        return this.page.locator("#cart-notification-button");
    }
    get checkoutBtn() {
        return this.page.getByRole('button', { name: 'Check out' })
    }
    async goToShoppingAddressPage() {
        await this.cartNotificationButton.click();
        await this.checkoutBtn.click();
    }
}
module.exports = ViewCartPage