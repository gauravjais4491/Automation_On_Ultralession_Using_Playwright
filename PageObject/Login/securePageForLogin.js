class SecurePageForLogin {
    constructor(page) {
        this.page = page;
    }
    get flashAlertForLogin () {
        return this.page.getByRole('link', { name: 'Log out' })
    }
}
module.exports = SecurePageForLogin;