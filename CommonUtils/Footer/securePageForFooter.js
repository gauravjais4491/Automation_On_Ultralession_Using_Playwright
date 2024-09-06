class SecurePageForFooter {
    constructor(page) {
        this.page = page;
    }
    get flashForSubscribeSuccessfully(){
        return this.page.locator('#ContactFooter-success')
    }
}
module.exports = SecurePageForFooter;