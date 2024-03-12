class ContactPage {

    constructor(page) {
        this.page = page;
    }
    get name() {
        return this.page.locator('#ContactForm-name')
    }
    get email() {
        return this.page.locator('#ContactForm-email')
    }
    get phone() {
        return this.page.locator('#ContactForm-phone')
    }
    get body() {
        return this.page.locator('#ContactForm-body')
    }
    get submitBtn() {
        return this.page.getByRole('button', { name: 'Send' })
    }
    async addContactDetails(name, email, phone, message) {
        await this.name.clear()
        await this.name.pressSequentially(name, { delay: 500 })
        await this.email.clear()
        await this.email.pressSequentially(email, { delay: 500 })
        await this.phone.pressSequentially(phone, { delay: 500 })
        await this.body.pressSequentially(message, { delay: 500 })
        await this.submitBtn.click()
    }
}
module.exports = ContactPage