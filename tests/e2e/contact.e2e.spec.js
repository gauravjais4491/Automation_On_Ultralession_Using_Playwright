import { expect } from "playwright/test";
import { customTest } from "../../Fixtures/contactFixture.js";
import contactData from '../../Data/contactData.json'

customTest.beforeEach('should go to contact page', async ({ homePage }) => {
    await homePage.goToContactPage()

})
customTest('should create contact details', async ({ contactPage, securePageForContactPage, captcha }, testInfo) => {
    await contactPage.addContactDetails(contactData.name, contactData.email, contactData.phone, contactData.message)
    if (await captcha.checkForCaptcha(testInfo.title)) {
        console.log(`Captcha Caught in ${testInfo.title}: `, (await captcha.flashCaptcha.textContent())?.trim());
    }
    else {
        expect((await securePageForContactPage.flashMessage.textContent())?.trim()).toBe(contactData.expectTextForSubmitContact)
    }
})