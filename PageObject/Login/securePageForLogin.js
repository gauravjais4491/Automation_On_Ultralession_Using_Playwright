class SecurePageForLogin {
    constructor(page) {
        this.page = page;
    }
    get flashAlertForLogin () {
        return this.page.locator(`a[href='/account/logout']`)
    }
}
module.exports = SecurePageForLogin;