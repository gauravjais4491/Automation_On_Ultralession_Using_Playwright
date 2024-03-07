import { chromium, expect } from '@playwright/test';
import data from './Data/userData.json'
const globalSetup = async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://web-playground.ultralesson.com/');
    await page.locator(`[href$='/account/login']:visible`).click()
    await page.locator('#CustomerEmail').pressSequentially(data.emailId, { delay: 500 })
    await page.locator('#CustomerPassword').pressSequentially(data.password, { delay: 500 })
    await page.getByRole('button', { name: 'Sign in' }).click()
    await expect(page.locator(`a[href='/account/logout']`)).toBeVisible({ timeout: 30000 })
    await page.context().storageState({ path: "./LoginAuthCQ.json" })
    await browser.close()
};

export default globalSetup;