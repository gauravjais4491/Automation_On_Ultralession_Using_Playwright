class PaymentDetailsPage {
    constructor(page) {
        this.page = page
    }
    get iframe_number() {
        return this.page.frameLocator("//*[@class='card-fields-iframe' and @title='Field container for: Card number']");
    }
    get iframe_name() {
        return this.page.frameLocator("//*[@class='card-fields-iframe' and @title='Field container for: Name on card']");
    }
    get iframe_expiry() {
        return this.page.frameLocator("//*[@class='card-fields-iframe' and @title='Field container for: Expiration date (MM / YY)']");
    }
    get iframe_Security() {
        return this.page.frameLocator(`//*[@class='card-fields-iframe' and @title='Field container for: Security code']`)
    }
    get payBtn() {
        return this.page.locator(`div[id='pay-button-container'] button`)
    }
    get number() {
        return this.iframe_number.locator("#number")
    }
    get name() {
        return this.iframe_name.locator("#name")
    }
    get expiryDate() {
        return this.iframe_expiry.locator(`[name="expiry"]`)
    }
    get verification_value() {
        return this.iframe_Security.locator(`[name="verification_value"]`)
    }

    async addPaymentDeatils(cardNumber, nameOnCard, expiry, cvv) {

        await this.number.fill(cardNumber)
        await this.name.fill(nameOnCard)
        await this.expiryDate.fill(expiry)
        await this.verification_value.fill(cvv)
        await this.payBtn.click({
            force: true
        })
    }
}
module.exports = PaymentDetailsPage;