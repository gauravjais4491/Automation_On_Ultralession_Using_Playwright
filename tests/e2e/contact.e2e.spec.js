import { expect } from "playwright/test";
import { customTest } from "../../Fixtures/contactFixture.js";
import contactData from '../../Data/contactData.json'

customTest.beforeEach('should go to contact page', async ({ page, homePage }) => {
    await homePage.goToContactPage()
    
})
customTest('should create contact details', async ({ contactPage, securePageForContactPage, capcha }, testInfo) => {
    await contactPage.addContactDetails(contactData.name, contactData.email, contactData.phone, contactData.message)
    if (await capcha.checkForCapcha(testInfo.title)) {
        console.log(`Capcha Caught in ${testInfo.title}: `, (await capcha.flashCapcha.textContent())?.trim());
    }
    else {
        expect((await securePageForContactPage.flashMessage.textContent())?.trim()).toBe(contactData.expectTextForSubmitContact)
    }
    
})