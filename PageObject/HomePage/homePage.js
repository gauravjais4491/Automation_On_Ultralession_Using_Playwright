class HomePage {
    constructor(page) {
        this.page = page;
    }
    get viewBtnForStore() {
        return this.page.locator('[href="/collections/all"] span')
    }
    async goToStorePage() {
        await this.viewBtnForStore.click()
    }
}
module.exports = HomePage