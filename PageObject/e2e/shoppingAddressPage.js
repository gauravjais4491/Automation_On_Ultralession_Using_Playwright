class ShoppingAddressPage {
    constructor(page) {
        this.page = page
    }
    get checkUpdateNewsAndOfferButton() {
        return this.page.locator("#marketing_opt_in")
    }
    async addContactDetails() {
        await this.checkUpdateNewsAndOfferButton.click()
    };

    get addFirstName() {
        return this.page.locator(`body > div:nth-child(37) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > main:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(2) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)> div:first-child>div:nth-child(2)>div:first-child`)
    }
    get addLastName() {
        return this.page.locator("#TextField1")
    }
    get addDeliveryAddress() {
        return this.page.locator("#shipping-address1")
    }
    get suggestionBox() {
        return this.page.locator(`#"shipping-address1-option-0`)
    }
    get waitForDataLoad() {
        return this.page.locator("#shipping_methods")
    }
    get addCity() {
        return this.page.locator(`#TextField2`)
    }
    get addState() {
        return this.page.locator('#Select1')
    }
    get addPostalCode() {
        return this.page.locator(`#TextField3`)
    }
    async addShippingAddress(firstName, lastName, address, city, state, postalCode) {
        await this.addFirstName.fill(firstName)
        await this.addLastName.fill(lastName)
        await this.addDeliveryAddress.fill(address)
        await this.suggestionBox.click({ force: true })
        await this.waitForDataLoad.waitFor('attached')
        await this.addCity.fill(city)
        await this.addState.click({ force: true })
        await this.addState.selectOption(state)
        await this.addPostalCode.fill(postalCode)
    };  
}
module.exports = ShoppingAddressPage