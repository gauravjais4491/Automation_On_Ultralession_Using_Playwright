import { expect } from '@playwright/test'
import { customTest } from '../../Fixtures/contactFixture'


customTest.beforeEach('should go to contact page', async ({ homePage }) => {
    await homePage.goToContactPage()

})

customTest.fail('should take screenshot of contact page', async ({ page }) => {
    await expect(page).toHaveScreenshot({
        mask: [page.getByRole('heading', { name: 'Contact' })],
        maskColor: "red"
    })
})