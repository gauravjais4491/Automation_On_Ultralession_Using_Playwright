class Login {

    constructor(page) {
        this.page = page
    }
    get register() {
        return this.page.getByRole('link', { name: 'Create account' })
    }
    get loginBtn() {
        return this.page.getByRole('link', { name: 'Log in' })
    }
    get emailId() {
        return this.page.locator('#CustomerEmail')
    }
    get password() {
        return this.page.getByPlaceholder('Password')
    }
    get signIn() {
        return this.page.getByRole('button', { name: 'Sign in' })
    }
    async goToCreateAccountPage() {
        await this.register.click()
        await this.page.waitForLoadState('networkidle')
    }
    async userLogin(emailId, password, delayTime) {
        await this.loginBtn.click()
        await this.page.waitForLoadState('networkidle')
        await this.emailId.pressSequentially(emailId, { delay: delayTime })
        await this.password.pressSequentially(password, { delay: delayTime })
        await this.signIn.click()
        await this.page.waitForTimeout(3000)
    }

}

module.exports = Login