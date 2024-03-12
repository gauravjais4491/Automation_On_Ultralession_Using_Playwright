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
        return this.page.locator("[id='TextField0']")
    }
    get addLastName() {
        return this.page.locator("[id='TextField1']")
    }
    get addDeliveryAddress() {
        return this.page.locator("[id='shipping-address1']")
    }
    get suggestionBox() {
        return this.page.locator(`[id="shipping-address1-option-0"]`)
    }
    get waitForDataLoad() {
        return this.page.locator('[id="shipping_methods"]')
    }
    get addCity() {
        return this.page.locator(`#TextField2`)
    }
    get addState() {
        return this.page.locator(`[id="Select1"]`)
    }
    get addPostalCode() {
        return this.page.locator(`#TextField3`)
    }
    get addInformationForNextTime() {
        return this.page.locator("[name=save_shipping_information]")
    }
    async addShippingAddress(firstName, lastName, address, city, state, postalCode) {
        await this.addFirstName.fill(firstName)
        await this.page.screenshot({ path: `./Screenshots/${firstName}.png` });
        await this.addLastName.fill(lastName)
        await this.page.screenshot({ path: `./Screenshots/${lastName}.png` });
        await this.addDeliveryAddress.fill(address)
        await this.page.screenshot({ path: `./Screenshots/${address}.png` });
        await this.suggestionBox.click({ force: true })
        await this.page.screenshot({ path: `./Screenshots/${address}-suggestion.png` });
        await this.waitForDataLoad.waitFor('attached')
        await this.addCity.fill(city)
        await this.page.screenshot({ path: `./Screenshots/${city}.png` });
        await this.addState.click({ force: true })
        await this.page.screenshot({ path: `./Screenshots/${state}.png` });
        await this.addState.selectOption(state)
        await this.page.screenshot({ path: `./Screenshots/${state}-selected.png` });
        await this.addPostalCode.fill(postalCode)
        await this.page.screenshot({ path: `./Screenshots/${postalCode}.png` });
    };  
}
module.exports = ShoppingAddressPage