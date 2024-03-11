import { expect } from "playwright/test";
import footerData from "../Data/footerData.json"
import { customTest } from '../Fixtures/footerFixture.js'


let email
customTest.beforeEach(async ({ generateData }) => {
    email = await generateData.generateEmailAddress()
})

customTest('should subscribe', async ({ capcha, footer, securePageForFooter }, testInfo) => {

    await footer.subscribeToPage(email)
    if (await capcha.checkForCapcha(testInfo.title)) {
        console.log(`Capcha Caught in ${testInfo.title}: `, (await capcha.flashCapcha.textContent())?.trim());
    }
    else {
        expect((await securePageForFooter.flashForSuscribeSucessfully.textContent())?.trim()).toBe(footerData.expectedTextForSubscribers)
    }
})
