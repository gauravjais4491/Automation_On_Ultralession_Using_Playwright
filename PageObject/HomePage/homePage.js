class HomePage {
    constructor(page) {
        this.page = page;
    }
    get viewBtnForStore() {
        return this.page.locator('[href="/collections/all"] span')
    }
    get viewBtnForContact() {
        return this.page.locator(`[href="/pages/contact"]:visible`)
    }
    async goToStorePage() {
        await this.viewBtnForStore.click()
    }
    async goToContactPage(){
        await this.viewBtnForContact.click()
    }
}
module.exports = HomePage