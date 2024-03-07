class CreateAccount {
    constructor(page) {
        this.page = page
    }
    get login() {
        return this.page.locator(`[href$='/account/login']:visible`)
    }
    get register() {
        return this.page.locator(`[href$='/account/register']:visible`)
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
        return this.page.locator('#RegisterForm-password')
    }
    get createBtn() {
        return this.page.getByRole('button', { name: 'Create' })
    }
    get account() {
        return this.page.locator(`[href$='/account']:visible`)
    }
    get logout() {
        return this.page.locator(`[href$='/account/logout']:visible`)
    }
    get capcha() {
        return this.page.locator('.rc-inline-block')
    }
    get submitCapchaBtn() {
        return this.page.locator('.shopify-challenge__button.btn')
    }

    async addAccount(title, firstName, lastName, email, password, time) {
        console.log(email + " " + title);
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