import { expect } from '@playwright/test'
import { customTest } from '../../Fixtures/createAccountFixture'
// import { argosScreenshot } from '@argos-ci/playwright'


customTest.beforeEach(async ({ context, homePage, login }) => {
    await context.clearCookies()
    await homePage.goToLoginPage()
    await login.goToCreateAccountPage()
})
customTest('should take screenshot of create account page', async ({ page },testInfo) => {
    await page.screenshot({ path: `./Screenshots/${testInfo.title}-${timestamp}.png` });
    await expect(page).toHaveScreenshot()
})