import test, { expect } from "playwright/test";
import { customTest } from "../Fixtures/contactFixture.js";
import contactData from '../Data/contactData.json'

customTest.beforeEach('should go to contact page', async ({ page, homePage }) => {
    await page.goto('/', { waitUntil: 'networkidle' })
    await homePage.goToContactPage()
})
customTest('should create contact details', async ({ page, contactPage, securePageForContactPage }) => {
    await contactPage.addContactDetails(contactData.name, contactData.email, contactData.phone, contactData.message)
    expect((await securePageForContactPage.flashMessage.textContent())?.trim()).toBe(contactData.expectTextForSubmitContact)
})