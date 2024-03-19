import test, { expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await test.step('navigation', async () => {
        await page.goto('/')
    })
})
test.only('should take screenshot of home page', async ({ page }) => {
    await page.waitForTimeout(2000)
    await expect(page).toHaveScreenshot({
        mask: [page.getByRole('heading', { name: 'ul-web-playground' }).getByRole('link')],
        maskColor: "orange"
    })
})