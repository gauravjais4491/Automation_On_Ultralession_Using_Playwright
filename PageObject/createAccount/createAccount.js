class CreateAccount {
    constructor(page) {
        this.page = page
    }
    get login(){
        return this.page.locator(`[href$='/account/login']:visible`)
    }
    get register(){
        return this.page.locator(`[href$='/account/register']:visible`)
    }
    get firstName(){
        return this.page.getByPlaceholder('First name')
    }
    get lastName(){
        return this.page.getByPlaceholder('Last name')
    }
    get email(){
        return this.page.locator('#RegisterForm-email')
    }
    get password(){
        return this.page.locator('#RegisterForm-password')
    }
    get createBtn(){
        return this.page.getByRole('button', { name: 'Create' })
    }
    get account(){
        return this.page.locator(`[href$='/account']:visible`)
    }
    get logout(){
        return this.page.locator(`[href$='/account/logout']:visible`)
    }

    async addAccount() {
        await this.login.click()
        await this.register.click()
        await this.firstName.pressSequentially('hello', { delay: 300 })
        await this.lastName.pressSequentially('world', { delay: 300 })
        await this.email.pressSequentially('automation4@testing.com', { delay: 300 })
        await this.password.pressSequentially('automation@123', { delay: 300 })
        await this.createBtn.click()
        await this.account.click()
    }
    
}
module.exports = CreateAccount;