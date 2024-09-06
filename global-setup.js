import { chromium, expect } from '@playwright/test';
import data from './Data/userData.json'
import Login from './PageObject/Login/login.js';
import SecurePageForLogin from './PageObject/Login/securePageForLogin.js';
import Captcha from './CommonUtils/captcha.js';

const globalSetup = async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    const captcha = new Captcha(page)
    const title = 'globalSetup'
    const login = new Login(page)
    const securePageForLogin = new SecurePageForLogin(page)

    await page.goto(data.url, { waitUntil: 'networkidle' });
    await login.userLogin(data.emailId, data.password, data.delayTime)
    await page.waitForTimeout(3000)
    if (await captcha.checkForCaptcha(title)) {
        console.log(`Captcha Caught in ${title}: `, (await captcha.flashCaptcha.textContent())?.trim());
    }
    else {
        await expect(await securePageForLogin.flashAlertForLogin).toBeVisible({ timeout: 30000 })
        await page.context().storageState({ path: "./LoginAuthCQ1.json" })
    }
    await browser.close()
};

export default globalSetup;