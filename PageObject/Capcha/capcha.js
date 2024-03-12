const { fa } = require("faker/lib/locales")

class Capcha {
    constructor(page) {
        this.page = page
    }
    get flashCapcha() {
        return this.page.locator('.shopify-challenge__message')
    }
    async confirmationForEvents(selector) {
        return this.page.locator(selector)
    }
    async checkForCapcha(title) {
        await this.page.waitForTimeout(3000)
        if (await this.flashCapcha.isVisible()) {
            const indianTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
            const timestamp = indianTime.replace(/:/g, '-');
            await this.page.screenshot({ path: `./Screenshots/${title}-${timestamp}.png` });
            return true;
        }
        return false;
    }
}

module.exports = Capcha;