class Footer {
    constructor(page) {
        this.page = page;
    }
    get isFooterPresent() {
        return this.page.locator('.footer')
    }

    get isQuickLinksPresent() {
        return this.page.getByRole('heading', { name: 'Quick links' })
    }

    get subscribeUsingEmailLocator() {
        return this.page.getByPlaceholder('Email')
    }
    get submitEmailBtn() {
        return this.page.getByLabel('Subscribe')
    }
    async subscribeToPage(email) {
        await this.subscribeUsingEmailLocator.pressSequentially(email, { delay: 500 })
        await this.submitEmailBtn.click()
    }
}
module.exports = Footer;