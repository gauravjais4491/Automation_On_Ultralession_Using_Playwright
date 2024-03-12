class Footer {
    constructor(page) {
        this.page = page;
    }
    get isFooterPresent() {
        return this.page.locator('.footer')
    }

    get isQuickLinksPresent() {
        return this.page.locator('.footer-block__heading', { hasText: 'Quick links' })
    }

    async isSearchLinkPresent() {
        return this.page.locator('[href="/search"]')
    }
    get subscribeUsingEmailLocator() {
        return this.page.getByPlaceholder('Email')
    }
    get submitEmailBtn() {
        return this.page.locator('#Subscribe')
    }
    async subscribeToPage(email) {
        await this.subscribeUsingEmailLocator.pressSequentially(email, { delay: 500 })
        await this.submitEmailBtn.click()
    }
    async confirmSubscription() {
        if ((await this.page.title()) === "Challenge – ul-web-playground") {
            log("page title - ", await this.page.title());
            return null;
        }
        log("page title - +", await this.page.title());
        return true;
    }

    async changeCountryRegion() {
        const ulElement = await this.page.$("id=FooterCountryList");

        if (ulElement) {
            for (let i = 1; i <= 5; i++) {
                await this.actions.clickOnSelector("#FooterCountryForm > div > div > button");

                await this.page.waitForTimeout(1000);

                await this.actions.clickOnSelector(`#FooterCountryList > li:nth-child(${i})`);

                await this.page.waitForLoadState("load");
            }
        } else {
            console.log("UL element not found.");
        }
    }
    async isElementVisible(selector) {
        const elementHandle = await this.page.isVisible(selector);
        if (elementHandle) {
            console.log("Element found..!");
            return true;
        } else {
            console.log("Element not found..!");
            return false;
        }
    }

    async isElementClickable(selector) {
        try {
            await this.page.click(selector);
            return true;
        } catch (error) {
            return false;
        }
    }
    async isElementEnabled(element) {
        return await element.isEnabled();
    }

    async getByRoleAndName(role, text) {
        return await this.page.getByRole(role, { name: text });
    }

    async isElementPresent(selector) {
        const element = await this.page.$(selector);
        return element !== null ? element : false;
    }
    async waitToLoad() {
        await this.page.waitForTimeout(1500);
    }

    async getText(selector) {
        const text = await this.page.$eval(
            selector,
            (element) => element.textContent
        );
        return text;
    }

    async isHeaderAndFooterPresent() {
        const isHeaderPresent = await this.isElementPresent(
            ".header header--middle-left page-width header--has-menu"
        );
        const isFooterPresent = await this.isElementPresent(
            ".footer__content-top page-width"
        );
        return isHeaderPresent && isFooterPresent;
    }
}
module.exports = Footer;