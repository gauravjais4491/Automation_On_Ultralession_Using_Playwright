class SecurePageForHomePage {
    constructor(page) {
        this.page = page;
    }
    get flashAlertForHomePage() {
        return this.page.locator('.collection-hero__title')
    }
}
module.exports = SecurePageForHomePage