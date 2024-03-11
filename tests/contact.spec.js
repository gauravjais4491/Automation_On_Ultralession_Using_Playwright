import test, { expect } from "playwright/test";
import { customTest } from "../Fixtures/contactFixture.js";
import contactData from '../Data/contactData.json'

customTest.beforeEach('should go to contact page', async ({ page, homePage }) => {
    await page.goto('/', { waitUntil: 'networkidle' })
    await homePage.goToContactPage()
    await page.waitForLoadState('networkidle')
})
customTest('should create contact details', async ({ contactPage, securePageForContactPage }, testInfo) => {
    try {
        console.log(testInfo.title);
        await contactPage.addContactDetails(contactData.name, contactData.email, contactData.phone, contactData.message)
        expect((await securePageForContactPage.flashMessage.textContent())?.trim()).toBe(contactData.expectTextForSubmitContact)
    } catch (error) {
        await page.screenshots('./screenshots/' + testInfo.title + '.png')
        console.log("Error occured during contact tests: " + error);
    }
})