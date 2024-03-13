class HomePage {
    constructor(page) {
        this.page = page;
    }
    get loginBtn() {
        return this.page.getByRole('link', { name: 'Log in' })
    }
    get viewBtnForStore() {
        return this.page.getByRole('link', { name: 'Store' })
    }
    get viewBtnForContact() {
        return this.page.getByRole('link', { name: 'Contact' })
    }
    async goToStorePage() {
        await this.viewBtnForStore.click()
        await this.page.waitForLoadState('networkidle')
    }
    async goToContactPage() {
        await this.viewBtnForContact.click()
        await this.page.waitForLoadState('networkidle')
    }
    async goToLoginPage() {
        await this.loginBtn.click({ force: true })
        await this.page.waitForLoadState('networkidle')
    }
}
module.exports = HomePage