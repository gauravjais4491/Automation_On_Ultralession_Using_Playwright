class Login {

    constructor(page) {
        this.page = page
    }
    get loginBtn() {
        return this.page.locator(`[href$='/account/login']:visible`)
    }
    get emailId() {
        return this.page.locator('#CustomerEmail')
    }
    get password() {
        return this.page.locator('#CustomerPassword')
    }
    get signIn() {
        return this.page.getByRole('button', { name: 'Sign in' })
    }
    async userLogin(emailId, password) {
        await this.loginBtn.click()
        await this.emailId.pressSequentially(emailId, { delay: 500 })
        await this.password.pressSequentially(password, { delay: 500 })
        await this.signIn.click()
        await this.page.waitForTimeout(3000)
    }

}

module.exports = Login