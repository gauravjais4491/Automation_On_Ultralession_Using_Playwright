const { test, expect } = require("playwright/test");
import Capcha from "../../PageObject/Capcha/capcha";
import Login from "../../PageObject/Login/login";
import SecurePageForLogin from "../../PageObject/Login/securePageForLogin";
import data from "../../Data/userData.json"
import { customTest } from "../../Fixtures/loginFixture"


customTest.beforeEach(async ({ context }) => {
    await context.clearCookies()
})


customTest('should login', async ({ page, login, securePageForLogin, capcha }, testInfo) => {
    await login.userLogin(data.emailId, data.password, data.delayTime)
    if (await capcha.checkForCapcha(testInfo.title)) {
        console.log(`Capcha Caught in ${testInfo.title}: `, (await capcha.flashCapcha.textContent())?.trim());
    }
    else {
        await expect(await securePageForLogin.flashAlertForLogin).toBeVisible({ timeout: 30000 })
    }
})