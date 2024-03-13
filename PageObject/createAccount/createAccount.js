class CreateAccount {
    constructor(page) {
        this.page = page
    }
    get login() {
        return this.page.getByRole('link', { name: 'Log in' })
    }
    get register() {
        return this.page.getByRole('link', { name: 'Create account' })
    }
    get firstName() {
        return this.page.getByPlaceholder('First name')
    }
    get lastName() {
        return this.page.getByPlaceholder('Last name')
    }
    get email() {
        return this.page.locator('#RegisterForm-email')
    }
    get password() {
        return this.page.getByPlaceholder('Password')
    }
    get createBtn() {
        return this.page.getByRole('button', { name: 'Create' })
    }
    get account() {
        return this.page.getByRole('link', { name: 'Account' })
    }
    get logout() {
        return this.page.getByRole('link', { name: 'Log out' })
    }

    async addAccount(firstName, lastName, email, password, time) {
        await this.login.click()
        await this.register.click()
        await this.firstName.pressSequentially(firstName, { delay: time })
        await this.lastName.pressSequentially(lastName, { delay: time })
        await this.email.pressSequentially(email, { delay: time })
        await this.password.pressSequentially(password, { delay: time })
        await this.createBtn.click()
    }

}
module.exports = CreateAccount;