import { expect } from "playwright/test";
import footerData from "../../Data/footerData.json"
import { customTest } from '../../Fixtures/footerFixture.js'


let email
customTest.beforeEach(async ({ generateData }) => {
    email = await generateData.generateEmailAddress()
})

customTest('should subscribe', async ({ captcha, footer, securePageForFooter }, testInfo) => {

    await footer.subscribeToPage(email)
    if (await captcha.checkForCaptcha(testInfo.title)) {
        console.log(`Captcha Caught in ${testInfo.title}: `, (await captcha.flashCaptcha.textContent())?.trim());
    }
    else {
        expect((await securePageForFooter.flashForSubscribeSuccessfully.textContent())?.trim()).toBe(footerData.expectedTextForSubscribers)
    }
})

