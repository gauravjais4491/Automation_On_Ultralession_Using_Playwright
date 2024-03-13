class ContactPage {

    constructor(page) {
        this.page = page;
    }
    get name() {
        return this.page.getByPlaceholder('Name')
    }
    get email() {
        return this.page.getByLabel('Email *')
    }
    get phone() {
        return this.page.getByPlaceholder('Phone number')
    }
    get body() {
        return this.page.getByPlaceholder('Comment')
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