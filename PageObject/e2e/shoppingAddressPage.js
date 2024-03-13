class ShoppingAddressPage {
    constructor(page) {
        this.page = page
    }
    get checkUpdateNewsAndOfferButton() {
        return this.page.getByLabel('Email me with news and offers')
    }
    async addContactDetails() {
        await this.checkUpdateNewsAndOfferButton.click()
    };

    get addFirstName() {
        return this.page.getByLabel('First name (optional)')
    }
    get addLastName() {
        return this.page.getByLabel('Last name')
    }
    get addDeliveryAddress() {
        return this.page.getByPlaceholder('Address')
    }
    get suggestionBox() {
        return this.page.getByRole('option', { name: 'TestVagrant Technologies, 100' })
    }
    get waitForDataLoad() {
        return this.page.locator("#shipping_methods")
    }
    get addCity() {
        return this.page.getByLabel('City')
    }
    get addState() {
        return this.page.getByLabel('State')
    }
    get addPostalCode() {
        return this.page.getByLabel('PIN code')
    }
    async addShippingAddress(firstName, lastName, address, city, state, postalCode) {
        await this.addFirstName.fill(firstName)
        await this.addLastName.fill(lastName)
        await this.addDeliveryAddress.pressSequentially(address, { delay: 200 })
        await this.suggestionBox.click({ force: true })
        await this.waitForDataLoad.waitFor('attached')
        await this.addCity.fill(city)
        await this.addState.click({ force: true })
        await this.addState.selectOption(state)
        await this.addPostalCode.fill(postalCode)
    };
}
module.exports = ShoppingAddressPage