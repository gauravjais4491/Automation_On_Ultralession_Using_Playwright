import { expect } from '@playwright/test'
import { customTest } from '../../Fixtures/createAccountFixture'


customTest.beforeEach(async ({ context, homePage, login }) => {
    await context.clearCookies()
    await homePage.goToLoginPage()
    await login.goToCreateAccountPage()
})
customTest.fail('should take screenshot of create account page', async ({ page }, testInfo) => {
    const indianTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const timestamp = indianTime.replace(/:/g, '-');
    await page.screenshot({ path: `./Screenshots/${testInfo.title}-${timestamp}.png` });
    await expect(page).toHaveScreenshot({ mask: [page.getByRole('heading', { name: 'Create Account' })], maskColor: "orange" })
})