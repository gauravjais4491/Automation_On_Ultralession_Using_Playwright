class SecurePageForFooter {
    constructor(page) {
        this.page = page;
    }
    get flashForSuscribeSucessfully(){
        return this.page.locator('#ContactFooter-success')
    }
}
module.exports = SecurePageForFooter;