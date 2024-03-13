class SecurePageForCreateAccount {
    constructor(page){
        this.page = page;
    }
    get accountBtn() {
        return this.page.getByRole('link', { name: 'Account' })
    }
    get logoutBtn() {
        return this.page.getByRole('link', { name: 'Log out' })
    }
    async clickAccount(){
        await this.accountBtn.click()
    }
}
module.exports = SecurePageForCreateAccount