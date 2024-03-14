import { expect } from '@playwright/test'
import { customTest } from '../../Fixtures/createAccountFixture'


customTest.beforeEach(async ({ context, homePage, login }) => {
    await context.clearCookies()
    await homePage.goToLoginPage()
    await login.goToCreateAccountPage()
})
customTest('should take screenshot of create account page', async ({ page }) => {
    await expect(page).toHaveScreenshot()
})