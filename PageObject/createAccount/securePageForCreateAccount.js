class SecurePageForCreateAccount {
    constructor(page){
        this.page = page;
    }
    get accountBtn(){
        return this.page.locator(`[href$='/account']:visible`)
    }
    get logoutBtn(){
        return this.page.locator(`[href$='/account/logout']:visible`)
    }
    async clickAccount(){
        await this.accountBtn.click()
    }
}
module.exports = SecurePageForCreateAccount