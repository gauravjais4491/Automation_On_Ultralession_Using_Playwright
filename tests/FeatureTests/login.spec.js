const { expect } = require("playwright/test");
import data from "../../Data/userData.json"
import { customTest } from "../../Fixtures/loginFixture"


customTest.beforeEach(async ({ context }) => {
    await context.clearCookies()
})


customTest('should login', async ({ login, securePageForLogin, captcha }, testInfo) => {
    await login.userLogin(data.emailId, data.password, data.delayTime)
    if (await captcha.checkForCaptcha(testInfo.title)) {
        console.log(`Captcha Caught in ${testInfo.title}: `, (await captcha.flashCaptcha.textContent())?.trim());
    }
    else {
        await expect(await securePageForLogin.flashAlertForLogin).toBeVisible({ timeout: 30000 })
    }
})